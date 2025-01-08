// 'use client'
// import { useHeaderTheme } from '@/providers/HeaderTheme'
// import React, { useEffect } from 'react'

// import type { Page } from '@/payload-types'

// import { CMSLink } from '@/components/Link'
// import { Media } from '@/components/Media'
// import RichText from '@/components/RichText'

// export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
//   const { setHeaderTheme } = useHeaderTheme()

//   useEffect(() => {
//     setHeaderTheme('dark')
//   })

//   return (
//     <div
//       className="relative -mt-[10.4rem] flex items-center justify-center text-white"
//       data-theme="dark"
//     >
//       <div className="container mb-8 z-10 relative flex items-center justify-center">
//         <div className="max-w-[36.5rem] md:text-center">
//           {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
//           {Array.isArray(links) && links.length > 0 && (
//             <ul className="flex md:justify-center gap-4">
//               {links.map(({ link }, i) => {
//                 return (
//                   <li key={i}>
//                     <CMSLink {...link} />
//                   </li>
//                 )
//               })}
//             </ul>
//           )}
//         </div>
//       </div>
//       <div className="min-h-[80vh] select-none">
//         {media && typeof media === 'object' && (
//           <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
//         )}
//       </div>
//     </div>
//   )
// }
'use client'

import React, { useEffect } from 'react'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import { motion } from 'framer-motion'
import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  }, [setHeaderTheme])

  return (
    <div
      className="relative  -mt-[10.4rem] flex items-center justify-center overflow-hidden"
      data-theme="dark"
    >
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
      >
        {media && typeof media === 'object' && (
          <Media fill imgClassName="object-cover" priority resource={media} />
        )}
      </motion.div>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="container mb-8 z-10 relative flex items-center justify-center min-h-[80vh]">
        <div className="max-w-[36.5rem] md:text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {richText && <RichText className="mb-6" data={richText} enableGutter={false} />}
          </motion.div>
          {Array.isArray(links) && links.length > 0 && (
            <motion.ul
              className="flex md:justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </motion.ul>
          )}
        </div>
      </div>
    </div>
  )
}
