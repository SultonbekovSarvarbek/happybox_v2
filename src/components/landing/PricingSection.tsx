import { Check, Instagram, ShieldCheck, X } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations/ru'
import { track } from '@/lib/amplitude'

export function PricingSection() {
  const { t } = useLanguage()

  return (
    <section className="relative py-20 sm:py-28 px-4 sm:px-6 bg-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: 'url(/payment.png)' }}
        aria-hidden="true"
      />
      {/* Soft white overlay so the content stays readable */}
      <div className="absolute inset-0 bg-white/80 pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            {t('pricing.label')}
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">
            {t('pricing.title')}
          </h2>
        </div>

        {/* Commission tiers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {/* Standard */}
          <div className="bg-gray-50 rounded-2xl p-8 text-center">
            <p className="text-5xl sm:text-6xl font-bold text-gray-900 mb-3">
              {t('pricing.commission.standard' as TranslationKey)}
            </p>
            <p className="text-gray-500 text-sm">
              {t('pricing.commission.standard.label' as TranslationKey)}
            </p>
          </div>

          {/* Instagram discount */}
          <div className="rounded-2xl border-2 border-[#0A84FF] bg-blue-50/40 p-8 text-center relative overflow-hidden">
            <div className="absolute top-3 right-3 bg-[#0A84FF] rounded-full p-1.5">
              <Instagram className="h-3.5 w-3.5 text-white" />
            </div>
            <p className="text-5xl sm:text-6xl font-bold text-[#0A84FF] mb-3">
              {t('pricing.commission.discount' as TranslationKey)}
            </p>
            <p className="text-gray-500 text-sm">
              {t('pricing.commission.discount.label' as TranslationKey)}
            </p>
          </div>
        </div>

        {/* Terms */}
        <div className="rounded-2xl border border-gray-100 p-6 sm:p-8 mb-8">
          <ul className="space-y-3">
            {(['pricing.term1', 'pricing.term2'] as TranslationKey[]).map((key) => (
              <li key={key} className="flex items-start gap-2.5 text-sm text-gray-600">
                <Check className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                {t(key)}
              </li>
            ))}
          </ul>
        </div>

        {/* Comparison: HappyBox vs ad budgets */}
        <div className="rounded-2xl border border-gray-100 bg-gray-50/60 p-6 sm:p-8 mb-12">
          <p className="text-center text-base sm:text-lg font-semibold text-gray-900 mb-5">
            {t('pricing.compare.title' as TranslationKey)}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
            <div className="flex items-start gap-3 rounded-xl bg-white border border-green-100 p-4">
              <div className="w-8 h-8 shrink-0 rounded-lg bg-green-50 flex items-center justify-center">
                <ShieldCheck className="w-4 h-4 text-green-600" />
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                {t('pricing.compare.us' as TranslationKey)}
              </p>
            </div>
            <div className="flex items-start gap-3 rounded-xl bg-white border border-gray-100 p-4">
              <div className="w-8 h-8 shrink-0 rounded-lg bg-gray-100 flex items-center justify-center">
                <X className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                {t('pricing.compare.ads' as TranslationKey)}
              </p>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-center">
            {t('pricing.compare.note' as TranslationKey)}
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-5">{t('pricing.ready')}</p>
          <a
            href="https://t.me/happybox_manager"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('pricing_cta_clicked')}
            className="inline-flex items-center justify-center bg-[#0A84FF] hover:bg-[#0070E0] text-white px-8 py-3.5 text-base font-medium rounded-xl shadow-lg shadow-blue-500/15 transition-all hover:shadow-xl hover:shadow-blue-500/25"
          >
            {t('pricing.cta')}
          </a>
        </div>
      </div>
    </section>
  )
}
