'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Media } from '@/components/Media'
// import { Icon } from '@/components/ui/icon'

import type { YachtShowcaseBlock as YachtShowcaseBlockType } from '@/payload-types'
// import Icon from '@/components/ui/icon'

export const YachtShowcaseBlock: React.FC<YachtShowcaseBlockType> = ({
  title,
  description,
  yachtFeatures,
  yachtImage,
  ctaText,
  ctaLink,
}) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <section ref={ref} className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
        {description && <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>}
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
        >
          <Media
            resource={yachtImage}
            alt="Luxury Yacht"
            className="rounded-lg shadow-lg"
            imgClassName="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
        <div className="w-full lg:w-1/2">
          {yachtFeatures?.map((feature, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
              }}
            >
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    {/* <Icon name={feature.icon} className="w-6 h-6 mr-2 text-primary" /> */}
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          {ctaText && ctaLink && (
            <motion.div
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: yachtFeatures?.length ? yachtFeatures.length * 0.1 : 0,
                  },
                },
              }}
            >
              <Button size="lg" asChild>
                <a href={ctaLink}>{ctaText}</a>
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
