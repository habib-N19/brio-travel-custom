import { Block } from 'payload'

export const YachtShowcase: Block = {
  slug: 'yachtShowcase',
  interfaceName: 'YachtShowcase',
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
      name: 'yachtFeatures',
      type: 'array',
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          name: 'title',
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
