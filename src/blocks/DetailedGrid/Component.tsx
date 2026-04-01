import React from 'react'
import { DetailedGrid as DetailedGridProps } from '@/payload-types'
import { Media } from '@/components/Media'
import BlockContainer from '@/components/BlockContainer'

export const DetailedGridBlock: React.FC<
  DetailedGridProps & { id?: string }
> = (props) => {
  const { title, contentItems, imageArray } = props

  // Mathematically split items into two columns mimicking a responsive logical flow
  const items = contentItems ?? []
  const midIndex = Math.ceil(items.length / 2)
  const leftColItems = items.slice(0, midIndex)
  const rightColItems = items.slice(midIndex)

  // Sub-component mapping individual text blocks
  const TextBlock = ({ item, idx }: { item: any; idx: number }) => (
    <div key={idx} className="flex flex-col relative group">
      <h3 className="text-[#00e5ff] text-2xl md:text-3xl font-medium tracking-wide mb-5">
        {item.itemTitle}
      </h3>
      <p className="text-slate-300 text-[15px] md:text-base leading-relaxed mb-6 lg:mr-8">
        {item.description}
      </p>

      {/* Decorative Right-Aligned Cyan Stroke Divider */}
      <div className="w-[60%] lg:w-[75%] h-px bg-[#00e5ff] ml-auto opacity-70 group-hover:opacity-100 transition-opacity" />
    </div>
  )

  return (
    <BlockContainer id={'stat_et_audit'}>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-20 lg:mb-28">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wider drop-shadow-sm">
            {title}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
          {/* Left Column Data */}
          <div className="flex-1 flex flex-col gap-12 lg:gap-20 relative">
            {leftColItems.map((item: any, idx: number) => (
              <TextBlock key={`left-${idx}`} item={item} idx={idx} />
            ))}
          </div>

          {/* Right Column Data */}
          <div className="flex-1 flex flex-col gap-12 lg:gap-20 relative">
            {rightColItems.map((item: any, idx: number) => (
              <TextBlock key={`right-${idx}`} item={item} idx={idx} />
            ))}

            {/* Graphic Icons Array docked at the bottom of Right Column representing timeline/funnel */}
            {imageArray && imageArray.length > 0 && (
              <div className="flex items-center justify-evenly lg:justify-between gap-4 mt-auto pt-8">
                {imageArray.map((img: any, idx: number) => (
                  <div
                    key={idx}
                    className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 shrink-0 transition-transform hover:scale-105 duration-300"
                  >
                    {img.graphicIcon && typeof img.graphicIcon === 'object' && (
                      <Media
                        resource={img.graphicIcon}
                        fill
                        imgClassName="object-contain drop-shadow-[0_0_20px_rgba(0,229,255,0.15)]"
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </BlockContainer>
  )
}
