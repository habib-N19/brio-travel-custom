import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface BentoGridGalleryProps {
  title: string
  description?: string
  images: {
    image: {
      url: string
      alt: string
    }
    caption?: string
    size: 'small' | 'medium' | 'large'
  }[]
}

const sizeClasses = {
  small: 'col-span-1 row-span-1',
  medium: 'col-span-1 row-span-2 md:col-span-2 md:row-span-1',
  large: 'col-span-2 row-span-2',
}

export const BentoGridGalleryBlock: React.FC<BentoGridGalleryProps> = ({
  title,
  description,
  images,
}) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
      {description && (
        <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">{description}</p>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {images?.map((item, index) => (
          <motion.div
            key={index}
            className={`${sizeClasses[item.size]} relative overflow-hidden rounded-lg`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={item?.image?.url}
              alt={item?.image?.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 hover:scale-110"
            />
            {item.caption && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-center p-4">{item?.caption}</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
