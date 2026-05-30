import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations/ru'
import { track } from '@/lib/amplitude'

const faqs = [
  { qKey: 'faq.q1', aKey: 'faq.a1' },
  { qKey: 'faq.q2', aKey: 'faq.a2' },
  { qKey: 'faq.q3', aKey: 'faq.a3' },
  { qKey: 'faq.q4', aKey: 'faq.a4' },
  { qKey: 'faq.q5', aKey: 'faq.a5' },
  { qKey: 'faq.q6', aKey: 'faq.a6' },
  { qKey: 'faq.q7', aKey: 'faq.a7' },
  { qKey: 'faq.q8', aKey: 'faq.a8' },
] as const

export function FaqSection() {
  const { t } = useLanguage()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  function toggle(index: number, qKey: string) {
    const next = openIndex === index ? null : index
    setOpenIndex(next)
    if (next !== null) track('faq_opened', { question: qKey })
  }

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            {t('faq.label')}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            {t('faq.title')}
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.qKey}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'border-[#0A84FF]/30 bg-blue-50/30'
                    : 'border-gray-100 bg-white hover:border-gray-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index, item.qKey)}
                  className="w-full text-left px-5 sm:px-6 py-5 flex items-center justify-between gap-4"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-gray-900 leading-snug">
                    {t(item.qKey as TranslationKey)}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 text-[#0A84FF]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 -mt-1">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {t(item.aKey as TranslationKey)}
                    </p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
