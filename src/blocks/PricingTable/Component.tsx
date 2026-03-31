import React from 'react'
import type { PricingTableBlock as PricingTableProps } from '@/payload-types'

const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
)

export const PricingTableBlock: React.FC<
  PricingTableProps & { id?: string }
> = (props) => {
  const { title, subtitle, plans, optionsTitle, extraOptions } = props

  return (
    <section className="py-24 bg-[#0B1221]" id={`block-${props.id}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-slate-300 text-lg">
              {subtitle}
            </p>
          )}
        </div>

        {plans && plans.length > 0 && (
          <div className={`grid grid-cols-1 md:grid-cols-2 ${plans.length === 3 ? 'lg:grid-cols-3' : ''} gap-8 mb-20 max-w-5xl mx-auto`}>
            {plans.map((plan: any, idx: number) => {
              // The middle plan highlights aggressively as a "popular" / primary tier automatically.
              const isMiddle = plans.length === 3 && idx === 1

              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col bg-[#161c33] rounded-[2rem] p-8 md:p-10 transition-transform duration-300 shadow-xl ${
                    isMiddle 
                      ? 'border-2 border-[#00e5ff] scale-100 lg:scale-105 shadow-[0_0_30px_rgba(0,229,255,0.15)] z-10' 
                      : 'border border-transparent hover:border-[#00e5ff] scale-100 z-0'
                  }`}
                >
                  {isMiddle && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00e5ff] text-black font-bold px-5 py-1.5 rounded-full text-xs uppercase tracking-widest shadow-lg">
                      Populaire
                    </div>
                  )}

                  <h3 className="text-[#00e5ff] text-xl font-bold uppercase tracking-wider mb-4">
                    {plan.planName}
                  </h3>
                  
                  <div className="text-4xl md:text-5xl font-extrabold text-white mb-8">
                    {plan.price}
                  </div>

                  {plan.features && plan.features.length > 0 && (
                    <ul className="mb-4 space-y-4 flex-grow">
                      {plan.features.map((item: any, fIdx: number) => (
                        <li key={fIdx} className="flex items-start text-slate-300">
                          <CheckIcon className="w-5 h-5 text-[#00e5ff] mr-3 mt-[3px] flex-shrink-0" />
                          <span className="text-sm md:text-base leading-relaxed">{item.feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  
                </div>
              )
            })}
          </div>
        )}

        {/* Extra Options Section */}
        {extraOptions && extraOptions.length > 0 && (
          <div className="max-w-4xl mx-auto bg-[#161c33]/50 rounded-[2rem] p-8 md:p-12 border border-[#1e2439] shadow-inner relative overflow-hidden">
            {/* Subtle internal gradient effect mapped into background container */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#a855f7]/20 to-transparent blur-3xl pointer-events-none -mr-16 -mt-16" />

            {optionsTitle && (
              <h4 className="text-2xl font-bold text-white text-center mb-10 relative z-10 drop-shadow">
                {optionsTitle}
              </h4>
            )}
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 relative z-10">
              {extraOptions.map((opt: any, idx: number) => (
                <div key={idx} className="bg-[#0B1221] border border-[#1e2439] hover:border-[#00e5ff]/50 rounded-full px-6 py-3 shadow-md transform hover:-translate-y-1 transition-all">
                  <span className="text-slate-200 font-medium">
                    + {opt.optionName}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
