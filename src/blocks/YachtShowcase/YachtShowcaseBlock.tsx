'use client'

import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface YachtShowcaseProps {
  title: string
  description?: string
  yachtFeatures: {
    title: string
    description: string
  }[]
}

export const YachtShowcaseBlock: React.FC<YachtShowcaseProps> = ({
  title,
  description,
  yachtFeatures,
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
      <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
      {description && (
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">{description}</p>
      )}
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <motion.div
          className="w-full lg:w-1/2 mb-8 lg:mb-0"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
          }}
        >
          <svg viewBox="0 0 800 400" className="w-full h-auto">
            {/* Simplified yacht SVG */}
            <motion.path
              d="M100 300 L700 300 L650 200 L150 200 Z"
              fill="#3B82F6"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
            <motion.path
              d="M300 200 L500 200 L450 100 L350 100 Z"
              fill="#60A5FA"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
            />
            <motion.circle
              cx="400"
              cy="150"
              r="20"
              fill="#93C5FD"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            />
          </svg>
        </motion.div>
        <div className="w-full lg:w-1/2">
          {yachtFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="mb-6"
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
              }}
            >
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
