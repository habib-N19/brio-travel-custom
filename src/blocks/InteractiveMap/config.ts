import { Block } from 'payload'

export const InteractiveMap: Block = {
  slug: 'interactiveMap',
  interfaceName: 'InteractiveMapBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'destinations',
      type: 'array',
      minRows: 3,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          required: true,
        },
        {
          name: 'latitude',
          type: 'number',
          required: true,
        },
        {
          name: 'longitude',
          type: 'number',
          required: true,
        },
      ],
    },
  ],
}
