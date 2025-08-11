import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Home from '@/app/page'

// Mock Next.js Image component
jest.mock('next/image', () => {
  return function MockImage({ src, alt, ...props }: any) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt={alt} {...props} />
  }
})

// Mock clipboard API
Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn().mockImplementation(() => Promise.resolve()),
  },
})

describe('Home Page', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the main title correctly', () => {
    render(<Home />)
    
    expect(screen.getByText('THE BOOK OF')).toBeInTheDocument()
    expect(screen.getByText('OG MEMES')).toBeInTheDocument()
  })

  it('renders the hero buy button', () => {
    render(<Home />)
    
    const buyButton = screen.getAllByText('BUY!')[0]
    expect(buyButton).toBeInTheDocument()
    expect(buyButton.closest('a')).toHaveAttribute(
      'href',
      'https://raydium.io/swap/?inputMint=F9VrtPRZBj7fiFdu3675YXpZWsCcHgzoCzTM8zyjbonk&outputMint=sol'
    )
  })

  it('renders the about section', () => {
    render(<Home />)
    
    expect(screen.getByText('WHAT IS')).toBeInTheDocument()
    expect(screen.getByText('BOOK OF OG MEMES?')).toBeInTheDocument()
    expect(screen.getByText(/Solana enthusiasts are embracing/)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Home />)
    
    const twitterLink = screen.getByRole('link', { name: /twitter/i })
    const telegramLink = screen.getByRole('link', { name: /telegram/i })
    
    expect(twitterLink).toHaveAttribute('href', 'https://x.com/boomcoinsolana')
    expect(telegramLink).toHaveAttribute('href', 'https://t.me/theboomportal')
  })

  it('renders tokenomics section', () => {
    render(<Home />)
    
    expect(screen.getByText('TOKENOMICS')).toBeInTheDocument()
    expect(screen.getByText('$BOOM')).toBeInTheDocument()
    expect(screen.getByText('1 BILLION')).toBeInTheDocument()
    expect(screen.getByText('TOKEN SUPPLY')).toBeInTheDocument()
    expect(screen.getByText('0%')).toBeInTheDocument()
  })

  it('renders contract address with copy functionality', async () => {
    render(<Home />)
    
    const contractAddress = 'F9VrtPRZBj7fiFdu3675YXpZWsCcHgzoCzTM8zyjbonk'
    expect(screen.getByText(contractAddress)).toBeInTheDocument()
    
    const copyButton = screen.getByText('COPY')
    expect(copyButton).toBeInTheDocument()
    
    fireEvent.click(copyButton)
    
    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(contractAddress)
    })
  })

  it('renders floating particles', () => {
    render(<Home />)
    
    // Check if particles container exists
    const particlesContainer = document.querySelector('.fixed.inset-0.pointer-events-none')
    expect(particlesContainer).toBeInTheDocument()
  })

  it('renders background video elements', () => {
    render(<Home />)
    
    const videoElements = document.querySelectorAll('video')
    expect(videoElements).toHaveLength(2) // Desktop and mobile versions
    
    videoElements.forEach(video => {
      expect(video).toHaveAttribute('autoPlay')
      expect(video).toHaveAttribute('loop')
      expect(video).toHaveAttribute('playsInline')
      expect(video).toHaveAttribute('muted')
    })
  })

  it('has proper accessibility attributes', () => {
    render(<Home />)
    
    // Check for proper alt texts on images
    const logoImage = screen.getByAltText('The Book of OG Memes')
    expect(logoImage).toBeInTheDocument()
    
    const charactersImage = screen.getByAltText('The Book of OG Memes Characters')
    expect(charactersImage).toBeInTheDocument()
    
    // Check for external links with proper attributes
    const externalLinks = document.querySelectorAll('a[target="_blank"]')
    externalLinks.forEach(link => {
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('applies correct styling classes', () => {
    render(<Home />)
    
    // Check for animation classes
    const animatedElements = document.querySelectorAll('.animate-float, .animate-text-glow, .animate-pulse-glow')
    expect(animatedElements.length).toBeGreaterThan(0)
    
    // Check for responsive classes
    const responsiveElements = document.querySelectorAll('.md\\:text-8xl, .lg\\:text-9xl')
    expect(responsiveElements.length).toBeGreaterThan(0)
  })
})
