'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Media } from '@/components/Media'

import { Card, CardContent } from '@/components/ui/card'

import type { BentoGridGalleryBlock as BentoGridGalleryType } from '@/payload-types'
import { cn } from '@/utilities/cn'

const sizeClasses = {
  small: 'col-span-1 row-span-1',
  medium: 'col-span-1 row-span-2 md:col-span-2 md:row-span-1',
  large: 'col-span-2 row-span-2',
} as const

export const BentoGridGalleryBlock: React.FC<BentoGridGalleryType> = ({
  title,
  description,
  images,
}) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
        {description && <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images?.map((item, index) => (
          <motion.div
            key={index}
            className={cn(sizeClasses[item.size], 'group relative overflow-hidden rounded-xl')}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="w-full h-full overflow-hidden">
              <CardContent className="p-0 h-full">
                <Media
                  resource={item.image}
                  alt={item.caption || `Gallery image ${index + 1}`}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {item.caption && (
                  <div className="absolute inset-0 bg-black/60 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center p-6 font-light tracking-wide">
                      {item.caption}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
