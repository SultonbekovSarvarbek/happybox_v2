import { Search, CreditCard, KeyRound, UtensilsCrossed, Sparkles, Scissors, Dumbbell } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations/ru'

const steps = [
  {
    icon: Search,
    step: '01',
    titleKey: 'howItWorks.step1.title' as TranslationKey,
    descriptionKey: 'howItWorks.step1.description' as TranslationKey,
  },
  {
    icon: CreditCard,
    step: '02',
    titleKey: 'howItWorks.step2.title' as TranslationKey,
    descriptionKey: 'howItWorks.step2.description' as TranslationKey,
  },
  {
    icon: KeyRound,
    step: '03',
    titleKey: 'howItWorks.step3.title' as TranslationKey,
    descriptionKey: 'howItWorks.step3.description' as TranslationKey,
  },
]

const certificates = [
  {
    icon: UtensilsCrossed,
    nameKey: 'howItWorks.cert1.name' as TranslationKey,
    descKey: 'howItWorks.cert1.desc' as TranslationKey,
    priceKey: 'howItWorks.cert1.price' as TranslationKey,
    color: 'bg-orange-50 text-orange-500',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop',
  },
  {
    icon: Sparkles,
    nameKey: 'howItWorks.cert2.name' as TranslationKey,
    descKey: 'howItWorks.cert2.desc' as TranslationKey,
    priceKey: 'howItWorks.cert2.price' as TranslationKey,
    color: 'bg-purple-50 text-purple-500',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&h=250&fit=crop',
  },
  {
    icon: Scissors,
    nameKey: 'howItWorks.cert3.name' as TranslationKey,
    descKey: 'howItWorks.cert3.desc' as TranslationKey,
    priceKey: 'howItWorks.cert3.price' as TranslationKey,
    color: 'bg-pink-50 text-pink-500',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400&h=250&fit=crop',
  },
  {
    icon: Dumbbell,
    nameKey: 'howItWorks.cert4.name' as TranslationKey,
    descKey: 'howItWorks.cert4.desc' as TranslationKey,
    priceKey: 'howItWorks.cert4.price' as TranslationKey,
    color: 'bg-green-50 text-green-500',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=250&fit=crop',
  },
]

export function HowItWorksSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            {t('howItWorks.label')}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {t('howItWorks.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((item, index) => (
            <div key={item.step} className="relative text-center group">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-px bg-gray-200" />
              )}

              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-24 h-24 rounded-3xl bg-white border border-gray-100 flex items-center justify-center shadow-sm group-hover:shadow-md group-hover:border-[#0A84FF]/20 transition-all">
                  <item.icon className="h-10 w-10 text-[#0A84FF]" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#0A84FF] text-white text-xs font-bold flex items-center justify-center">
                  {item.step}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {t(item.titleKey)}
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                {t(item.descriptionKey)}
              </p>
            </div>
          ))}
        </div>

        {/* Example certificates */}
        <div className="mt-20">
          <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
            {t('howItWorks.examples')}
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {certificates.map((cert) => (
              <div
                key={cert.nameKey}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-[#0A84FF]/20 transition-all group"
              >
                <div className="relative h-28 sm:h-32 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={t(cert.nameKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className={`absolute top-2.5 left-2.5 w-8 h-8 rounded-lg ${cert.color} flex items-center justify-center`}>
                    <cert.icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="p-3.5 sm:p-4">
                  <h4 className="text-sm font-semibold text-gray-900 truncate">
                    {t(cert.nameKey)}
                  </h4>
                  <p className="text-xs text-gray-400 mt-0.5 truncate">
                    {t(cert.descKey)}
                  </p>
                  <p className="text-sm font-bold text-[#0A84FF] mt-2">
                    {t(cert.priceKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
