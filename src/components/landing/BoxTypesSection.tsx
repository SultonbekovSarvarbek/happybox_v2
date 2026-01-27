import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Cookie, Coffee, Package, Crown } from 'lucide-react'

const boxTypes = [
  {
    icon: Cookie,
    title: 'Snack Box',
    description: 'Шоколад, чипсы, печенье, конфеты и другие снеки.',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    icon: Coffee,
    title: 'Drinks Box',
    description: 'Кофе, чай, энергетические напитки, соки и вода.',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Package,
    title: 'Mixed Box',
    description: 'Снеки, напитки и небольшие подарки.',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Crown,
    title: 'Premium Box',
    description: 'Импортные продукты, wellness-товары и брендированный мерч компании.',
    color: 'bg-amber-100 text-amber-600',
  },
]

export function BoxTypesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Что внутри коробок
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Выберите тип коробки, который подходит вашей команде
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {boxTypes.map((box) => (
            <Card
              key={box.title}
              className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#0A84FF]/20 cursor-pointer"
            >
              <CardHeader className="text-center pt-8 pb-6">
                <div className={`w-16 h-16 rounded-2xl ${box.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                  <box.icon className="h-8 w-8" />
                </div>
                <CardTitle className="text-xl mb-2">{box.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {box.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
