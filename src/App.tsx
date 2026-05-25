import { useState } from 'react'
import { Gift } from 'lucide-react'
import { LanguageProvider, useLanguage } from './i18n/LanguageContext'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { HeroSection } from './components/landing/HeroSection'
import { HowItWorksSection } from './components/landing/HowItWorksSection'
import { ForBusinessSection } from './components/landing/ForBusinessSection'
import { BusinessStepsSection } from './components/landing/BusinessStepsSection'
import { PricingSection } from './components/landing/PricingSection'
import { LeadFormSection } from './components/landing/LeadFormSection'
import { ForCustomersBlock } from './components/landing/ForCustomersBlock'
import { Footer } from './components/landing/Footer'
import { PrivacyPolicyScreen } from './screens/PrivacyPolicyScreen'

type Page = 'landing' | 'privacy'

function AppContent() {
  const [page, setPage] = useState<Page>('landing')
  const { t } = useLanguage()

  if (page === 'privacy') {
    return (
      <div className="min-h-screen bg-white">
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
            <button
              onClick={() => { setPage('landing'); window.scrollTo(0, 0) }}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-[#0A84FF] rounded-lg flex items-center justify-center">
                <Gift className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-semibold text-gray-900">HappyBox</span>
            </button>
            <LanguageSwitcher />
          </div>
        </nav>
        <PrivacyPolicyScreen
          onBack={() => {
            setPage('landing')
            window.scrollTo(0, 0)
          }}
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#0A84FF] rounded-lg flex items-center justify-center">
              <Gift className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-gray-900">HappyBox</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="#lead"
              className="hidden sm:inline-flex items-center px-4 py-2 text-sm font-medium text-[#0A84FF] hover:text-[#0070E0] transition-colors"
            >
              {t('footer.business')}
            </a>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* B2B-first funnel: hook → process → value → terms → form */}
      <HeroSection />
      <HowItWorksSection />
      <ForBusinessSection />
      <BusinessStepsSection />
      <PricingSection />
      <LeadFormSection />

      {/* Compact B2C block for accidental visitors who want to buy a gift */}
      <ForCustomersBlock />

      <Footer
        onNavigateToPrivacy={() => {
          setPage('privacy')
          window.scrollTo(0, 0)
        }}
      />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
