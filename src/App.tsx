import { useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import TechMarquee from './components/TechMarquee'
import ServicesSection from './components/ServicesSection'
import WhyUsSection from './components/WhyUsSection'
import AboutSection from './components/AboutSection'
import PortfolioSection from './components/PortfolioSection'
import ProcessSection from './components/ProcessSection'
import TechStackSection from './components/TechStackSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="min-h-screen bg-[#121318] text-[#e3e1e9] antialiased">
      {/* Noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />
      
      <Header />
      
      <main className="w-full pt-16">
        <HeroSection />
        <TechMarquee />
        <ServicesSection />
        <WhyUsSection />
        <AboutSection />
        <PortfolioSection />
        <ProcessSection />
        <TechStackSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  )
}

export default App
