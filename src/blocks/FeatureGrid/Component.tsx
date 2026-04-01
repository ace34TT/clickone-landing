import React from 'react'
import type { FeatureGridBlock as FeatureGridProps } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import BlockContainer from '@/components/BlockContainer'

export const FeatureGridBlock: React.FC<
  FeatureGridProps & { id?: string }
> = (props) => {
  const { title, subtitle, cards, cta } = props

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

        {cards && cards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
            {cards.map((card: any, idx: number) => (
              <div key={idx} className="flex flex-col items-start text-left w-full">
                <h3 className="text-3xl font-light text-[#00e5ff] tracking-wide mb-5">
                  {card.cardTitle}
                </h3>
                {card.description && (
                  <div className="prose prose-sm md:prose-base prose-slate dark:prose-invert text-slate-300 w-full mb-6 max-w-none">
                    <RichText data={card.description} enableGutter={false} />
                  </div>
                )}
                <div className="w-[45%] border-b-[2px] border-[#00e5ff] ml-auto mt-auto pt-2"></div>
              </div>
            ))}
          </div>
        )}

        {cta && cta.label && cta.url && (
          <div className="mt-24 text-center flex justify-center">
            <CMSLink
              {...cta}
              appearance={undefined}
              className="inline-block border border-white rounded-[2rem] px-8 py-3 text-white text-lg font-light transition-all hover:bg-white hover:text-slate-900"
            />
          </div>
        )}
      </div>
    </BlockContainer>
  )
}
