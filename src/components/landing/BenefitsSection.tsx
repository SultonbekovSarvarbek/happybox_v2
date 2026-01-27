import { Heart, Sparkles, Clock, Wallet, Award } from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: 'Повышает мотивацию',
    description: 'Забота о сотрудниках повышает их лояльность и продуктивность.',
  },
  {
    icon: Sparkles,
    title: 'Современный бонус',
    description: 'Корпоративный бонус без сложных программ и бюрократии.',
  },
  {
    icon: Clock,
    title: 'Экономия времени',
    description: 'Мы берём на себя закупку, упаковку и логистику.',
  },
  {
    icon: Wallet,
    title: 'Контроль бюджета',
    description: 'Прозрачное ценообразование и гибкие планы подписки.',
  },
  {
    icon: Award,
    title: 'Employer branding',
    description: 'Укрепляйте культуру команды и привлекайте таланты.',
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Зачем компаниям HappyBox
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Преимущества для HR и руководителей
            </p>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#0A84FF]/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="h-6 w-6 text-[#0A84FF]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-[#0A84FF] to-blue-600 rounded-3xl p-8 text-white shadow-2xl shadow-blue-500/30">
              <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                "HappyBox — простой способ показать заботу о команде."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <Heart className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-semibold">HappyBox</div>
                  <div className="text-blue-200 text-sm">Для счастливых команд</div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
