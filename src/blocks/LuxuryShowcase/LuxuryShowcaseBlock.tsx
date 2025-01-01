import React from 'react'
import { Media } from '@/components/Media'

import type { LuxuryShowcaseBlock as LuxuryShowcaseBlockType } from '@/payload-types'

export const LuxuryShowcaseBlock: React.FC<LuxuryShowcaseBlockType> = ({ title, items }) => {
  return (
    <div className="container my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items?.map((item, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            <Media
              resource={item.image}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              imgClassName="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              {item.description && <p className="text-white">{item.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
