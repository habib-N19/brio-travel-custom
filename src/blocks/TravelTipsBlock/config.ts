import { Block } from 'payload'

export const TravelTips: Block = {
  slug: 'travelTips',
  interfaceName: 'TravelTipsBlock',
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
      name: 'tips',
      type: 'array',
      minRows: 3,
      maxRows: 6,
      fields: [
        {
          name: 'tipTitle',
          type: 'text',
          required: true,
        },
        {
          name: 'tipContent',
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
