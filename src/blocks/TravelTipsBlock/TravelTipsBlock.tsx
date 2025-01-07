'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Icon } from '@/components/ui/icon'
import { motion } from 'framer-motion'

import type { TravelTipsBlock as TravelTipsBlockType } from '@/payload-types'
import { Media } from '@/components/Media'

export const TravelTipsBlock: React.FC<TravelTipsBlockType> = ({ title, description, tips }) => {
  // const hasValidImage = image && typeof image === 'object' && 'url' in image

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
        {description && <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips?.map((tip, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full bg-gray-50 dark:bg-gray-800">
              <CardHeader>
                {/* <Icon name={tip.icon} className="w-12 h-12 mb-4 text-primary" /> */}
                <CardTitle className="text-xl font-bold">{tip.tipTitle}</CardTitle>
              </CardHeader>
              <CardContent className="flex grid-cols-5 gap-4">
                <p className="text-gray-600 col-span-2 dark:text-gray-300">{tip.tipContent}</p>
                {/* {hasValidImage && ( */}
                <div className="col-span-3">
                  <Media
                    resource={tip?.image}
                    fill
                    imgClassName="object-cover"
                    className="w-full h-full"
                    size="(max-width: 768px) 100vw, 60vw"
                    alt={tip?.tipTitle || 'Travel tip'}
                    priority
                  />
                </div>
                {/* )} */}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
