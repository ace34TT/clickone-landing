import type { Block } from 'payload'
import { link } from '@/fields/link'

export const PortfolioShowcase: Block = {
  slug: 'portfolioShowcase',
  labels: {
    singular: 'Portfolio Showcase',
    plural: 'Portfolio Showcases',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'projects',
      type: 'array',
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'projectName',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        link({
          overrides: {
            name: 'lnk',
          },
        }),
      ],
    },
  ],
}
