import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Basic',
    price: '300 000',
    features: [
      'До 3 активных сертификатов',
      'Кабинет партнёра',
      'Базовая аналитика',
      'Размещение в каталоге',
    ],
  },
  {
    name: 'Pro',
    price: '600 000',
    highlighted: true,
    features: [
      'До 10 сертификатов',
      'Показ в рекомендациях',
      'Поднятие сертификатов в топ',
      'Расширенная аналитика',
      'Приоритетная поддержка',
      'Размещение в каталоге',
      'Кабинет партнёра',
    ],
  },
]

const terms = [
  'Комиссия с продаж отсутствует',
  'Можно приостановить размещение в любой момент',
  'Подписка оплачивается за доступ к платформе на 30 дней',
]

export function PricingSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            Тарифы
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
            Простое ценообразование
          </h2>
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
            14 дней бесплатного тестового периода
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-7 border ${
                plan.highlighted
                  ? 'border-[#0A84FF] shadow-lg shadow-blue-500/10'
                  : 'border-gray-100'
              }`}
            >
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-sm text-gray-400">сум / мес</span>
                </div>
              </div>

              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-[#0A84FF] mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Terms */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-4">Условия</h4>
          <ul className="space-y-2">
            {terms.map((t) => (
              <li key={t} className="flex items-start gap-2.5 text-sm text-gray-500">
                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-400 text-sm mb-5">Готовы подключиться?</p>
          <a
            href="mailto:info@happybox.uz"
            className="inline-flex items-center justify-center bg-[#0A84FF] hover:bg-[#0070E0] text-white px-8 py-3.5 text-base font-medium rounded-xl shadow-lg shadow-blue-500/15 transition-all hover:shadow-xl hover:shadow-blue-500/25"
          >
            Оставить заявку
          </a>
        </div>
      </div>
    </section>
  )
}
