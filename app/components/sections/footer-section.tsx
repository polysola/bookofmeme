'use client'

import Image from 'next/image'
import { siteConfig } from '@/app/config/site-config'

interface FooterSectionProps {
  className?: string
}

export const FooterSection = ({ className }: FooterSectionProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={`relative z-10 py-8 px-4 ${className || ''}`}>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-sm" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-6">
            <h3 
              className="text-3xl md:text-4xl font-black text-white animate-text-glow"
              style={{
                fontFamily: '"Luckiest Guy", cursive',
                textShadow: 'rgb(0, 0, 0) 2px 2px 0px'
              }}
            >
              {siteConfig.name}
            </h3>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-6 flex-wrap">
            {siteConfig.socialLinks.slice(0, 6).map((social, index) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-lime-400/80 transition-all duration-300 border-2 border-white/20 hover:border-lime-400 shadow-lg hover:shadow-xl transform hover:scale-110 hover:rotate-12"
                style={{ animationDelay: `${index * 0.1}s` }}
                title={social.name}
              >
                <Image 
                  src={social.icon} 
                  alt={social.name} 
                  width={24}
                  height={24}
                  className="opacity-80 hover:opacity-100 transition-opacity"
                />
              </a>
            ))}
          </div>

          {/* Contract Address */}
          <div className="mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border-2 border-white/20 inline-block">
              <div className="flex items-center gap-3 flex-wrap justify-center">
                <span className="text-white/80 text-sm font-mono">
                  Contract:
                </span>
                <span className="text-lime-400 font-mono text-sm break-all font-bold">
                  {siteConfig.urls.contractAddress}
                </span>
              </div>
            </div>
          </div>

          {/* Buy Links */}
          <div className="mb-6">
            <a
              href={siteConfig.urls.buyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-lime-400 text-black font-black text-lg border-4 border-black rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:bg-lime-500 animate-pulse-glow"
              style={{ textShadow: 'rgb(255, 255, 255) 1px 1px 0px' }}
            >
              🚀 BUY {siteConfig.content.tokenomics.tokenSymbol}
            </a>
          </div>

          {/* Disclaimer */}
          <div className="border-t border-white/20 pt-6">
            <p className="text-white/60 text-sm mb-4 max-w-2xl mx-auto leading-relaxed">
              This is a meme token created for entertainment purposes. 
              Please do your own research before investing. Cryptocurrency investments are risky.
            </p>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-xs">
              <div>
                © {currentYear} {siteConfig.name}. All rights reserved.
              </div>
              <div className="flex gap-4">
                <span>Made with 💚 by the community</span>
                <span>•</span>
                <a 
                  href={siteConfig.urls.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-lime-400 transition-colors"
                >
                  Official Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
