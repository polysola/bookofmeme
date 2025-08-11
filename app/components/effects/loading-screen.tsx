'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { siteConfig } from '@/app/config/site-config'

interface LoadingScreenProps {
  onLoadingComplete?: () => void
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const { animations } = siteConfig

  useEffect(() => {
    if (!animations.enableLoadingScreen) {
      onLoadingComplete?.()
      return
    }

    // Simulate loading progress
    const totalDuration = animations.loadingDuration || 3000
    const intervalTime = 100
    const incrementPerInterval = (100 * intervalTime) / totalDuration

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsLoading(false)
            onLoadingComplete?.()
          }, 500)
          return 100
        }
        return prev + incrementPerInterval + Math.random() * 5
      })
    }, intervalTime)

    return () => clearInterval(interval)
  }, [onLoadingComplete, animations.enableLoadingScreen, animations.loadingDuration])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-yellow-300 via-orange-300 to-red-300 flex items-center justify-center overflow-hidden">
      {/* Comic dots background */}
      <div className="absolute inset-0 opacity-20">
        <div className="comic-dots"></div>
      </div>

      {/* Speed lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute bg-black opacity-10"
            style={{
              width: '2px',
              height: '100%',
              left: `${10 + i * 8}%`,
              transform: `rotate(${-15 + i * 2}deg)`,
              transformOrigin: 'center center'
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Comic bubbles */}
        <div className="absolute top-[15%] left-[15%] transition-all duration-500 scale-100 opacity-100">
          <div className="relative">
            <div className="bg-white border-8 border-black rounded-full px-8 py-4 shadow-2xl transform -rotate-12">
              <span className="text-4xl font-black text-red-600" style={{ textShadow: 'rgb(0, 0, 0) 3px 3px 0px' }}>
                POW!
              </span>
            </div>
            <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white transform rotate-12" />
            <div className="absolute -bottom-2 left-9 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-black transform rotate-12" />
          </div>
        </div>

        <div className="absolute top-[20%] right-[20%] transition-all duration-500 scale-100 opacity-100">
          <div className="relative">
            <div className="bg-lime-400 border-8 border-black rounded-2xl px-10 py-6 shadow-2xl transform rotate-6">
              <span className="text-5xl font-black text-black" style={{ textShadow: 'rgb(255, 255, 255) 3px 3px 0px' }}>
                BOOM!
              </span>
            </div>
            <div 
              className="absolute -inset-4 bg-orange-400 -z-10 transform rotate-6"
              style={{ clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)' }}
            />
          </div>
        </div>

        <div className="absolute bottom-[25%] left-[20%] transition-all duration-500 scale-100 opacity-100">
          <div className="relative">
            <div className="bg-cyan-400 border-8 border-black rounded-full px-8 py-4 shadow-2xl transform -rotate-6">
              <span className="text-4xl font-black text-white" style={{ textShadow: 'rgb(0, 0, 0) 3px 3px 0px' }}>
                WOW!
              </span>
            </div>
            {/* Speed lines */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute bg-black h-1 animate-pulse"
                style={{
                  width: `${20 + i * 10}px`,
                  top: `${20 + i * 8}px`,
                  right: '-60px',
                  transform: `rotate(${-10 + i * 3}deg)`
                }}
              />
            ))}
          </div>
        </div>

        {/* Center logo with rays */}
        <div className="absolute transition-all duration-1000 scale-100 opacity-100">
          <div className="relative">
            <div className="bg-transparent p-8">
              <Image
                alt={siteConfig.name}
                src={siteConfig.images.logo}
                width={150}
                height={150}
                className="animate-spin-slow"
              />
            </div>
            {/* Rays */}
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="absolute bg-yellow-400 animate-pulse"
                style={{
                  width: '4px',
                  height: '60px',
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 22.5}deg) translateY(-80px)`,
                  transformOrigin: '50% 80px'
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 -z-10">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-yellow-400 rounded-full animate-ping"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                animationDelay: `${Math.random() * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-80">
        <div className="bg-black/20 rounded-full h-4 border-4 border-black">
          <div 
            className="bg-lime-400 h-full rounded-full transition-all duration-300 border-2 border-black"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-center mt-4">
          <span className="text-2xl font-black text-black" style={{ textShadow: 'rgb(255, 255, 255) 2px 2px 0px' }}>
            LOADING... {Math.round(progress)}%
          </span>
        </div>
      </div>
    </div>
  )
}
