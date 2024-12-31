import { Block } from 'payload'

export const ServiceHighlights: Block = {
  slug: 'serviceHighlights',
  interfaceName: 'ServiceHighlightsBlock',
  fields: [
    {
      name: 'services',
      type: 'array',
      minRows: 3,
      maxRows: 3,
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
        {
          name: 'icon',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
