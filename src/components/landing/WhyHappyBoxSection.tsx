import { Zap, CalendarHeart, Smartphone, LayoutGrid } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations/ru'

const reasons = [
  {
    icon: Zap,
    titleKey: 'why.fast.title' as TranslationKey,
    descriptionKey: 'why.fast.description' as TranslationKey,
  },
  {
    icon: CalendarHeart,
    titleKey: 'why.occasion.title' as TranslationKey,
    descriptionKey: 'why.occasion.description' as TranslationKey,
  },
  {
    icon: Smartphone,
    titleKey: 'why.digital.title' as TranslationKey,
    descriptionKey: 'why.digital.description' as TranslationKey,
  },
  {
    icon: LayoutGrid,
    titleKey: 'why.variety.title' as TranslationKey,
    descriptionKey: 'why.variety.description' as TranslationKey,
  },
]

export function WhyHappyBoxSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            {t('why.label')}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {t('why.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.titleKey}
              className="flex items-start gap-5 p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-md hover:border-[#0A84FF]/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0A84FF]/10 flex items-center justify-center shrink-0">
                <reason.icon className="h-6 w-6 text-[#0A84FF]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {t(reason.titleKey)}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {t(reason.descriptionKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
