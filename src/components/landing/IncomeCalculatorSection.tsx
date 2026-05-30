import { useMemo, useState } from 'react'
import { Calculator, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import { track } from '@/lib/amplitude'

const COMMISSION_RATE = 0.12

function formatMoney(value: number, currency: string) {
  // Группируем тысячи неразрывными пробелами для читаемости
  const rounded = Math.round(value)
  return `${rounded.toLocaleString('ru-RU').replace(/,/g, ' ')} ${currency}`
}

export function IncomeCalculatorSection() {
  const { t } = useLanguage()
  const currency = t('calc.currency')

  const [avgCheck, setAvgCheck] = useState(300_000)
  const [clients, setClients] = useState(200)
  const [percent, setPercent] = useState(10)

  const { revenue, commission, net } = useMemo(() => {
    const certificates = Math.round((clients * percent) / 100)
    const rev = certificates * avgCheck
    const com = rev * COMMISSION_RATE
    return { revenue: rev, commission: com, net: rev - com }
  }, [avgCheck, clients, percent])

  function handleCta() {
    track('calculator_cta_clicked', { avgCheck, clients, percent, net })
  }

  return (
    <section id="calculator" className="py-20 sm:py-28 px-4 sm:px-6 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            {t('calc.label')}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            {t('calc.title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            {t('calc.subtitle')}
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            {/* Inputs */}
            <div className="lg:col-span-3 p-6 sm:p-10 space-y-8">
              <RangeRow
                icon={<Calculator className="w-4 h-4" />}
                label={t('calc.avgCheck')}
                value={formatMoney(avgCheck, currency)}
                min={100_000}
                max={1_500_000}
                step={50_000}
                current={avgCheck}
                onChange={setAvgCheck}
              />
              <RangeRow
                label={t('calc.clients')}
                value={`${clients}`}
                min={20}
                max={1000}
                step={10}
                current={clients}
                onChange={setClients}
              />
              <RangeRow
                label={t('calc.percent')}
                value={`${percent}%`}
                min={1}
                max={40}
                step={1}
                current={percent}
                onChange={setPercent}
              />
              <p className="text-xs text-gray-400 leading-relaxed">{t('calc.disclaimer')}</p>
            </div>

            {/* Result */}
            <div className="lg:col-span-2 bg-[#0A84FF] text-white p-6 sm:p-10 flex flex-col justify-between">
              <div className="space-y-5">
                <div>
                  <p className="text-xs uppercase tracking-widest text-blue-100/80 mb-2">
                    {t('calc.result.revenueLabel')}
                  </p>
                  <p className="text-2xl sm:text-3xl font-semibold">
                    {formatMoney(revenue, currency)}
                    <span className="text-sm font-normal text-blue-100/70 ml-1">
                      {t('calc.result.perMonth')}
                    </span>
                  </p>
                </div>
                <div className="border-t border-white/15 pt-5">
                  <p className="text-xs uppercase tracking-widest text-blue-100/80 mb-2">
                    {t('calc.result.commissionLabel')}
                  </p>
                  <p className="text-lg font-medium text-blue-100">
                    − {formatMoney(commission, currency)}
                  </p>
                </div>
                <div className="border-t border-white/15 pt-5">
                  <p className="text-xs uppercase tracking-widest text-blue-100/80 mb-2 flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5" /> {t('calc.result.netLabel')}
                  </p>
                  <p className="text-3xl sm:text-4xl font-bold">
                    {formatMoney(net, currency)}
                    <span className="text-sm font-normal text-blue-100/80 ml-1">
                      {t('calc.result.perMonth')}
                    </span>
                  </p>
                </div>
              </div>

              <a
                href="#lead"
                onClick={handleCta}
                className="mt-8 inline-flex items-center justify-center bg-white text-[#0A84FF] hover:bg-blue-50 px-6 py-3.5 text-sm sm:text-base font-medium rounded-xl transition-all"
              >
                {t('calc.cta')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RangeRow({
  icon,
  label,
  value,
  min,
  max,
  step,
  current,
  onChange,
}: {
  icon?: React.ReactNode
  label: string
  value: string
  min: number
  max: number
  step: number
  current: number
  onChange: (n: number) => void
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
          {icon}
          {label}
        </label>
        <span className="text-sm font-semibold text-[#0A84FF] tabular-nums">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-full bg-blue-50 accent-[#0A84FF] cursor-pointer"
      />
    </div>
  )
}
