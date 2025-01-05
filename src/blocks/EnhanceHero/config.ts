import { Block } from 'payload'

export const EnhancedHero: Block = {
  slug: 'enhancedHero',
  interfaceName: 'EnhancedHeroBlock',
  fields: [
    {
      name: 'images',
      type: 'array',
      minRows: 1,
      maxRows: 5,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'tagline',
      type: 'text',
      required: true,
    },
    {
      name: 'subtext',
      type: 'textarea',
    },
    {
      name: 'ctaButton',
      type: 'group',
      fields: [
        {
          name: 'text',
          type: 'text',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
