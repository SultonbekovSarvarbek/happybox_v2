import { useLanguage } from '@/i18n/LanguageContext'

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center px-4 sm:px-6 bg-white overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-50 to-transparent rounded-full translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-2xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 leading-[1.2] tracking-tight mb-5">
          {t('hero.title1')}{' '}
          <span className="text-[#0A84FF]">{t('hero.title2')}</span>
        </h1>

        <p className="text-base sm:text-lg text-gray-400 max-w-md mx-auto mb-10 leading-relaxed">
          {t('hero.subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="#categories"
            className="inline-flex items-center justify-center bg-[#0A84FF] hover:bg-[#0070E0] text-white px-7 py-3.5 text-sm sm:text-base font-medium rounded-xl shadow-lg shadow-blue-500/15 transition-all hover:shadow-xl hover:shadow-blue-500/25 cursor-pointer"
          >
            {t('hero.cta')}
          </a>
          <a
            href="#for-business"
            className="inline-flex items-center justify-center border border-gray-200 hover:border-[#0A84FF] text-gray-700 hover:text-[#0A84FF] px-7 py-3.5 text-sm sm:text-base font-medium rounded-xl transition-all cursor-pointer"
          >
            {t('hero.business')}
          </a>
        </div>

        <a
          href="https://apps.apple.com/uz/app/happybox-gifts/id6758584836"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-6 text-sm text-gray-400 hover:text-[#0A84FF] transition-colors"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
          </svg>
          {t('hero.appBadge')}
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-9 border-2 border-gray-200 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1 h-2.5 bg-gray-300 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
