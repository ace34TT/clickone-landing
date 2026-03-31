import type { Block } from 'payload'

export const IconCards: Block = {
  slug: 'iconCards',
  labels: {
    singular: 'Icon Cards Block',
    plural: 'Icon Cards Blocks',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'cards',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'cardTitle',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
      ],
    },
  ],
}
