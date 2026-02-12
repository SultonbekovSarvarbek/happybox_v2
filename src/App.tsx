import { useState } from 'react'
import { Gift } from 'lucide-react'
import { LanguageProvider } from './i18n/LanguageContext'
import { LanguageSwitcher } from './components/LanguageSwitcher'
import { HeroSection } from './components/landing/HeroSection'
import { HowItWorksSection } from './components/landing/HowItWorksSection'
import { CategoriesSection } from './components/landing/CategoriesSection'
import { WhyHappyBoxSection } from './components/landing/WhyHappyBoxSection'
import { ForBusinessSection } from './components/landing/ForBusinessSection'
import { BusinessStepsSection } from './components/landing/BusinessStepsSection'
import { PricingSection } from './components/landing/PricingSection'
import { Footer } from './components/landing/Footer'
import { PrivacyPolicyScreen } from './screens/PrivacyPolicyScreen'

type Page = 'landing' | 'privacy'

function AppContent() {
  const [page, setPage] = useState<Page>('landing')

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
          <LanguageSwitcher />
        </div>
      </nav>
      <HeroSection />
      <HowItWorksSection />
      <CategoriesSection />
      <WhyHappyBoxSection />
      <ForBusinessSection />
      <BusinessStepsSection />
      <PricingSection />
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
