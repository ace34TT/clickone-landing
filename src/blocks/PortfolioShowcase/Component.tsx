import React from 'react'
import type { PortfolioShowcaseBlock as PortfolioShowcaseProps } from '@/payload-types'
import { Media } from '@/components/Media'
import { CMSLink } from '@/components/Link'

export const PortfolioShowcaseBlock: React.FC<
  PortfolioShowcaseProps & { id?: string }
> = (props) => {
  const { title, projects } = props

  return (
    <section className="relative py-24 bg-[#0B1221] overflow-hidden" id={`block-${props.id}`}>
      
      {/* Decorative Dotted Pattern (Left Edge) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[30rem] h-[30rem] opacity-30 pointer-events-none">
        <div 
          style={{ backgroundImage: 'radial-gradient(#00e5ff 4px, transparent 4px)', backgroundSize: '32px 32px' }} 
          className="w-full h-full transform rotate-45" 
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-wide drop-shadow-md">
            {title}
          </h2>
        </div>

        {projects && projects.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 auto-rows-fr gap-6 lg:gap-8">
            {projects.map((project: any, idx: number) => {
              
              // Map index to a bento grid structure
              // Item 1 (idx 0): Left side, tall spanning 2 rows.
              // Item 2 (idx 1): Right side, top row.
              // Item 3 (idx 2): Right side, bottom row.
              // Fallback for others: standard col span.
              let itemClasses = 'lg:col-span-6'
              if (idx === 0) {
                // Tall column card
                itemClasses = 'lg:col-span-6 lg:row-span-2'
              }

              // Apply an explicit cyan border style on the third element to mimic design state
              const hoverStateClass = (idx === 2) 
                ? 'border-[#00e5ff]' // Active selection style for layout balance 
                : 'border-transparent hover:border-[#00e5ff]'

              return (
                <div 
                  key={idx} 
                  className={`relative group bg-[#161c33] rounded-[2rem] border-2 shadow-xl overflow-hidden flex flex-col items-center justify-center p-6 md:p-10 lg:p-12 transition-all duration-300 min-h-[300px] lg:min-h-0 ${itemClasses} ${hoverStateClass}`}
                >
                  {/* Media Frame wrapper resolving NextJS auto-sizing layout restraints within grid cells */}
                  <div className="w-full h-full relative flex items-center justify-center min-h-[250px] md:min-h-[350px]">
                    {project.image && typeof project.image === 'object' && (
                      <Media 
                        resource={project.image} 
                        fill
                        imgClassName={`object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-2xl`}
                      />
                    )}
                  </div>
                  
                  {/* Transparent Clickable Overlay utilizing the integrated Payload CMSLink */}
                  {project.projectLink && (
                    <CMSLink {...project.projectLink} className="absolute inset-0 z-20 w-full h-full opacity-0">
                      <span className="sr-only">View {project.projectName}</span>
                    </CMSLink>
                  )}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
