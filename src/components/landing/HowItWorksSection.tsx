import { CheckCircle, Users, Truck } from 'lucide-react'

const steps = [
  {
    icon: CheckCircle,
    step: '1',
    title: 'Компания выбирает тип коробки',
    description: 'Snack, Drinks, Mixed или Premium.',
  },
  {
    icon: Users,
    step: '2',
    title: 'Настраивает количество и частоту',
    description: 'Еженедельно, ежемесячно или раз в квартал.',
  },
  {
    icon: Truck,
    step: '3',
    title: 'HappyBox доставляет',
    description: 'В офис.',
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Как это работает
          </h2>
          <p className="text-gray-600 text-lg">
            Три простых шага до счастливой команды
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-[#0A84FF]/20 via-[#0A84FF] to-[#0A84FF]/20"></div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((item, index) => (
              <div key={item.step} className="relative text-center">
                <div className="relative inline-flex items-center justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#0A84FF] flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <item.icon className="h-10 w-10 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border-2 border-[#0A84FF] text-[#0A84FF] font-bold flex items-center justify-center text-sm shadow">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {index < steps.length - 1 && (
                  <div className="lg:hidden w-0.5 h-8 bg-[#0A84FF]/30 mx-auto mt-6"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
