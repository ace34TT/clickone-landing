import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      type: 'row',
      fields: [
        {
          name: 'titleSubtitle',
          type: 'text',
          defaultValue: 'Démarrons',
          admin: { width: '33%' }
        },
        {
          name: 'titleHighlight',
          type: 'text',
          defaultValue: 'Votre Projet',
          admin: { width: '33%' }
        },
        {
          name: 'titleEnd',
          type: 'text',
          defaultValue: 'ensemble',
          admin: { width: '33%' }
        },
      ]
    },
    {
      type: 'row',
      fields: [
        {
          name: 'phone',
          type: 'text',
          defaultValue: '07 85 76 30 86',
          admin: { width: '33%' }
        },
        {
          name: 'email',
          type: 'text',
          defaultValue: 'medji@click-one.fr',
          admin: { width: '33%' }
        },
        {
          name: 'website',
          type: 'text',
          defaultValue: 'click-one.fr',
          admin: { width: '33%' }
        },
      ]
    },
    link({
      overrides: {
        name: 'cta',
        label: 'Call to Action Button',
      }
    }),
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
      admin: {
        initCollapsed: true,
        components: {
          RowLabel: '@/Footer/RowLabel#RowLabel',
        },
      },
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
