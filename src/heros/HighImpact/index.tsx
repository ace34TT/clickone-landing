'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

export const HighImpactHero: React.FC<Page['hero']> = (props) => {
  const { media, highImpactProps } = props
  const title = highImpactProps?.title || 'DIGITAL MARKETING'
  const titleParts = title.split(' ')
  const titleFormatted = titleParts.length > 1
    ? <>{titleParts[0]}<br />{titleParts.slice(1).join(' ')}</>
    : title

  return (
    <div
      className="relative -mt-24.5 pt-56 pb-24 overflow-hidden flex items-center text-white min-h-screen gradient-bg"
    >
      <div className="container relative z-10 mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          {/* Left Column - Content */}
          <div className="flex flex-col items-start xl:pl-10">
            <div className="inline-block max-w-fit">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.1] tracking-wide text-white">
                {titleFormatted}
              </h1>
              {highImpactProps?.subtitle && (
                <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#00e5ff] italic font-light mt-4 tracking-wide">
                  {highImpactProps.subtitle}
                </h2>
              )}
            </div>

            <div className="mt-14 flex flex-col md:flex-row gap-10 md:gap-16">
              <div className="border-l-[3px] border-white/40 pl-5">
                <div className="text-[17px] font-medium text-white/95">Présentation</div>
                <div className="text-[#00e5ff] text-lg font-bold mt-1 tracking-wide">
                  {highImpactProps?.presentationName || 'Medji'}{' '}
                  <span className="text-white font-medium mx-1.5">|</span>{' '}
                  <span className="text-[#00e5ff] font-bold">
                    {highImpactProps?.presentationPhone || '07 85 76 30 86'}
                  </span>
                </div>
              </div>

              <div className="border-l-[3px] border-white/40 pl-5">
                <div className="text-[17px] font-medium text-white/95">Email</div>
                <div className="text-[#00e5ff] text-lg font-bold mt-1 tracking-wide">
                  {highImpactProps?.emailAddress || 'medji@click-one.fr'}
                </div>
              </div>
            </div>

            <button className="mt-14 bg-[#00e5ff] text-black text-lg font-semibold rounded-full px-10 py-4 flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-[#00e5ff]/20">
              {highImpactProps?.ctaText || 'Démarrer un projet'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="relative flex justify-center lg:justify-end w-full">
            <div className="relative w-full max-w-lg lg:max-w-2xl xl:max-w-3xl">
              {media && typeof media === 'object' && media.url ? (
                <img
                  src={media.url}
                  alt={media.alt || 'Digital Marketing Application'}
                  className="w-full h-auto object-contain drop-shadow-2xl translate-x-0 lg:translate-x-12"
                />
              ) : (
                <img
                  src="/static-media/Group 1020(3).png"
                  alt="Digital Marketing Application"
                  className="w-full h-auto object-contain drop-shadow-2xl translate-x-0 lg:translate-x-12"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
