import { Building2, MessageSquare, Gift } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const features = [
  {
    icon: Building2,
    title: 'Логотип компании',
    description: 'На упаковке',
  },
  {
    icon: MessageSquare,
    title: 'Персональное сообщение',
    description: 'От CEO или HR',
  },
  {
    icon: Gift,
    title: 'Брендированный мерч',
    description: 'Внутри коробок',
  },
]

export function BrandingSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 px-4 py-1">
            Персонализация
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Брендирование и персонализация
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Сделайте коробки частью вашего бренда
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-gray-100 border border-gray-100 hover:shadow-xl hover:border-[#0A84FF]/20 transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0A84FF] to-blue-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/30">
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg mb-1">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-100 via-blue-100 to-green-100 rounded-2xl p-8 text-center">
          <p className="text-lg text-gray-700 font-medium">
            Идеально для <span className="text-[#0A84FF] font-semibold">onboarding</span>,
            <span className="text-purple-600 font-semibold"> праздников</span> и
            <span className="text-green-600 font-semibold"> программ благодарности</span> сотрудникам
          </p>
        </div>
      </div>
    </section>
  )
}
