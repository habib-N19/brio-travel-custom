'use client'

import React from 'react'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

import type { IntroductionBlock as IntroductionBlockType } from '@/payload-types'

export const IntroductionBlock: React.FC<IntroductionBlockType> = ({
  title,
  content,
  image,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h2>
          <div className="prose dark:prose-invert mb-8">{/* <RichText content={content} /> */}</div>
          {ctaText && ctaLink && (
            <Button size="lg" asChild>
              <a href={ctaLink}>{ctaText}</a>
            </Button>
          )}
        </motion.div>
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Media
            resource={image}
            alt={title}
            className="rounded-lg shadow-lg"
            imgClassName="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  )
}
