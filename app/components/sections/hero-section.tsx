'use client'

import Image from 'next/image'
import { siteConfig } from '@/app/config/site-config'

interface HeroSectionProps {
  className?: string
}

export const HeroSection = ({ className }: HeroSectionProps) => {
  const { content, images, urls } = siteConfig

  return (
    <main id="home" className={`relative z-10 flex flex-col items-center justify-center min-h-[80vh] px-4 ${className || ''}`}>
      {/* Logo */}
      <div className="mb-8 p-4 bg-transparent backdrop-blur-sm transform transition-all duration-1000 hover:scale-105 hover:rotate-2">
        <Image
          alt={siteConfig.name}
          src={images.logo}
          width={200}
          height={200}
          className="mx-auto animate-float hover:animate-spin-slow transition-all duration-300"
          priority
        />
      </div>

      {/* Title */}
      <div className="transform transition-all duration-1500 hover:scale-105">
        <h1 className="text-center tracking-wider drop-shadow-lg mb-8">
          <div 
            className="text-6xl md:text-8xl lg:text-9xl font-black mb-2 animate-text-glow"
            style={{
              fontFamily: '"Luckiest Guy", cursive',
              background: 'linear-gradient(rgb(255, 204, 51), rgb(255, 102, 0))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(rgb(0, 0, 0) -2px -2px 0px) drop-shadow(rgb(0, 0, 0) 2px -2px 0px) drop-shadow(rgb(0, 0, 0) -2px 2px 0px) drop-shadow(rgb(0, 0, 0) 2px 2px 0px)'
            }}
          >
            {content.hero.title1}
          </div>
          <div 
            className="text-7xl md:text-9xl lg:text-[12rem] font-black animate-text-glow"
            style={{
              fontFamily: 'Bangers, cursive',
              background: 'linear-gradient(rgb(255, 204, 51), rgb(255, 102, 0))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(rgb(0, 0, 0) -2px -2px 0px) drop-shadow(rgb(0, 0, 0) 2px -2px 0px) drop-shadow(rgb(0, 0, 0) -2px 2px 0px) drop-shadow(rgb(0, 0, 0) 2px 2px 0px)'
            }}
          >
            {content.hero.title2}
          </div>
        </h1>
      </div>

      {/* Buy Button */}
      <div className="mt-8">
        <a
          href={urls.buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-12 py-6 bg-lime-400 hover:bg-lime-500 active:bg-lime-600 text-black font-black text-2xl border-4 border-black shadow-lg hover:shadow-2xl active:shadow-inner transition-all duration-300 transform hover:scale-110 active:scale-95 rounded-lg animate-pulse-glow relative overflow-hidden group"
          style={{ textShadow: 'rgb(255, 255, 255) 2px 2px 0px' }}
        >
          <span className="relative z-10">{content.hero.buttonText}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </a>
      </div>
    </main>
  )
}
