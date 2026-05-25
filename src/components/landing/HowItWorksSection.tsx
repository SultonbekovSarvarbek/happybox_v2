import { FileText, Settings2, ShoppingBag, QrCode } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations/ru'

const steps = [
  {
    icon: FileText,
    titleKey: 'howItWorks.step1.title' as TranslationKey,
    descriptionKey: 'howItWorks.step1.description' as TranslationKey,
  },
  {
    icon: Settings2,
    titleKey: 'howItWorks.step2.title' as TranslationKey,
    descriptionKey: 'howItWorks.step2.description' as TranslationKey,
  },
  {
    icon: ShoppingBag,
    titleKey: 'howItWorks.step3.title' as TranslationKey,
    descriptionKey: 'howItWorks.step3.description' as TranslationKey,
  },
  {
    icon: QrCode,
    titleKey: 'howItWorks.step4.title' as TranslationKey,
    descriptionKey: 'howItWorks.step4.description' as TranslationKey,
  },
]

export function HowItWorksSection() {
  const { t } = useLanguage()

  return (
    <section id="how-it-works" className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            {t('howItWorks.label')}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            {t('howItWorks.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={item.titleKey}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md hover:border-[#0A84FF]/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0A84FF]/10 flex items-center justify-center mb-5">
                <item.icon className="h-5 w-5 text-[#0A84FF]" />
              </div>

              <h3 className="text-base font-semibold text-gray-900 mb-2 leading-snug">
                {t(item.titleKey)}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {t(item.descriptionKey)}
              </p>

              <span className="absolute top-5 right-5 text-xs font-semibold text-gray-300">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
