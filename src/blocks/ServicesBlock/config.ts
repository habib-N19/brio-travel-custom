import { Block } from 'payload'

export const Services: Block = {
  slug: 'services',
  interfaceName: 'servicesBlock',
  fields: [
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'imageLeft',
      options: [
        { label: 'Image Left', value: 'imageLeft' },
        { label: 'Image Right', value: 'imageRight' },
      ],
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'imageBackground',
      type: 'group',
      fields: [
        {
          name: 'color',
          type: 'text',
          required: true,
          defaultValue: '#ffffff',
        },
        {
          name: 'opacity',
          type: 'number',
          min: 0,
          max: 100,
          defaultValue: 100,
          required: true,
        },
      ],
    },
    {
      name: 'contentBackground',
      type: 'group',
      fields: [
        {
          name: 'color',
          type: 'text',
          required: true,
          defaultValue: '#ffffff',
        },
        {
          name: 'opacity',
          type: 'number',
          min: 0,
          max: 100,
          defaultValue: 100,
          required: true,
        },
      ],
    },
    {
      name: 'textColor',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
          defaultValue: '#000000',
        },
        {
          name: 'subheading',
          type: 'text',
          required: true,
          defaultValue: '#666666',
        },
      ],
    },
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'subheading',
      type: 'textarea',
      required: true,
    },
  ],
}
