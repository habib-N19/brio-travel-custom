'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Media } from '@/components/Media'
import { cn } from '@/utilities/cn'

import type { ServicesBlock as ServicesBlockProps } from '@/payload-types'

export const ServicesBlock: React.FC<ServicesBlockProps> = ({
  layout,
  image,
  imageBackground,
  contentBackground,
  textColor,
  title,
  subheading,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerHeight, setContainerHeight] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight)
      }
    }

    // Only update height after image is loaded
    if (imageLoaded) {
      updateHeight()
    }

    window.addEventListener('resize', updateHeight)
    return () => window.removeEventListener('resize', updateHeight)
  }, [imageLoaded])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  // Ensure we have valid image data before rendering
  const hasValidImage = image && typeof image === 'object' && 'url' in image

  return (
    <section ref={containerRef} className="overflow-hidden h-screen">
      <div className="h-full container mx-auto px-4">
        <div
          className={cn('flex items-stretch h-full', {
            'flex-row-reverse': layout === 'imageRight',
          })}
        >
          {/* Image section */}
          <motion.div
            style={{ y }}
            className={cn(
              'w-3/5 relative overflow-hidden h-full',
              layout === 'imageRight' ? 'order-1' : 'order-0',
            )}
          >
            <div
              className="absolute inset-0"
              style={{
                backgroundColor: imageBackground?.color || '#ffffff',
                opacity: (imageBackground?.opacity || 100) / 100,
              }}
            />
            {hasValidImage && (
              <div className="absolute inset-0">
                <Media
                  resource={image}
                  fill
                  imgClassName="object-cover"
                  className="w-full h-full"
                  size="(max-width: 768px) 100vw, 60vw"
                  alt={title || 'Services image'}
                  priority // Add priority to load image early
                  onLoad={() => setImageLoaded(true)} // Track when image loads
                />
              </div>
            )}
          </motion.div>

          {/* Content section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={cn(
              'w-2/5 relative flex items-center h-full',
              layout === 'imageRight' ? 'order-0 pr-12' : 'order-1 pl-12',
            )}
          >
            <div
              className="absolute inset-0 -z-10"
              style={{
                backgroundColor: contentBackground?.color || '#ffffff',
                opacity: (contentBackground?.opacity || 100) / 100,
              }}
            />

            <div className="py-8 px-8 text-left">
              <motion.h2
                variants={itemVariants}
                className="text-4xl font-bold mb-6"
                style={{ color: textColor?.title || '#000000' }}
              >
                {title}
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-base"
                style={{ color: textColor?.subheading || '#666666' }}
              >
                {subheading}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
