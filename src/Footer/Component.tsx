import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer as FooterType } from '@/payload-types'

import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'
import { Logo } from '@/components/Logo/Logo'

export async function Footer() {
  const footerData = (await getCachedGlobal('footer', 1)()) as FooterType

  const navItems = footerData?.navItems || []
  // We type assert since some fields are injected
  const { titleSubtitle, titleHighlight, titleEnd, phone, email, website, cta } = footerData as any

  return (
    <footer className="relative  vertical-gradient-bg text-white pt-24 pb-12 overflow-hidden mt-auto border-t border-slate-800">
      {/* Decorative Dotted Mesh Left */}
      <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-48 lg:w-64 h-64 pointer-events-none opacity-60 hidden md:block">
        <svg fill="none" viewBox="0 0 100 200" className="w-full h-full text-[#00e5ff] opacity-80">
          <pattern id="dots-left" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="3" fill="currentColor" />
          </pattern>
          <mask id="tri-mask-left">
            <polygon points="0,0 100,100 0,200" fill="white" />
          </mask>
          <rect
            x="0"
            y="0"
            width="100"
            height="200"
            fill="url(#dots-left)"
            mask="url(#tri-mask-left)"
          />
        </svg>
      </div>

      {/* Decorative Dotted Mesh Right */}
      <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-48 lg:w-64 h-64 pointer-events-none opacity-60 hidden md:block">
        <svg fill="none" viewBox="0 0 100 200" className="w-full h-full text-[#00e5ff] opacity-80">
          <pattern id="dots-right" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="3" cy="3" r="3" fill="currentColor" />
          </pattern>
          <mask id="tri-mask-right">
            <polygon points="100,0 0,100 100,200" fill="white" />
          </mask>
          <rect
            x="0"
            y="0"
            width="100"
            height="200"
            fill="url(#dots-right)"
            mask="url(#tri-mask-right)"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 flex flex-col items-center">
        {/* Massive Text Headings */}
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight leading-tight md:leading-[1.15]">
            {titleSubtitle || 'Démarrons'} <br className="hidden md:block" />
            <span className="text-[#00e5ff]">{titleHighlight || 'Votre Projet'}</span>{' '}
            {titleEnd || 'ensemble'}
          </h2>
        </div>

        {/* Smile Icon SVG */}
        <div className="mb-20 text-[#00e5ff]">
          <svg
            width="64"
            height="40"
            viewBox="0 0 48 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Smile */}
            <path
              d="M8 19C11 24 17 27 24 27C31 27 37 24 40 19"
              stroke="currentColor"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Open left eye */}
            <circle cx="16" cy="8" r="2" fill="currentColor" />

            {/* Wink right eye */}
            <path d="M30 8H34" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>

        {/* Contact 3-Column Info Arrays */}
        <div className="flex flex-col md:flex-row justify-center lg:justify-between w-full gap-12 lg:gap-8 mb-20 text-center">
          {/* Phone Item */}
          <div className="flex-1 flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-white flex justify-center items-center text-[#00e5ff] transition-colors hover:bg-white/5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M3 5c0-1.1.9-2 2-2h3.2c.9 0 1.6.6 1.8 1.4l.8 3.5c.2.8-.2 1.6-.9 2L7.6 9.1C9.4 12.8 12.2 15.6 15.9 17.4l1.2-2.3c.4-.7 1.2-1.1 2-.9l3.5.8c.8.2 1.4.9 1.4 1.8V20c0 1.1-.9 2-2 2H21C11.1 22 3 13.9 3 4V5z" />
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-wider">
              {phone || '07 85 76 30 86'}
            </span>
          </div>

          {/* Email Item */}
          <div className="flex-1 flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-white flex justify-center items-center text-[#00e5ff] transition-colors hover:bg-white/5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
                <polyline points="3 7 12 13 21 7" />
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-wider">
              {email || 'medji@click-one.fr'}
            </span>
          </div>

          {/* Web Item */}
          <div className="flex-1 flex flex-col items-center gap-6">
            <div className="w-16 h-16 rounded-full border border-white flex justify-center items-center text-[#00e5ff] transition-colors hover:bg-white/5">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-wider">
              {website || 'click-one.fr'}
            </span>
          </div>
        </div>

        {/* CTA Button Block */}
        <div className="mb-28">
          {cta?.link ? (
            <CMSLink
              {...cta.link}
              className="inline-flex items-center justify-center bg-[#00e5ff] hover:bg-white text-black font-semibold text-xl py-6 px-14 rounded-full transition-all duration-300 drop-shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:drop-shadow-[0_0_30px_rgba(0,229,255,0.8)]"
            >
              {cta.link?.label || 'Nous Contacter'}
              <svg
                className="ml-2 w-5 h-5 font-bold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
              </svg>
            </CMSLink>
          ) : (
            <button className="inline-flex items-center justify-center bg-[#00e5ff] hover:bg-white text-black font-semibold text-xl py-6 px-14 rounded-full transition-all duration-300 drop-shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:drop-shadow-[0_0_30px_rgba(0,229,255,0.8)]">
              Nous Contacter
              <svg
                className="ml-2 w-5 h-5 font-bold"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          )}
        </div>

        {/* Bottom Legal Row / Mapped Nav Items */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 gap-6 mt-8">
          <div>© Copyright ©{new Date().getFullYear()}. Click One</div>

          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {navItems.map(({ link }: { link: any }, i: number) => (
              <CMSLink className="hover:text-white transition-colors" key={i} {...link} />
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
