import type { Block } from 'payload'
import { link } from '@/fields/link'

export const FeatureGrid: Block = {
  slug: 'featureGrid',
  labels: {
    singular: 'Feature Grid',
    plural: 'Feature Grids',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
    },
    {
      name: 'cards',
      type: 'array',
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'cardTitle',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'richText',
        },
      ],
    },
    link(),
  ],
}
