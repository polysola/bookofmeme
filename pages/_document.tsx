import { Html, Head, Main, NextScript } from 'next/document'
import { siteConfig } from '@/app/config/site-config'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload fonts */}
        <link 
          rel="preload" 
          href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Bangers&display=swap" 
          as="style"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Bangers&display=swap" 
          rel="stylesheet" 
        />
        
        {/* Preload critical resources */}
        <link rel="preload" href={siteConfig.images.logo} as="image" />
        <link rel="preload" href={siteConfig.images.heroImage} as="image" />
        <link rel="preload" href={siteConfig.images.backgroundVideo.desktop} as="video" type="video/mp4" />
        <link rel="preload" href={siteConfig.images.backgroundVideo.mobile} as="video" type="video/mp4" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="https://bookofogmemes.xyz" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* Favicon */}
        <link rel="icon" href="/boom.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
