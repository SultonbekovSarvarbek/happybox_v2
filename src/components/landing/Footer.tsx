import { Gift } from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

interface FooterProps {
  onNavigateToPrivacy?: () => void;
}

export function Footer({ onNavigateToPrivacy }: FooterProps) {
  const { t } = useLanguage()

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
              {t('footer.description')}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">
              {t('footer.info')}
            </h4>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={onNavigateToPrivacy}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.privacy')}
                </button>
              </li>
              <li>
                <a
                  href="#for-business"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.business')}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {t('footer.contacts')}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-4">
              {t('footer.contacts')}
            </h4>
            <a
              href="mailto:info@happybox.uz"
              className="text-gray-400 hover:text-white transition-colors text-lg"
            >
              info@happybox.uz
            </a>
            <br />
            <a
              href="tel:+998940444581"
              className="text-gray-400 hover:text-white transition-colors text-lg"
            >
              +998 94 044 45 81
            </a>
            <div className="mt-5">
              <h4 className="font-semibold text-sm uppercase tracking-widest text-gray-400 mb-3">
                {t('footer.app')}
              </h4>
              <a
                href="https://apps.apple.com/uz/app/happybox-gifts/id6758584836"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2.5 rounded-xl transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                {t('footer.downloadApp')}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; HappyBox {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
