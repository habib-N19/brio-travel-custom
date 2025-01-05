'use client'

import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Media } from '@/components/Media'
import { motion, AnimatePresence } from 'framer-motion'

import type { EnhancedHeroBlock as EnhancedHeroBlockType } from '@/payload-types'

export const EnhancedHeroBlock: React.FC<EnhancedHeroBlockType> = ({
  images,
  tagline,
  subtext,
  ctaButton,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Media
            resource={images[currentImageIndex]?.image}
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
            alt={`Hero image ${currentImageIndex + 1}`}
            priority
          />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          {tagline}
        </motion.h1>
        {subtext && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl"
          >
            {subtext}
          </motion.p>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <Button size="lg" asChild>
            <a href={ctaButton.link}>{ctaButton.text}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
