import React from 'react'
import Image from 'next/image'

export const LuxuryShowcaseBlock: React.FC<any> = ({ title, items }) => {
  return (
    <div className="container my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="relative group overflow-hidden rounded-lg">
            <Image
              src={item.image.url}
              alt={item.image.alt || item.title}
              width={400}
              height={300}
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-110"
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
