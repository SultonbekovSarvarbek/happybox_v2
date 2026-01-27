import { Button } from '@/components/ui/button'
import { Gift, Star, Rocket } from 'lucide-react'

export function PilotSection() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
          <Star className="h-4 w-4" />
          Специальное предложение
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Пилотная программа
        </h2>

        <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-100 border border-gray-100 mb-8">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30">
              <Gift className="h-8 w-8 text-white" />
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Бесплатный демо-бокс для первых компаний
          </h3>

          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Мы отправим тестовую коробку для HR или CEO, чтобы вы могли оценить качество.
            Специальные условия для первых корпоративных клиентов.
          </p>

          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg shadow-green-500/30"
            asChild
          >
            <a href="#contact-form">
              <Rocket className="mr-2 h-5 w-5" />
              Запустить пилот
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
