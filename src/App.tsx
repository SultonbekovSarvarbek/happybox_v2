import { HeroSection } from './components/landing/HeroSection'
import { HowItWorksSection } from './components/landing/HowItWorksSection'
import { CategoriesSection } from './components/landing/CategoriesSection'
import { WhyHappyBoxSection } from './components/landing/WhyHappyBoxSection'
import { ForBusinessSection } from './components/landing/ForBusinessSection'
import { BusinessStepsSection } from './components/landing/BusinessStepsSection'
import { PricingSection } from './components/landing/PricingSection'
import { Footer } from './components/landing/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <HowItWorksSection />
      <CategoriesSection />
      <WhyHappyBoxSection />
      <ForBusinessSection />
      <BusinessStepsSection />
      <PricingSection />
      <Footer />
    </div>
  )
}

export default App
