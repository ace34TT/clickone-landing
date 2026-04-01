import { Field } from 'payload'
export const styles = (): Field => {
  return {
    name: 'styles',
    type: 'group',
    fields: [
      {
        name: 'backgroundImage',
        type: 'upload',
        relationTo: 'media',
      },
      {
        name: 'isFullWidth',
        type: 'checkbox',
        defaultValue: false,
      },
      {
        name: 'paddingTop',
        type: 'checkbox',
        defaultValue: true,
      },
    ],
  }
}
