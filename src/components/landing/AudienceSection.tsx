import { Scissors, Sparkles, Flower2, Hand, Stethoscope, Eye } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations/ru'

const items = [
  { icon: Sparkles, key: 'audience.salon' as TranslationKey },
  { icon: Scissors, key: 'audience.barber' as TranslationKey },
  { icon: Flower2, key: 'audience.spa' as TranslationKey },
  { icon: Hand, key: 'audience.nails' as TranslationKey },
  { icon: Stethoscope, key: 'audience.cosmetology' as TranslationKey },
  { icon: Eye, key: 'audience.brows' as TranslationKey },
]

export function AudienceSection() {
  const { t } = useLanguage()

  return (
    <section id="audience" className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            {t('audience.label')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 leading-tight mb-4">
            {t('audience.title')}
          </h2>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            {t('audience.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {items.map((item) => (
            <div
              key={item.key}
              className="flex flex-col items-center text-center gap-3 p-5 rounded-2xl border border-gray-100 hover:border-[#0A84FF]/30 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0A84FF]/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-[#0A84FF]" />
              </div>
              <p className="text-sm font-medium text-gray-900 leading-snug">{t(item.key)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
