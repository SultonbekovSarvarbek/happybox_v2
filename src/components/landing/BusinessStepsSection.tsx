import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations/ru'

const steps = [
  { num: '1', titleKey: 'businessSteps.step1.title' as TranslationKey, descriptionKey: 'businessSteps.step1.description' as TranslationKey },
  { num: '2', titleKey: 'businessSteps.step2.title' as TranslationKey, descriptionKey: 'businessSteps.step2.description' as TranslationKey },
  { num: '3', titleKey: 'businessSteps.step3.title' as TranslationKey, descriptionKey: 'businessSteps.step3.description' as TranslationKey },
  { num: '4', titleKey: 'businessSteps.step4.title' as TranslationKey, descriptionKey: 'businessSteps.step4.description' as TranslationKey },
]

export function BusinessStepsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            {t('businessSteps.label')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            {t('businessSteps.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div key={s.num} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100">
              <span className="w-10 h-10 rounded-full bg-[#0A84FF] text-white text-sm font-bold flex items-center justify-center shrink-0">
                {s.num}
              </span>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{t(s.titleKey)}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{t(s.descriptionKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
