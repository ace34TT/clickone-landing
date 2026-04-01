import React from 'react'
import { cn } from '@/utilities/ui'
import type { Media } from '@/payload-types'

type Props = {
  children: React.ReactNode
  className?: string
  id?: string
  styles?: {
    backgroundImage?: (number | null) | Media | string
    isFullWidth?: boolean | null
    paddingTop?: boolean | null
  }
}

const BlockContainer = (props: Props) => {
  const { children, className, styles, id } = props
  const isFullWidth = styles?.isFullWidth ?? false
  const isWithPaddingTop = styles?.paddingTop !== false

  const backgroundImageValue = styles?.backgroundImage
  const backgroundImage =
    typeof backgroundImageValue === 'string'
      ? backgroundImageValue
      : backgroundImageValue &&
          typeof backgroundImageValue === 'object' &&
          'url' in backgroundImageValue
        ? backgroundImageValue.url
        : undefined

  return (
    <section
      id={id}
      className={cn(
        isWithPaddingTop ? 'py-20 md:py-24' : 'pb-20 md:pb-24',
        isFullWidth ? '' : 'container',
        backgroundImage && 'bg-cover bg-center bg-no-repeat',
        className,
      )}
      style={backgroundImage ? { backgroundImage: `url("${backgroundImage}")` } : undefined}
    >
      <div className={cn(isFullWidth && 'container mx-auto')}>{children}</div>
    </section>
  )
}

export default BlockContainer
