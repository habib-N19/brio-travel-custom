import type { CollectionConfig } from 'payload'

import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { Archive } from '../../blocks/ArchiveBlock/config'
import { CallToAction } from '../../blocks/CallToAction/config'
import { Content } from '../../blocks/Content/config'
import { FormBlock } from '../../blocks/Form/config'
import { MediaBlock } from '../../blocks/MediaBlock/config'
import { hero } from '@/heros/config'
import { slugField } from '@/fields/slug'
import { populatePublishedAt } from '../../hooks/populatePublishedAt'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'
import { revalidateDelete, revalidatePage } from './hooks/revalidatePage'

import {
  MetaDescriptionField,
  MetaImageField,
  MetaTitleField,
  OverviewField,
  PreviewField,
} from '@payloadcms/plugin-seo/fields'
import { BookingForm } from '@/blocks/BookingFormBlock/config'
import { Introduction } from '@/blocks/IntroductionBlock/config'
import { ServiceHighlights } from '@/blocks/ServiceHighlights/config'
import { LuxuryShowcase } from '@/blocks/LuxuryShowcase/config'
import { Testimonials } from '@/blocks/TestimonialsBlock/config'
import { ExclusiveMembership } from '@/blocks/ExclusiveMembership/config'
import { BentoGridGallery } from '@/blocks/BentoGallery/config'
import { Discover } from '@/blocks/Discover/config'
import { BlogPreview } from '@/blocks/BlogPreviewBlock/config'
import { InteractiveMap } from '@/blocks/InteractiveMap/config'
import { TravelTips } from '@/blocks/TravelTipsBlock/config'
import { PersonalizedAdvisorProfiles } from '@/blocks/PersonalizedAdvisorProfiles/config'
import { ExclusiveExperiences } from '@/blocks/ExclusiveExperiences/config'
import { MembershipBenefits } from '@/blocks/MembershipBenefits/config'
import { EmergencySupport } from '@/blocks/EmergencySupport/config'
import { InteractiveTravelPlanner } from '@/blocks/InteractiveTravelPlanner/config'
import { YachtShowcase } from '@/blocks/YachtShowcase/config'

export const Pages: CollectionConfig<'pages'> = {
  slug: 'pages',
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  // This config controls what's populated by default when a page is referenced
  // https://payloadcms.com/docs/queries/select#defaultpopulate-collection-config-property
  // Type safe if the collection slug generic is passed to `CollectionConfig` - `CollectionConfig<'pages'>
  defaultPopulate: {
    title: true,
    slug: true,
  },
  admin: {
    defaultColumns: ['title', 'slug', 'updatedAt'],
    livePreview: {
      url: ({ data, req }) => {
        const path = generatePreviewPath({
          slug: typeof data?.slug === 'string' ? data.slug : '',
          collection: 'pages',
          req,
        })

        return path
      },
    },
    preview: (data, { req }) =>
      generatePreviewPath({
        slug: typeof data?.slug === 'string' ? data.slug : '',
        collection: 'pages',
        req,
      }),
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
        {
          fields: [hero],
          label: 'Hero',
        },
        {
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              blocks: [
                CallToAction,
                Content,
                MediaBlock,
                Archive,
                FormBlock,
                BookingForm,
                Introduction,
                ServiceHighlights,
                LuxuryShowcase,
                Testimonials,
                ExclusiveMembership,
                BentoGridGallery,
                Discover,
                BlogPreview,
                InteractiveMap,
                TravelTips,
                // PersonalizedAdvisorProfiles,
                ExclusiveExperiences,
                MembershipBenefits,
                EmergencySupport,
                InteractiveTravelPlanner,
                YachtShowcase,
              ],
              required: true,
              admin: {
                initCollapsed: true,
              },
            },
          ],
          label: 'Content',
        },
        {
          name: 'meta',
          label: 'SEO',
          fields: [
            OverviewField({
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
              imagePath: 'meta.image',
            }),
            MetaTitleField({
              hasGenerateFn: true,
            }),
            MetaImageField({
              relationTo: 'media',
            }),

            MetaDescriptionField({}),
            PreviewField({
              // if the `generateUrl` function is configured
              hasGenerateFn: true,

              // field paths to match the target field for data
              titlePath: 'meta.title',
              descriptionPath: 'meta.description',
            }),
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    ...slugField(),
  ],
  hooks: {
    afterChange: [revalidatePage],
    beforeChange: [populatePublishedAt],
    beforeDelete: [revalidateDelete],
  },
  versions: {
    drafts: {
      autosave: {
        interval: 100, // We set this interval for optimal live preview
      },
    },
    maxPerDoc: 50,
  },
}
