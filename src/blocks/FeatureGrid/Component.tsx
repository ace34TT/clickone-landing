import React from 'react'
import { FeatureGrid as FeatureGridProps } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import BlockContainer from '@/components/BlockContainer'
import { MobileSwiper } from '@/components/MobileSwiper'

export const FeatureGridBlock: React.FC<
  FeatureGridProps & { id?: string }
> = (props) => {
  const { title, subtitle, cards, link } = props

  return (
    <BlockContainer>
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg md:text-xl text-slate-300 font-light max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        {cards && cards.length > 0 && (() => {
          const cardElements = cards.map((card: any, idx: number) => (
            <div key={idx} className="flex flex-col items-start text-left w-full h-full">
              <h3 className="text-2xl lg:text-3xl font-light text-[#00e5ff] tracking-wide mb-4 lg:mb-5">
                {card.cardTitle}
              </h3>
              {card.description && (
                <div className="prose prose-sm md:prose-base prose-slate dark:prose-invert text-slate-300 w-full mb-6 max-w-none grow">
                  <RichText data={card.description} enableGutter={false} />
                </div>
              )}
              <div className="w-[45%] border-b-2 border-[#00e5ff] ml-auto mt-auto pt-2"></div>
            </div>
          ))
          return (
            <>
              <MobileSwiper>{cardElements}</MobileSwiper>
              <div className="hidden lg:grid grid-cols-2 gap-x-16 gap-y-20">
                {cardElements}
              </div>
            </>
          )
        })()}

        {link && link.label && link.url && (
          <div className="mt-24 text-center flex justify-center">
            <CMSLink
              {...link}
              appearance={undefined}
              className="inline-block border border-white rounded-4xl px-8 py-3 text-white text-lg font-light transition-all hover:bg-white hover:text-slate-900"
            />
          </div>
        )}
      </div>
    </BlockContainer>
  )
}
