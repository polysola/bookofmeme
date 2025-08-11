'use client'

import { useEffect, useState } from 'react'
import { siteConfig } from '@/app/config/site-config'

interface Particle {
  id: number
  left: number
  top: number
  animationDelay: number
  animationDuration: number
}

interface FloatingParticlesProps {
  className?: string
}

export const FloatingParticles = ({ className }: FloatingParticlesProps) => {
  const [particles, setParticles] = useState<Particle[]>([])
  const { animations } = siteConfig

  useEffect(() => {
    if (!animations.enableFloatingParticles) return

    const generateParticles = () => {
      const newParticles = Array.from({ length: animations.particleCount }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        animationDelay: Math.random() * 5,
        animationDuration: 3 + Math.random() * 3,
      }))
      setParticles(newParticles)
    }

    generateParticles()
  }, [animations.enableFloatingParticles, animations.particleCount])

  if (!animations.enableFloatingParticles) return null

  return (
    <div className={`fixed inset-0 pointer-events-none z-5 ${className || ''}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-2 h-2 bg-lime-400 rounded-full animate-float opacity-30"
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
            animationDelay: `${particle.animationDelay}s`,
            animationDuration: `${particle.animationDuration}s`,
          }}
        />
      ))}
    </div>
  )
}
