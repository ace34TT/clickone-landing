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

        const isActive = pathname === href || (href !== '/' && pathname.startsWith(href))

        return (
          <CMSLink
            key={i}
            {...link}
            appearance="link"
            className={`transition-all duration-300 text-[15px] lg:text-[16px] tracking-wide hover:no-underline ${
              isActive
                ? 'text-[#ffff] font-bold drop-shadow-md'
                : 'text-[#e2e8f0] hover:text-white font-medium hover:-translate-y-0.5'
            }`}
          />
        )
      })}
    </nav>
  )
}
