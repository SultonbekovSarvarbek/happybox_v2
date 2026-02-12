import { Search, CreditCard, KeyRound } from 'lucide-react'

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Выберите сертификат',
    description: 'Найдите идеальный подарок из каталога партнёров.',
  },
  {
    icon: CreditCard,
    step: '02',
    title: 'Оплатите онлайн',
    description: 'Быстрая и безопасная оплата любым удобным способом.',
  },
  {
    icon: KeyRound,
    step: '03',
    title: 'Получите код сертификата',
    description: 'Уникальный код придёт вам через менеджера.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#0A84FF] font-semibold text-sm uppercase tracking-widest mb-3">
            Просто и удобно
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
            Как это работает
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
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed max-w-xs mx-auto">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
