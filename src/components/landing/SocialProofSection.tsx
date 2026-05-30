import { Quote } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations/ru'

// ⚠️ REPLACE: имена партнёров - заменить на реальные названия салонов
const PARTNER_LOGOS = [
  'Beauty Room',
  'BarberHouse',
  'Spa Oasis',
  'Nail Studio',
  'Brow Bar',
  'Lux Salon',
]

const stats = [
  { numberKey: 'proof.stat1.number', labelKey: 'proof.stat1.label' },
  { numberKey: 'proof.stat2.number', labelKey: 'proof.stat2.label' },
  { numberKey: 'proof.stat3.number', labelKey: 'proof.stat3.label' },
] as const

const testimonials = [
  { textKey: 'proof.t1.text', nameKey: 'proof.t1.name', salonKey: 'proof.t1.salon' },
  { textKey: 'proof.t2.text', nameKey: 'proof.t2.name', salonKey: 'proof.t2.salon' },
  { textKey: 'proof.t3.text', nameKey: 'proof.t3.name', salonKey: 'proof.t3.salon' },
] as const

export function SocialProofSection() {
  const { t } = useLanguage()

  return (
    <section id="proof" className="py-16 sm:py-20 px-4 sm:px-6 bg-white border-y border-gray-100">
      <div className="max-w-5xl mx-auto">
        {/* Numbers band */}
        <div className="text-center mb-12">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            {t('proof.label')}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 leading-tight max-w-2xl mx-auto">
            {t('proof.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
          {stats.map((s) => (
            <div
              key={s.numberKey}
              className="bg-gradient-to-b from-blue-50/60 to-white rounded-2xl border border-blue-100/60 p-6 text-center"
            >
              <p className="text-4xl sm:text-5xl font-bold text-[#0A84FF] mb-2">
                {t(s.numberKey as TranslationKey)}
              </p>
              <p className="text-sm text-gray-500">{t(s.labelKey as TranslationKey)}</p>
            </div>
          ))}
        </div>

        {/* Partner logos strip (текстовая полоса - замените на <img> когда будут лого) */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-gray-400 mb-5">
            {t('proof.partners')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-70">
            {PARTNER_LOGOS.map((name) => (
              <span
                key={name}
                className="text-base sm:text-lg font-semibold text-gray-400 tracking-tight"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <p className="text-center text-sm font-medium text-gray-500 mb-6">
            {t('proof.testimonialsTitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {testimonials.map((tt) => (
              <figure
                key={tt.textKey}
                className="relative bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <Quote className="absolute top-5 right-5 w-5 h-5 text-[#0A84FF]/30" />
                <blockquote className="text-sm text-gray-700 leading-relaxed mb-5">
                  «{t(tt.textKey as TranslationKey)}»
                </blockquote>
                <figcaption className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#0A84FF]/10 flex items-center justify-center text-[#0A84FF] font-semibold text-sm">
                    {t(tt.nameKey as TranslationKey).charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {t(tt.nameKey as TranslationKey)}
                    </p>
                    <p className="text-xs text-gray-500">{t(tt.salonKey as TranslationKey)}</p>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
