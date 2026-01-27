import { Send, Phone, Shield } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">HappyBox</h3>
            <p className="text-gray-400">
              Корпоративная подписка на снеки и подарочные боксы
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <a
                href="https://t.me/s_sarvar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Send className="h-4 w-4" />
                <span>@s_sarvar</span>
              </a>
              <a
                href="tel:+998940444581"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+998 94 044 45 81</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Правовая информация</h4>
            <a
              href="#privacy"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <Shield className="h-4 w-4" />
              <span>Политика конфиденциальности</span>
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
          <p>HappyBox &copy; {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
