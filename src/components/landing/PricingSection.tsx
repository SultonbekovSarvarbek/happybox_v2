import { Button } from '@/components/ui/button'
import { Package, Users, Calendar, ArrowRight } from 'lucide-react'

const factors = [
  {
    icon: Package,
    label: 'Тип коробки',
    description: 'Snack, Drinks, Mixed, Premium',
  },
  {
    icon: Users,
    label: 'Количество сотрудников',
    description: 'От 1 до 200+',
  },
  {
    icon: Calendar,
    label: 'Частота доставки',
    description: 'Еженедельно, ежемесячно, квартально',
  },
]

export function PricingSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 sm:p-8 md:p-12 text-white overflow-hidden">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ценообразование
            </h2>
            <p className="text-xl text-blue-300 font-medium">
              Гибкая корпоративная цена
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {factors.map((factor) => (
              <div
                key={factor.label}
                className="bg-white/10 backdrop-blur rounded-xl p-5 text-center hover:bg-white/15 transition-colors"
              >
                <factor.icon className="h-8 w-8 mx-auto mb-3 text-blue-300" />
                <h3 className="font-semibold mb-1">{factor.label}</h3>
                <p className="text-gray-400 text-sm">{factor.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-300 mb-6">
              Свяжитесь с нами, чтобы получить персональное корпоративное предложение
            </p>
            <Button
              size="lg"
              className="bg-[#0A84FF] hover:bg-blue-500 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl cursor-pointer"
              asChild
            >
              <a href="#contact-form">
                Получить предложение
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
