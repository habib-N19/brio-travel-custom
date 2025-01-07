/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { BookingFormBlock } from '@/blocks/BookingFormBlock/BookingFormBlock'
import { IntroductionBlock } from '@/blocks/IntroductionBlock/IntroductionBlock'
import { LuxuryShowcaseBlock } from '@/blocks/LuxuryShowcase/LuxuryShowcaseBlock'
import { TestimonialsBlock } from '@/blocks/TestimonialsBlock/TesstimonialsBlock'
import { ExclusiveMembershipBlock } from '@/blocks/ExclusiveMembership/ExclusiveMembershipBlock'
import { DiscoverBlock } from '@/blocks/Discover/DiscoverBlock'
import { BlogPreviewBlock } from '@/blocks/BlogPreviewBlock/BlogPreviewBlock'
import { InteractiveMapBlock } from '@/blocks/InteractiveMap/InteractiveMapBlock'
import { TravelTipsBlock } from '@/blocks/TravelTipsBlock/TravelTipsBlock'
import { PersonalizedAdvisorProfilesBlock } from '@/blocks/PersonalizedAdvisorProfiles/PersonalizedAdvisorProfilesBlock'
import { ExclusiveExperiencesBlock } from '@/blocks/ExclusiveExperiences/ExclusiveExperiencesBlock'
import { MembershipBenefitsBlock } from '@/blocks/MembershipBenefits/MembershipBenefitsBlock'
import { EmergencySupportBlock } from '@/blocks/EmergencySupport/EmergencySupportBlock'
import { InteractiveTravelPlannerBlock } from '@/blocks/InteractiveTravelPlanner/InteractiveTravelPlannerBlock'
import { BentoGridGalleryBlock } from '@/blocks/BentoGallery/BentoGridGalleryBlock'
import { YachtShowcaseBlock } from '@/blocks/YachtShowcase/YachtShowcaseBlock'
import { ServicesBlock } from './ServicesBlock/ServicesBlock'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  bookingForm: BookingFormBlock,
  introduction: IntroductionBlock,
  services: ServicesBlock,
  luxuryShowcase: LuxuryShowcaseBlock,
  testimonials: TestimonialsBlock,
  exclusiveMembership: ExclusiveMembershipBlock,
  discover: DiscoverBlock,
  blogPreview: BlogPreviewBlock,
  interactiveMap: InteractiveMapBlock,
  // contact: ContactBlock,
  // travelPackage: TravelPackageBlock,
  travelTips: TravelTipsBlock,
  personalizedAdvisorProfiles: PersonalizedAdvisorProfilesBlock,
  exclusiveExperiences: ExclusiveExperiencesBlock,
  membershipBenefits: MembershipBenefitsBlock,
  emergencySupport: EmergencySupportBlock,
  interactiveTravelPlanner: InteractiveTravelPlannerBlock,
  bentoGridGallery: BentoGridGalleryBlock,
  yachtShowcase: YachtShowcaseBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0

  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            if (Block) {
              return (
                <div className="" key={index}>
                  <Block {...(block as any)} disableInnerContainer />
                </div>
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}
