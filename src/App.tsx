import { useState } from 'react'
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

function App() {
  const [page, setPage] = useState<Page>('landing')

  if (page === 'privacy') {
    return (
      <PrivacyPolicyScreen
        onBack={() => {
          setPage('landing')
          window.scrollTo(0, 0)
        }}
      />
    )
  }

  return (
    <div className="min-h-screen bg-white">
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

export default App
