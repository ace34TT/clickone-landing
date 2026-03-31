import type { Block } from 'payload'

export const PricingTable: Block = {
  slug: 'pricingTable',
  labels: {
    singular: 'Pricing Table',
    plural: 'Pricing Tables',
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
      name: 'plans',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'planName',
          type: 'text',
          required: true,
        },
        {
          name: 'price',
          type: 'text',
          required: true,
        },
        {
          name: 'features',
          type: 'array',
          fields: [
            {
              name: 'feature',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'optionsTitle',
      type: 'text',
      defaultValue: 'En Option',
    },
    {
      name: 'extraOptions',
      type: 'array',
      fields: [
        {
          name: 'optionName',
          type: 'text',
        },
      ],
    },
  ],
}
