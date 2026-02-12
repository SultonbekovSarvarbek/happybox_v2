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
