import React from 'react'
import type { MediaContentBlock as MediaContentBlockProps } from '@/payload-types'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import BlockContainer from '@/components/BlockContainer'

export const MediaContentBlock: React.FC<
  MediaContentBlockProps & {
    id?: string
  }
> = (props) => {
  const { layout, title, content, image, link } = props

  const isImageLeft = layout === 'imageLeft'

  return (
    <BlockContainer
      id={'a-propos'}
      className={'reverse-gradient-bg'}
      styles={{ isFullWidth: true }}
    >
      <div className="container relative z-10 mx-auto px-4 md:px-8 max-w-6xl">
        {/* Title Centered Top */}
        {title && (
          <div className="mb-12 text-center w-full">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              {title}
            </h2>
          </div>
        )}

        <div
          className={`flex flex-col-reverse gap-12 items-center ${isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
        >
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative h-80 md:h-100 lg:h-125 min-h-[320px]">
            {image && typeof image === 'object' && (
              <Media resource={image} fill imgClassName="object-cover rounded-2xl" />
            )}
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            {content && (
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <RichText data={content} enableGutter={false} />
              </div>
            )}

            {link && (
              <div className="mt-4">
                <CMSLink {...link} />
              </div>
            )}
          </div>
        </div>
      </div>
    </BlockContainer>
  )
}
