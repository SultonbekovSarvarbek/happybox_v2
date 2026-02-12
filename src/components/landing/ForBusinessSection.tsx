import { Users, BarChart3, Settings, Globe } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations/ru'

const benefits = [
  {
    icon: Users,
    titleKey: 'business.clients.title' as TranslationKey,
    descriptionKey: 'business.clients.description' as TranslationKey,
  },
  {
    icon: Globe,
    titleKey: 'business.catalog.title' as TranslationKey,
    descriptionKey: 'business.catalog.description' as TranslationKey,
  },
  {
    icon: Settings,
    titleKey: 'business.cabinet.title' as TranslationKey,
    descriptionKey: 'business.cabinet.description' as TranslationKey,
  },
  {
    icon: BarChart3,
    titleKey: 'business.analytics.title' as TranslationKey,
    descriptionKey: 'business.analytics.description' as TranslationKey,
  },
]

export function ForBusinessSection() {
  const { t } = useLanguage()

  return (
    <section id="for-business" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            {t('business.label')}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            {t('business.title1')}{' '}
            <span className="text-[#0A84FF]">{t('business.title2')}</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto">
            {t('business.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b) => (
            <div
              key={b.titleKey}
              className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:shadow-md hover:border-[#0A84FF]/20 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0A84FF]/10 flex items-center justify-center shrink-0">
                <b.icon className="h-5 w-5 text-[#0A84FF]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{t(b.titleKey)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t(b.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
