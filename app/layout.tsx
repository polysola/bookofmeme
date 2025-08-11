import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/app/config/site-config";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: siteConfig.seo.title,
  description: siteConfig.seo.description,
  keywords: siteConfig.seo.keywords,
  authors: [{ name: siteConfig.seo.author }],
  creator: siteConfig.seo.author,
  publisher: siteConfig.seo.author,
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.urls.website,
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    creator: siteConfig.seo.twitterHandle,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: siteConfig.theme.primary,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
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
      </head>
      <body className="font-sans antialiased min-h-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
