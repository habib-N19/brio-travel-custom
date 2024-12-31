import React from 'react'

interface IconProps {
  name: string
  size?: number
  color?: string
  className?: string
}

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'black', className }) => {
  return (
    <svg width={size} height={size} fill={color} aria-hidden="true" className={className}>
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

export default Icon
