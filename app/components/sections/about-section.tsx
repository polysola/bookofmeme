'use client'

import { useState } from 'react'
import Image from 'next/image'
import { siteConfig } from '@/app/config/site-config'

// Copy to clipboard component
const CopyButton = ({ text }: { text: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="px-4 py-2 bg-yellow-400 text-black font-black text-sm rounded border-2 border-black hover:bg-yellow-500 transition-all duration-300 whitespace-nowrap shadow-md hover:scale-110 transform"
    >
      {copied ? 'COPIED!' : 'COPY'}
    </button>
  )
}

interface AboutSectionProps {
  className?: string
}

export const AboutSection = ({ className }: AboutSectionProps) => {
  const { content, images, urls, socialLinks } = siteConfig

  return (
    <section id="about" className={`relative z-10 py-16 px-4 ${className || ''}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-lime-400/20 to-yellow-400/20 backdrop-blur-sm animate-gradient-shift" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative group">
              <Image
                alt="The Book of OG Memes Characters"
                src={images.heroImage}
                width={500}
                height={500}
                className="rounded-2xl border-4 border-black shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:rotate-2 animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-lime-400/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black mb-8 text-center lg:text-left">
              <span 
                className="text-lime-500 animate-text-glow"
                style={{ textShadow: 'rgb(0, 0, 0) 2px 2px 0px' }}
              >
                {content.about.title1}
              </span>
              <br />
              <span 
                className="text-cyan-500 animate-text-glow"
                style={{ textShadow: 'rgb(0, 0, 0) 2px 2px 0px' }}
              >
                {content.about.title2}
              </span>
            </h2>

            <p className="text-lg md:text-xl mb-12 leading-relaxed text-center lg:text-left text-black font-bold bg-white/80 p-6 rounded-lg border-2 border-black hover:bg-white/90 transition-all duration-300 hover:scale-105">
              {content.about.description}
            </p>

            <div className="space-y-8">
              {/* Social Links */}
              <div className="flex justify-center lg:justify-start gap-4 flex-wrap">
                {socialLinks.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-full hover:bg-lime-200 transition-all duration-300 border-2 border-black shadow-lg hover:shadow-xl transform hover:scale-110 hover:rotate-12 animate-bounce-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Image src={social.icon} alt={social.name} width={32} height={32} />
                  </a>
                ))}
              </div>

              {/* Buy Now Button */}
              <div className="flex justify-center lg:justify-start">
                <a
                  href={urls.buyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-12 py-4 bg-lime-400 text-black font-black text-xl border-4 border-black hover:bg-lime-500 active:bg-lime-600 transition-all duration-300 transform hover:scale-110 active:scale-95 rounded-lg shadow-lg hover:shadow-2xl relative overflow-hidden group"
                  style={{ textShadow: 'rgb(255, 255, 255) 2px 2px 0px' }}
                >
                  <span className="relative z-10">{content.about.buttonText}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </a>
              </div>

              {/* Contract Address */}
              <div className="bg-cyan-100/90 backdrop-blur-sm rounded-lg p-4 border-4 border-black shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-lime-400 rounded border-2 border-black flex items-center justify-center animate-pulse">
                      <span className="text-black text-xs font-bold">📋</span>
                    </div>
                    <span className="text-black font-mono text-sm md:text-base break-all font-bold">
                      {urls.contractAddress}
                    </span>
                  </div>
                  <CopyButton text={urls.contractAddress} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
