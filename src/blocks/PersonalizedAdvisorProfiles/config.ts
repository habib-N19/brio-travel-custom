import { Block } from 'payload'

export const PersonalizedAdvisorProfiles: Block = {
  slug: 'personalizedAdvisorProfiles',
  interfaceName: 'PersonalizedAdvisorProfiles',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'advisors',
      type: 'array',
      minRows: 1,
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
        {
          name: 'specialties',
          type: 'array',
          fields: [
            {
              name: 'specialty',
              type: 'text',
            },
          ],
        },
        {
          name: 'bio',
          type: 'textarea',
        },
        {
          name: 'testimonials',
          type: 'array',
          fields: [
            {
              name: 'quote',
              type: 'textarea',
            },
            {
              name: 'author',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
