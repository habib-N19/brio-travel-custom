'use client'

import React from 'react'
import { Media } from '@/components/Media'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { motion } from 'framer-motion'

import type { ExclusiveExperiencesBlock as ExclusiveExperiencesType } from '@/payload-types'

export const ExclusiveExperiencesBlock: React.FC<ExclusiveExperiencesType> = ({
  title,
  description,
  experiences,
}) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
        {description && <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences?.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="group h-full bg-white dark:bg-gray-800">
              <div className="relative h-64 overflow-hidden">
                <Media
                  resource={experience.image}
                  alt={experience.name}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {experience.name}
                </h3>
                {experience.price && (
                  <p className="text-lg font-semibold text-emerald-600 dark:text-emerald-400">
                    From {experience.price}
                  </p>
                )}
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">{experience.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg" asChild>
                  <a href={experience.link}>Book Experience</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
