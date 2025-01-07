import { Block } from 'payload'

export const YachtShowcase: Block = {
  slug: 'yachtShowcase',
  interfaceName: 'YachtShowcaseBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'yachtImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'ctaText',
      type: 'text',
    },
    {
      name: 'ctaLink',
      type: 'text',
    },
  ],
}
