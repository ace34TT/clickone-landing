import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { Footer } from '@/Footer/Component'
import { Header } from '@/Header/Component'
import { Providers } from '@/providers'
import { InitTheme } from '@/providers/Theme/InitTheme'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <html
      className={cn(GeistSans.variable, GeistMono.variable, 'overflow-x-hidden', 'scroll-smooth')}
      lang="fr"
      suppressHydrationWarning
    >
      <head>
        <InitTheme />
        <link href="/favicon.ico" rel="icon" sizes="32x32" />
        <link href="/favicon.svg" rel="icon" type="image/svg+xml" />
      </head>
      <body className={'bg-[#0F2457] overflow-x-hidden'}>
        <Providers>
          {/*<AdminBar*/}
          {/*  adminBarProps={{*/}
          {/*    preview: isEnabled,*/}
          {/*  }}*/}
          {/*/>*/}
          <div className="relative flex flex-col min-h-screen overflow-x-hidden w-full">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: {
    default: 'Click One - Conception Web & Marketing Digital',
    template: '%s | Click One',
  },
  description:
    'Solutions digitales expertes : création de sites vitrine, e-commerce sur mesure, stratégie SEO et design UX/UI par Click One.',
  keywords: [
    'création site web',
    'SEO',
    'e-commerce',
    'marketing digital',
    'Click One',
    'web design',
    'maintenance site web',
  ],
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
    creator: 'Click One',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  publisher: 'Click-one',
}
