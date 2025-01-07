'use client'

import React from 'react'
import { motion } from 'framer-motion'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Media } from '@/components/Media'
// import { Icon } from '@/components/ui/icon';
// import { ParallaxWrapper } from '@/components/ParallaxWrapper';
// import { YachtSVG } from './YachtSVG';
import type { YachtShowcaseBlock as YachtShowcaseBlockType } from '@/payload-types'
import { YachtSVG } from './YachtSvg'
import { ParallaxWrapper } from '@/components/utils/ParallexWrapper'

export const YachtShowcaseBlock: React.FC<YachtShowcaseBlockType> = ({
  title,
  description,
  yachtImage,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className="relative max-h-screen overflow-hidden my-24">
      <YachtSVG className="absolute top-0 left-0 w-full h-full text-gray-100 dark:text-gray-400 opacity-10" />
      <ParallaxWrapper speed={5}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 w-full md:grid-cols-6 gap-8 content-center items-center">
            <motion.div
              className="md:col-span-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {yachtImage && (
                <Media
                  resource={yachtImage}
                  alt="Luxury Yacht"
                  className="rounded-lg shadow-lg"
                  imgClassName="w-full h-full object-cover rounded-lg"
                />
              )}
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-2 "
            >
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
              {description && (
                <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>
              )}
              {ctaText && ctaLink && (
                <motion.div
                  className="mt-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 * 0.1 }}
                >
                  <Button size="lg" asChild>
                    <a href={ctaLink}>{ctaText}</a>
                  </Button>
                </motion.div>
              )}
            </motion.div>

            <div>
              {/* {yachtFeatures?.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card className="mb-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Icon name={feature.icon} className="w-6 h-6 mr-2 text-primary" />
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))} */}
            </div>
          </div>
        </div>
      </ParallaxWrapper>
    </section>
  )
}
