'use client'

import { useState } from 'react'
import { HeroSection } from '@/app/components/sections/hero-section'
import { AboutSection } from '@/app/components/sections/about-section'
import { TokenomicsSection } from '@/app/components/sections/tokenomics-section'
import { FooterSection } from '@/app/components/sections/footer-section'
import { FloatingParticles } from '@/app/components/effects/floating-particles'
import { BackgroundVideo } from '@/app/components/effects/background-video'
import { LoadingScreen } from '@/app/components/effects/loading-screen'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      )}

      {/* Main Website */}
      <div className={`min-h-screen relative overflow-hidden transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        {/* Background Effects */}
        <FloatingParticles />
        <BackgroundVideo />

        {/* Main Content */}
        <HeroSection />
        <AboutSection />
        <TokenomicsSection />
        <FooterSection />
      </div>
    </>
  )
}