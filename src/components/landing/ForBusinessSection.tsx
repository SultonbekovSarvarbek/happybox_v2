import { Users, BarChart3, Settings, Globe } from 'lucide-react'

const benefits = [
  {
    icon: Users,
    title: 'Новые клиенты',
    description: 'Пользователи платформы покупают ваши сертификаты и приходят к вам.',
  },
  {
    icon: Globe,
    title: 'Размещение в каталоге',
    description: 'Ваш бизнес на витрине HappyBox — видим тысячам пользователей.',
  },
  {
    icon: Settings,
    title: 'Кабинет партнёра',
    description: 'Управление сертификатами, ценами и описаниями в одном месте.',
  },
  {
    icon: BarChart3,
    title: 'Аналитика продаж',
    description: 'Статистика покупок и данные для принятия решений.',
  },
]

export function ForBusinessSection() {
  return (
    <section id="for-business" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            Для бизнеса
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
            Размещайте сертификаты —{' '}
            <span className="text-[#0A84FF]">получайте клиентов</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-lg mx-auto">
            HappyBox — витрина ваших сертификатов. Подключитесь и начните продавать.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex items-start gap-4 p-6 rounded-2xl border border-gray-100 hover:shadow-md hover:border-[#0A84FF]/20 transition-all"
            >
              <div className="w-11 h-11 rounded-xl bg-[#0A84FF]/10 flex items-center justify-center shrink-0">
                <b.icon className="h-5 w-5 text-[#0A84FF]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-1">{b.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{b.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
