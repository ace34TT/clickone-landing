import React from 'react'
import type { PricingTable as PricingTableProps } from '@/payload-types'
import BlockContainer from '@/components/BlockContainer'
import { Media } from '@/components/Media'
import { MobileSwiper } from '@/components/MobileSwiper'

export const PricingTableBlock: React.FC<
  PricingTableProps & { id?: string }
> = (props) => {
  const { title, subtitle, plans, optionsTitle, extraOptions } = props

  return (
    <BlockContainer id={"tarifs"} className={"vertical-gradient-bg"} styles={{isFullWidth: true}}>
      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-wide mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-300 text-sm md:text-base">
              {subtitle}
            </p>
          )}
        </div>

        {plans && plans.length > 0 && (() => {
          const planElements = plans.map((plan: any, idx: number) => {
            const planBg = plan.backgroundColor || '#161c33' // Default background color
            const bgColorClass = planBg.startsWith('bg-') ? planBg : ''
            const inlineStyle = !planBg.startsWith('bg-') ? { backgroundColor: planBg } : {}

            return (
              <div
                key={idx}
                className={`w-full relative flex flex-col rounded-4xl px-8 py-12 md:px-10 md:py-16 min-h-[500px] lg:min-h-[620px] shadow-2xl overflow-hidden ${bgColorClass}`}
                style={inlineStyle}
              >
                {plan.icon && typeof plan.icon === 'object' && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 overflow-visible pointer-events-none">
                    <Media resource={plan.icon} imgClassName="w-auto h-auto object-contain max-w-[100px] md:max-w-none" />
                  </div>
                )}

                <div className="pt-8 md:pt-12 flex flex-col items-center grow z-10 w-full mt-2">
                  <h3 className="text-white text-2xl font-bold mb-8 text-center relative z-10">
                    {plan.planName}
                  </h3>

                  <div className="text-5xl md:text-6xl font-bold text-[#00e5ff] mb-10 text-center drop-shadow-md">
                    {plan.price}
                  </div>

                  <div className="w-1/2 h-px bg-white/30 mb-10" />

                  {plan.features && plan.features.length > 0 && (
                    <ul className="w-full flex flex-col items-start space-y-5 px-2 md:px-4">
                      {plan.features.map((item: any, fIdx: number) => (
                        <li key={fIdx} className="flex items-start text-white w-full">
                          <span className="text-[#00e5ff] mr-3 font-bold text-sm md:text-base">✓</span>
                          <span className="text-[13px] md:text-sm leading-snug">{item.feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            )
          })

          return (
            <>
              <MobileSwiper className="mb-16">{planElements}</MobileSwiper>
              <div className={`hidden lg:grid lg:grid-cols-2 ${plans.length === 3 ? 'lg:grid-cols-3' : ''} gap-6 mb-16 mx-auto`}>
                {planElements}
              </div>
            </>
          )
        })()}

        {/* Extra Options Section */}
        {extraOptions && extraOptions.length > 0 && (
          <div className="max-w-5xl mx-auto pt-4 relative">
            {optionsTitle && (
              <h4 className="text-lg md:text-xl font-bold text-[#00e5ff] text-center mb-8">
                {optionsTitle}
              </h4>
            )}
            <div className="flex flex-col md:flex-row flex-wrap justify-center items-center md:items-start gap-4 md:gap-x-12 md:gap-y-6 text-center md:text-left">
              {extraOptions.map((opt: any, idx: number) => (
                <div key={idx} className="flex items-center text-slate-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-white mr-3 shrink-0 shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  <span className="text-sm md:text-base">
                    {opt.optionName}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </BlockContainer>
  )
}
