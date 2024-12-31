import { Block } from 'payload'

export const ExclusiveMembership: Block = {
  slug: 'exclusiveMembership',
  interfaceName: 'ExclusiveMembershipBlock',
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
      name: 'benefits',
      type: 'array',
      minRows: 3,
      maxRows: 5,
      fields: [
        {
          name: 'benefit',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'ctaText',
      type: 'text',
      required: true,
    },
    {
      name: 'ctaLink',
      type: 'text',
      required: true,
    },
  ],
}
