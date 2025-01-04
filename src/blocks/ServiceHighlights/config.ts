import { Block } from 'payload'

export const ServiceHighlightBlock: Block = {
  slug: 'serviceHighlight',
  interfaceName: 'ServiceHighlightBlock',
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
      name: 'services',
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
        {
          name: 'icon',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
