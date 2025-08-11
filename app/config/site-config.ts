// Site Configuration - Thay đổi tất cả nội dung tại đây
export const siteConfig = {
  // Thông tin cơ bản
  name: "THE BOOK OF OG MEMES STORY ",
  title: "THE BOOK OF OG MEMES STORY",
  subtitle: "OG MEMES",
  description: "Solana enthusiasts are embracing Book of OG Memes, moving away from the frog meme trend. Join our vibrant community and enjoy the ride with the OG Memes!",
  
  // URLs và Links
  urls: {
    website: "https://bookofogmemes.xyz",
    buyLink: "https://raydium.io/swap/?inputMint=F9VrtPRZBj7fiFdu3675YXpZWsCcHgzoCzTM8zyjbonk&outputMint=sol",
    contractAddress: "F9VrtPRZBj7fiFdu3675YXpZWsCcHgzoCzTM8zyjbonk"
  },

  // Hình ảnh
  images: {
    logo: "https://bookofogmemes.xyz/logo.png",
    heroImage: "https://bookofogmemes.xyz/img11.jpg",
    backgroundVideo: {
      desktop: "https://bookofogmemes.xyz/background.mp4",
      mobile: "https://bookofogmemes.xyz/mobile.mp4"
    },
    // Placeholder images nếu muốn dùng local
    placeholder: "/images/placeholder.svg"
  },

  // Social Media Links
  socialLinks: [
    {
      name: "Gate.io",
      href: "https://gate.io/",
      icon: "https://bookofogmemes.xyz/icons/gate.png"
    },
    {
      name: "Twitter/X", 
      href: "https://x.com/boomcoinsolana",
      icon: "https://bookofogmemes.xyz/icons/twitter.svg"
    },
    {
      name: "BitMart",
      href: "https://bitmart.com/",
      icon: "https://bookofogmemes.xyz/icons/bitmart.png"
    },
    {
      name: "Telegram",
      href: "https://t.me/theboomportal", 
      icon: "https://bookofogmemes.xyz/icons/telegram.svg"
    },
    {
      name: "DexScreener",
      href: "https://dexscreener.com/solana/2rACkXMREA9FgKd1C9CiU8aVBRyVGvLFtjXi8dg1dHFc",
      icon: "https://bookofogmemes.xyz/icons/dexscreener.svg"
    },
    {
      name: "DexTools",
      href: "https://www.dextools.io/app/en/solana/pair-explorer/2rACkXMREA9FgKd1C9CiU8aVBRyVGvLFtjXi8dg1dHFc",
      icon: "https://bookofogmemes.xyz/icons/dextools.svg"
    }
  ],

  // Nội dung sections
  content: {
    hero: {
      title1: "THE BOOK OF",
      title2: "OG MEMES", 
      buttonText: "BUY!"
    },
    
    about: {
      title1: "WHAT IS",
      title2: "BOOK OF OG MEMES?",
      description: "Solana enthusiasts are embracing Book of OG Memes, moving away from the frog meme trend. Since its inception, Book of OG Memes has become a beloved icon within the crypto community, known for its laid-back and wise demeanor. Created by meme legends, this collection finally makes its debut on the Solana chain. Join our vibrant community and enjoy the ride with the OG Memes!",
      buttonText: "BUY"
    },

    tokenomics: {
      title: "TOKENOMICS",
      tokenSymbol: "$BOOM",
      supply: {
        amount: "1 BILLION",
        label: "TOKEN SUPPLY"
      },
      tax: {
        rate: "0%",
        label: "BUY/SELL TAX:"
      },
      features: [
        {
          title: "LIQUIDITY",
          value: "BURNED",
          bgColor: "bg-cyan-100/90",
          textColor: "text-cyan-600"
        },
        {
          title: "OWNERSHIP", 
          value: "RENOUNCED",
          bgColor: "bg-lime-100/90",
          textColor: "text-lime-600"
        },
        {
          title: "FAIR LAUNCH",
          value: "100%",
          bgColor: "bg-yellow-100/90", 
          textColor: "text-yellow-600"
        }
      ],
      finalButtonText: "GET $BOOM NOW!"
    }
  },

  // SEO Metadata
  seo: {
    title: "THE BOOK OF OG MEMES STORY",
    description: "Solana enthusiasts are embracing Book of OG Memes, moving away from the frog meme trend. Join our vibrant community and enjoy the ride with the OG Memes!",
    keywords: ["book of og memes", "solana", "memes", "crypto", "boom", "defi"],
    author: "Book of OG Memes",
    twitterHandle: "@boomcoinsolana"
  },

  // Theme Colors
  theme: {
    primary: "#a3e635", // lime-400
    secondary: "#06b6d4", // cyan-500
    accent: "#eab308", // yellow-500
    background: "#000000",
    text: "#ffffff"
  },

  // Animations Settings
  animations: {
    enableFloatingParticles: true,
    particleCount: 20,
    enableBackgroundVideo: true,
    enableHoverEffects: true,
    enableLoadingScreen: true,
    loadingDuration: 3000 // milliseconds
  }
}

// Type definitions để có TypeScript support
export type SiteConfig = typeof siteConfig
