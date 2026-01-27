import { HeroSection } from './components/landing/HeroSection'
import { BoxTypesSection } from './components/landing/BoxTypesSection'
import { HowItWorksSection } from './components/landing/HowItWorksSection'
import { BenefitsSection } from './components/landing/BenefitsSection'
import { BrandingSection } from './components/landing/BrandingSection'
import { PricingSection } from './components/landing/PricingSection'
import { PilotSection } from './components/landing/PilotSection'
import { ContactFormSection } from './components/landing/ContactFormSection'
import { Footer } from './components/landing/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <BoxTypesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <BrandingSection />
      <PricingSection />
      <PilotSection />
      <ContactFormSection />
      <Footer />
    </div>
  )
}

export default App
