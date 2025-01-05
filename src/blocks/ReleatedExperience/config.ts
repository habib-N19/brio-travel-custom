import { Block } from 'payload'

export const RelatedExperiences: Block = {
  slug: 'relatedExperiences',
  interfaceName: 'RelatedExperiencesBlock',
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
      name: 'experiences',
      type: 'relationship',
      relationTo: 'posts',

      hasMany: true,
      max: 4,
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
