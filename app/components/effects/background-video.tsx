'use client'

import { siteConfig } from '@/app/config/site-config'

interface BackgroundVideoProps {
  className?: string
}

export const BackgroundVideo = ({ className }: BackgroundVideoProps) => {
  const { images, animations } = siteConfig

  if (!animations.enableBackgroundVideo) {
    return (
      <div className={`absolute inset-0 z-0 bg-gradient-to-br from-cyan-400/30 via-transparent to-lime-400/30 ${className || ''}`} />
    )
  }

  return (
    <div className={`absolute inset-0 z-0 ${className || ''}`}>
      <video
        autoPlay
        loop
        playsInline
        muted
        className="hidden md:block w-full h-full object-cover"
      >
        <source src={images.backgroundVideo.desktop} type="video/mp4" />
      </video>
      <video
        autoPlay
        loop
        playsInline
        muted
        className="block md:hidden w-full h-full object-cover"
      >
        <source src={images.backgroundVideo.mobile} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 via-transparent to-lime-400/30 backdrop-blur-sm animate-pulse-slow" />
    </div>
  )
}
