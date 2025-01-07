/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Media } from '@/components/Media'
import { motion } from 'framer-motion'

// import type { RelatedExperiencesBlock as RelatedExperiencesBlockType } from '@/payload-types'

export const RelatedExperiencesBlock: React.FC<any> = ({
  title,
  description,
  experiences,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
        {description && <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {experiences?.map((experience, index) => {
          if (typeof experience === 'string') return null
          return (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader className="p-0">
                  <Media
                    resource={experience.featuredImage}
                    alt={experience.title}
                    className="w-full h-48"
                    imgClassName="w-full h-full object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="flex-grow p-6">
                  <CardTitle className="mb-2">{experience.title}</CardTitle>
                  <p className="text-gray-600 dark:text-gray-300">{experience.shortDescription}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" asChild className="w-full">
                    <a href={`/experiences/${experience.slug}`}>Learn More</a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )
        })}
      </div>
      {ctaText && ctaLink && (
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <a href={ctaLink}>{ctaText}</a>
          </Button>
        </div>
      )}
    </section>
  )
}
