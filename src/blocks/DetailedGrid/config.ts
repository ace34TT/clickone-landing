import type { Block } from 'payload'

export const DetailedGrid: Block = {
  slug: 'detailedGrid',
  labels: {
    singular: 'Detailed Grid',
    plural: 'Detailed Grids',
  },
  fields: [
    {
      name: 'title', // "Statistiques & Audits"
      type: 'text',
      required: true,
    },
    {
      name: 'contentItems', // The text blocks (Audit, Rapport, etc.)
      type: 'array',
      minRows: 1,
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'itemTitle',
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
    {
      name: 'imageArray', // Graphic Icons/Illustrations
      label: 'Graphic Icons/Illustrations',
      type: 'array',
      minRows: 1,
      maxRows: 3, // Matches the screenshot layout
      admin: {
        initCollapsed: true,
      },
      fields: [
        {
          name: 'graphicIcon',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
  ],
}
