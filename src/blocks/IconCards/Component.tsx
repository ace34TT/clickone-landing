import React from 'react'
import type { IconCardsBlock as IconCardsBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import BlockContainer from '@/components/BlockContainer'

export const IconCardsBlock: React.FC<
  IconCardsBlockProps & { id?: string }
> = (props) => {
  const { title, cards } = props

  return (
    <BlockContainer  className={"gradient-bg"} styles={{ isFullWidth : true}}>

      {/* Decorative Dotted Pattern (Right Edge) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-64 h-64 opacity-30 pointer-events-none">
        <div
          style={{ backgroundImage: 'radial-gradient(#00e5ff 3px, transparent 3px)', backgroundSize: '24px 24px' }}
          className="w-full h-full transform rotate-45"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide">
            {title}
          </h2>
        </div>

        {cards && cards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card: any, idx: number) => (
              <div
                key={idx}
                className="group flex flex-col items-center text-center p-10 lg:p-14 bg-[#1B1F34] rounded-[2rem] border-2 border-transparent hover:border-[#00e5ff] transition-all duration-300 shadow-2xl"
              >
                <div className="w-24 h-24 mb-6 relative flex items-center justify-center">
                  {card.icon && typeof card.icon === 'object' && (
                    <Media
                      resource={card.icon}
                      fill
                      imgClassName="object-contain drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
                    />
                  )}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {card.cardTitle}
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </BlockContainer>
  )
}
