import { HeroSection } from './components/landing/HeroSection'
import { HowItWorksSection } from './components/landing/HowItWorksSection'
import { CategoriesSection } from './components/landing/CategoriesSection'
import { WhyHappyBoxSection } from './components/landing/WhyHappyBoxSection'
import { Footer } from './components/landing/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <HowItWorksSection />
      <CategoriesSection />
      <WhyHappyBoxSection />
      <Footer />
    </div>
  )
}

export default App
