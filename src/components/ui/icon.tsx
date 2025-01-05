'use client'

import React from 'react'
import * as LucideIcons from 'lucide-react'

interface IconProps {
  name: string
  size?: number
  color?: string
  className?: string
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  const LucideIcon = LucideIcons[name as keyof typeof LucideIcons] as React.ElementType

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in Lucide icons`)
    return null
  }

  return <LucideIcon className={className} />
}
