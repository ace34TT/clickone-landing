import type { Block } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { link } from '@/fields/link'

export const MediaContent: Block = {
  slug: 'mediaContent',
  labels: {
    singular: 'Media Content Block',
    plural: 'Media Content Blocks',
  },
  fields: [
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'imageLeft',
      options: [
        { label: 'Image Left', value: 'imageLeft' },
        { label: 'Image Right', value: 'imageRight' },
      ],
      admin: { position: 'sidebar' },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
      editor: lexicalEditor(),
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    link(),
  ],
}
