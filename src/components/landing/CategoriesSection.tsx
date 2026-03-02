import { Wand2, Sparkles, ClipboardList, UtensilsCrossed, BookOpen, Activity, Smile, Plane, Car, Baby, Home } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'
import type { TranslationKey } from '@/i18n/translations/ru'
import { track } from '@/lib/amplitude'

const categories = [
  {
    icon: Wand2,
    titleKey: 'categories.care' as TranslationKey,
    color: 'bg-pink-50 text-pink-400 group-hover:bg-pink-100',
  },
  {
    icon: Sparkles,
    titleKey: 'categories.beauty' as TranslationKey,
    color: 'bg-rose-50 text-rose-400 group-hover:bg-rose-100',
  },
  {
    icon: ClipboardList,
    titleKey: 'categories.health' as TranslationKey,
    color: 'bg-slate-100 text-slate-400 group-hover:bg-slate-200',
  },
  {
    icon: UtensilsCrossed,
    titleKey: 'categories.restaurants' as TranslationKey,
    color: 'bg-orange-50 text-orange-400 group-hover:bg-orange-100',
  },
  {
    icon: BookOpen,
    titleKey: 'categories.education' as TranslationKey,
    color: 'bg-blue-50 text-blue-400 group-hover:bg-blue-100',
  },
  {
    icon: Activity,
    titleKey: 'categories.fitness' as TranslationKey,
    color: 'bg-amber-50 text-amber-500 group-hover:bg-amber-100',
  },
  {
    icon: Smile,
    titleKey: 'categories.entertainment' as TranslationKey,
    color: 'bg-purple-50 text-purple-500 group-hover:bg-purple-100',
  },
  {
    icon: Plane,
    titleKey: 'categories.travel' as TranslationKey,
    color: 'bg-sky-50 text-sky-500 group-hover:bg-sky-100',
  },
  {
    icon: Car,
    titleKey: 'categories.auto' as TranslationKey,
    color: 'bg-gray-100 text-gray-500 group-hover:bg-gray-200',
  },
  {
    icon: Baby,
    titleKey: 'categories.kids' as TranslationKey,
    color: 'bg-yellow-50 text-yellow-500 group-hover:bg-yellow-100',
  },
  {
    icon: Home,
    titleKey: 'categories.home' as TranslationKey,
    color: 'bg-green-50 text-green-500 group-hover:bg-green-100',
  },
]

export function CategoriesSection() {
  const { t } = useLanguage()

  return (
    <section id="categories" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            {t('categories.label')}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            {t('categories.title')}
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <a
              key={cat.titleKey}
              href="#"
              onClick={() => track('category_clicked', { category: cat.titleKey })}
              className="group flex flex-col items-center gap-5 p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-[#0A84FF]/20 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className={`w-16 h-16 sm:w-[88px] sm:h-[88px] rounded-2xl ${cat.color} flex items-center justify-center transition-colors`}>
                <cat.icon className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>
              <span className="text-base sm:text-lg font-semibold text-gray-900 text-center">
                {t(cat.titleKey)}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
