'use client'

import { siteConfig } from '@/app/config/site-config'

interface TokenomicsSectionProps {
  className?: string
}

export const TokenomicsSection = ({ className }: TokenomicsSectionProps) => {
  const { content, urls } = siteConfig

  return (
    <section id="tokenomics" className={`relative z-10 py-16 px-4 ${className || ''}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-lime-300/40 via-cyan-300/40 to-yellow-300/40 backdrop-blur-sm animate-gradient-shift" />
      
      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 
            className="text-6xl md:text-8xl lg:text-9xl font-black text-black mb-8 animate-text-glow hover:scale-105 transition-transform duration-500"
            style={{
              textShadow: 'rgb(34, 197, 94) 4px 4px 0px, rgb(249, 115, 22) 8px 8px 0px'
            }}
          >
            {content.tokenomics.title}
          </h2>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* $BOOM Title */}
          <div className="flex justify-center lg:justify-end">
            <h3 
              className="text-8xl md:text-9xl lg:text-[12rem] font-black text-black transform -rotate-12 hover:rotate-0 transition-transform duration-500 animate-pulse-glow cursor-pointer"
              style={{
                textShadow: 'rgb(34, 197, 94) 6px 6px 0px, rgb(249, 115, 22) 12px 12px 0px'
              }}
            >
              {content.tokenomics.tokenSymbol}
            </h3>
          </div>

          {/* Token Info */}
          <div className="space-y-8">
            <div className="bg-black text-white p-8 rounded-lg border-4 border-lime-400 shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <h4 className="text-4xl md:text-6xl font-black mb-4">
                  {content.tokenomics.supply.amount}
                </h4>
                <p className="text-2xl md:text-3xl font-black">
                  {content.tokenomics.supply.label}
                </p>
              </div>
            </div>

            <div className="bg-white/90 p-8 rounded-lg border-4 border-black shadow-2xl transform -rotate-1 hover:rotate-0 transition-all duration-500 hover:scale-105">
              <div className="text-center">
                <h4 className="text-3xl md:text-4xl font-black text-black mb-2">
                  {content.tokenomics.tax.label}
                </h4>
                <p className="text-5xl md:text-6xl font-black text-lime-500 animate-pulse">
                  {content.tokenomics.tax.rate}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {content.tokenomics.features.map((feature) => (
            <div
              key={feature.title}
              className={`${feature.bgColor} p-6 rounded-lg border-4 border-black shadow-lg text-center hover:shadow-xl transition-all duration-500 transform hover:scale-110 hover:rotate-2 cursor-pointer`}
            >
              <h5 className="text-xl font-black text-black mb-2">
                {feature.title}
              </h5>
              <p className={`text-2xl font-black ${feature.textColor} animate-pulse`}>
                {feature.value}
              </p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <a
            href={urls.buyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-16 py-6 bg-lime-400 text-black font-black text-3xl border-4 border-black rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:bg-lime-500 animate-pulse-glow relative overflow-hidden group"
            style={{ textShadow: 'rgb(255, 255, 255) 2px 2px 0px' }}
          >
            <span className="relative z-10">{content.tokenomics.finalButtonText}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </a>
        </div>
      </div>
    </section>
  )
}
