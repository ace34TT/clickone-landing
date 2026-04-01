'use client'

import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { usePathname } from 'next/navigation'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex gap-6 lg:gap-10 xl:gap-14 items-center">
      {navItems.map(({ link }, i) => {
        let href = link.url || ''

        if (
          link.type === 'reference' &&
          typeof link.reference?.value === 'object' &&
          'slug' in link.reference.value
        ) {
          const relation =
            link.reference.relationTo !== 'pages' ? `/${link.reference.relationTo}` : ''
          href = `${relation}/${link.reference.value.slug}`
        }

        // Next.js Payload adapter defaults 'home' slug to root
        if (href === '/home') href = '/'

        const isHash = href.startsWith('#') || href.startsWith('/#')
        const isActive = pathname === href || (!isHash && href !== '/' && pathname.startsWith(href))

        const linkClasses = ` capitalize transition-all duration-300 text-[15px] lg:text-[16px] tracking-wide hover:no-underline ${
          isActive
            ? 'text-[#ffff] font-bold drop-shadow-md'
            : 'text-[#e2e8f0] hover:text-white font-medium hover:-translate-y-0.5'
        }`

        if (isHash) {
          const hashId = href.substring(href.indexOf('#'))
          const targetHref = pathname === '/' ? hashId : `/${hashId}`
          
          return (
            <a
              key={i}
              href={targetHref}
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault()
                  const id = hashId.replace('#', '')
                  const elem = document.getElementById(id)
                  if (elem) {
                    elem.scrollIntoView({ behavior: 'smooth' })
                    // Optional: update URL hash without scrolling jump
                    window.history.pushState(null, '', hashId)
                  }
                }
              }}
              className={linkClasses}
            >
              {link.label}
            </a>
          )
        }

        return (
          <CMSLink
            key={i}
            {...link}
            appearance="link"
            className={linkClasses}
          />
        )
      })}
    </nav>
  )
}
