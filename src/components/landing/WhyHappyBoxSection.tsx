import { Zap, CalendarHeart, Smartphone, LayoutGrid } from 'lucide-react'

const reasons = [
  {
    icon: Zap,
    title: 'Быстрое оформление подарка',
    description: 'Выбор и оплата сертификата занимают всего пару минут.',
  },
  {
    icon: CalendarHeart,
    title: 'Подходит для любого повода',
    description: 'День рождения, праздник или просто приятный сюрприз.',
  },
  {
    icon: Smartphone,
    title: 'Удобный цифровой формат',
    description: 'Получите код сертификата мгновенно — без бумаги и пластика.',
  },
  {
    icon: LayoutGrid,
    title: 'Большой выбор сертификатов',
    description: 'Рестораны, SPA, красота, спорт и многое другое.',
  },
]

export function WhyHappyBoxSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            Преимущества
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Почему выбирают HappyBox
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex items-start gap-5 p-6 sm:p-8 bg-white rounded-2xl border border-gray-100 hover:shadow-md hover:border-[#0A84FF]/20 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0A84FF]/10 flex items-center justify-center shrink-0">
                <reason.icon className="h-6 w-6 text-[#0A84FF]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {reason.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
