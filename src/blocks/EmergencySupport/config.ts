import { Block } from 'payload'

export const EmergencySupport: Block = {
  slug: 'emergencySupport',
  interfaceName: 'EmergencySupport',
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
      name: 'phoneNumber',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'additionalInfo',
      type: 'richText',
    },
  ],
}
