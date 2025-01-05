'use client'

import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxWrapperProps {
  children: React.ReactNode
  speed?: number
}

export const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ children, speed = 0.5 }) => {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1], [0, speed])

  return <motion.div style={{ y }}>{children}</motion.div>
}
