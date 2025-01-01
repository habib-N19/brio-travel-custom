import { Block } from 'payload'

export const BlogPreview: Block = {
  slug: 'blogPreview',
  interfaceName: 'BlogPreviewBlock',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'posts',
      type: 'relationship',
      relationTo: 'posts',
      hasMany: true,
      maxRows: 6,
      minRows: 3,
      required: true,
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
