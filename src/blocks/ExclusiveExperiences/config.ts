import { Block } from 'payload'

export const ExclusiveExperiences: Block = {
  slug: 'exclusiveExperiences',
  interfaceName: 'ExclusiveExperiences',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'experiences',
      type: 'array',
      minRows: 1,
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
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'price',
          type: 'text',
        },
      ],
    },
  ],
}
