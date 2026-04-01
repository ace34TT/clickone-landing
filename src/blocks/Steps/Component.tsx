import React from 'react'
import type { StepsBlock as StepsBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import BlockContainer from '@/components/BlockContainer'

export const StepsBlock: React.FC<
  StepsBlockProps & { id?: string }
> = (props) => {
  const { title, processSteps } = props

  return (
    <BlockContainer>
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide">{title}</h2>
        </div>

        {processSteps && processSteps.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8">
            {processSteps.map((step: any, idx: number) => {
              const isLast = idx === processSteps.length - 1

              return (
                <div key={idx} className="relative flex flex-col items-start w-full">
                  {/* Connecting Line (Only visible on desktop/tablet, hidden on last item) */}
                  {/* The line covers 100% of the column width + the 2rem (32px) gap to reach the next icon's center */}
                  {!isLast && (
                    <div className="hidden md:block absolute top-8 left-[2rem] w-[calc(100%+2rem)] lg:w-[calc(100%+2rem)] h-[1px] lg:h-[2px] bg-gradient-to-r from-[#00e5ff] to-[#a855f7] z-0" />
                  )}

                  {/* Icon Container with Gradient Border */}
                  {/* rounded-[1.5rem] provides the "squircle" look */}
                  <div className="relative z-10 w-16 h-16 mb-8 rounded-[1.25rem] bg-gradient-to-br from-[#00e5ff] to-[#a855f7] p-[1.5px] shadow-[0_0_15px_rgba(0,229,255,0.15)] flex-shrink-0">
                    <div className="w-full h-full bg-[#0B1221] rounded-[calc(1.25rem-1.5px)] flex items-center justify-center p-3.5">
                      {step.icon && typeof step.icon === 'object' && (
                        <Media resource={step.icon} imgClassName="object-contain w-full h-full" />
                      )}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg md:text-xl font-bold text-[#00e5ff] mb-4">
                    {idx + 1}. {step.stepTitle}
                  </h3>

                  {/* Step Description */}
                  <p className="text-slate-300 text-sm md:text-xs lg:text-sm leading-relaxed pr-4 text-left">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </BlockContainer>
  )
}
