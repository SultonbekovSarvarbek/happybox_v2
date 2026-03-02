import { Check, Instagram } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations/ru'

const plans = [
  {
    name: 'Basic',
    price: '300 000',
    featureKeys: [
      'pricing.basic.f1' as TranslationKey,
      'pricing.basic.f2' as TranslationKey,
      'pricing.basic.f3' as TranslationKey,
      'pricing.basic.f4' as TranslationKey,
      'pricing.basic.f5' as TranslationKey,
    ],
  },
  {
    name: 'Pro',
    price: '600 000',
    highlighted: true,
    featureKeys: [
      'pricing.pro.f1' as TranslationKey,
      'pricing.pro.f2' as TranslationKey,
      'pricing.pro.f3' as TranslationKey,
      'pricing.pro.f4' as TranslationKey,
      'pricing.pro.f5' as TranslationKey,
      'pricing.pro.f6' as TranslationKey,
    ],
  },
]

const termKeys = [
  'pricing.term1' as TranslationKey,
  'pricing.term2' as TranslationKey,
  'pricing.term3' as TranslationKey,
]

export function PricingSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            {t('pricing.label')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 mb-3">
            {t('pricing.title')}
          </h2>
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
                  <span className="text-sm text-gray-400">{t('pricing.currency')}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {plan.featureKeys.map((key) => (
                  <li key={key} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-[#0A84FF] mt-0.5 shrink-0" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Instagram Discount */}
        <div className="mb-6 rounded-2xl border border-pink-200 bg-gradient-to-br from-pink-50 to-rose-50 p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="shrink-0 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500 p-3">
              <Instagram className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <div className="mb-1 inline-flex items-center rounded-full bg-pink-100 px-3 py-0.5 text-xs font-semibold text-pink-600">
                {t('pricing.discount.badge')}
              </div>
              <p className="mt-1.5 text-base font-semibold text-gray-900">
                {t('pricing.discount.title')}
              </p>
              <ul className="mt-4 space-y-2.5">
                {(['pricing.discount.c1', 'pricing.discount.c2', 'pricing.discount.c3'] as const).map((key) => (
                  <li key={key} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-pink-500" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
          <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-4">{t('pricing.terms')}</h4>
          <ul className="space-y-2">
            {termKeys.map((key) => (
              <li key={key} className="flex items-start gap-2.5 text-sm text-gray-500">
                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                {t(key)}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-400 text-sm mb-5">{t('pricing.ready')}</p>
          <a
            href="https://t.me/happybox_manager"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#0A84FF] hover:bg-[#0070E0] text-white px-8 py-3.5 text-base font-medium rounded-xl shadow-lg shadow-blue-500/15 transition-all hover:shadow-xl hover:shadow-blue-500/25"
          >
            {t('pricing.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
