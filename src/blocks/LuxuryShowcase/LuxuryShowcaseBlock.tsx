'use client'

import React from 'react'
import { Media } from '@/components/Media'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion } from 'framer-motion'

import type { LuxuryShowcaseBlock as LuxuryShowcaseBlockType } from '@/payload-types'

export const LuxuryShowcaseBlock: React.FC<LuxuryShowcaseBlockType> = ({
  title,
  description,
  items,
}) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
        {description && <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items?.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group overflow-hidden">
              <CardContent className="p-0 relative">
                <Media
                  resource={item.image}
                  alt={item.title}
                  className="w-full h-64"
                  imgClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  {item.description && <p className="text-white mb-4">{item.description}</p>}
                  {item.link && (
                    <Button variant="outline" className="self-start" asChild>
                      <a href={item.link}>Learn More</a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
