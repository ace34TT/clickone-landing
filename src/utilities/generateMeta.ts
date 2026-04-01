import type { Metadata } from 'next'

import type { Media, Page, Post, Config } from '../payload-types'

import { mergeOpenGraph } from './mergeOpenGraph'
import { getServerSideURL } from './getURL'

const getImageURL = (image?: Media | Config['db']['defaultIDType'] | null) => {
  const serverUrl = getServerSideURL()

  let url = serverUrl + '/website-template-OG.webp'

  if (image && typeof image === 'object' && 'url' in image) {
    const ogUrl =
      image.sizes &&
      'og' in image.sizes &&
      image.sizes.og &&
      typeof image.sizes.og === 'object' &&
      'url' in image.sizes.og &&
      typeof (image.sizes.og as { url: string }).url === 'string'
        ? (image.sizes.og as { url: string }).url
        : null

    url = ogUrl ? serverUrl + ogUrl : serverUrl + image.url
  }

  return url
}

export const generateMeta = async (args: {
  doc: Partial<Page> | Partial<Post> | null
}): Promise<Metadata> => {
  const { doc } = args

  const ogImage = getImageURL(doc?.meta?.image)

  const title = doc?.meta?.title
    ? doc?.meta?.title + ' | Click One'
    : 'Click One - Conception Web & Marketing Digital'

  const description =
    doc?.meta?.description ||
    'Solutions digitales expertes : création de sites vitrine, e-commerce sur mesure, stratégie SEO et design UX/UI par Click One.'

  return {
    description,
    openGraph: mergeOpenGraph({
      description,
      images: ogImage
        ? [
            {
              url: ogImage,
            },
          ]
        : undefined,
      title,
      url: Array.isArray(doc?.slug) ? doc?.slug.join('/') : `/${doc?.slug || ''}`,
    }),
    title,
    alternates: {
      canonical: Array.isArray(doc?.slug) ? doc?.slug.join('/') : `/${doc?.slug || ''}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
