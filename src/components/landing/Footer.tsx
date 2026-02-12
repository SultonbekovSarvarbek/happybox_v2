import { Gift } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-[#0A84FF] rounded-xl flex items-center justify-center">
                <Gift className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight">HappyBox</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Платформа подарочных сертификатов от лучших партнёров.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">
              Информация
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a
                  href="#for-business"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Для бизнеса
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">
              Контакты
            </h4>
            <a
              href="mailto:info@happybox.uz"
              className="text-gray-400 hover:text-white transition-colors text-lg"
            >
              info@happybox.uz
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; HappyBox {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
