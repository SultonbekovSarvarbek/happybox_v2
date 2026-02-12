import { UtensilsCrossed, Sparkles, Scissors, Dumbbell, Car, Flame } from 'lucide-react'

const categories = [
  {
    icon: UtensilsCrossed,
    title: 'Рестораны',
    color: 'bg-orange-50 text-orange-500 group-hover:bg-orange-100',
  },
  {
    icon: Sparkles,
    title: 'SPA',
    color: 'bg-purple-50 text-purple-500 group-hover:bg-purple-100',
  },
  {
    icon: Scissors,
    title: 'Красота',
    color: 'bg-pink-50 text-pink-500 group-hover:bg-pink-100',
  },
  {
    icon: Dumbbell,
    title: 'Спорт',
    color: 'bg-green-50 text-green-500 group-hover:bg-green-100',
  },
  {
    icon: Car,
    title: 'Авто',
    color: 'bg-blue-50 text-blue-500 group-hover:bg-blue-100',
  },
  {
    icon: Flame,
    title: 'Впечатления',
    color: 'bg-red-50 text-red-500 group-hover:bg-red-100',
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            Каталог
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Категории сертификатов
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="#"
              className="group flex flex-col items-center gap-4 p-6 sm:p-8 rounded-2xl border border-gray-100 hover:border-[#0A84FF]/20 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl ${cat.color} flex items-center justify-center transition-colors`}>
                <cat.icon className="h-8 w-8 sm:h-9 sm:w-9" />
              </div>
              <span className="text-base sm:text-lg font-semibold text-gray-900">
                {cat.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
