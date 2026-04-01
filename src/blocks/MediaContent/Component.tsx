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
    <BlockContainer className={"reverse-gradient-bg"} styles={{isFullWidth : true}}>
      {/* Title Centered Top */}
      {title && (
        <div className="mb-12 text-center w-full">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
            {title}
          </h2>
        </div>
      )}

      <div
        className={`flex flex-col gap-12 items-center ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
      >
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative h-75 md:h-125">
          {image && typeof image === 'object' && (
            <Media resource={image} fill imgClassName="object-cover rounded-2xl shadow-xl" />
          )}
        </div>

        {/* Content Side */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-6">
          {content && (
            <div className="prose prose-slate dark:prose-invert">
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
    </BlockContainer>
  )
}
