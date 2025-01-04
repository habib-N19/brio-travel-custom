'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Media } from '@/components/Media'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

import type { TravelPackageBlock as TravelPackageBlockType } from '@/payload-types'

export const TravelPackageBlock: React.FC<TravelPackageBlockType> = ({
  title,
  description,
  packages,
}) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
        {description && <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {packages?.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col">
              <CardHeader className="p-0">
                <Media
                  resource={pkg.image}
                  alt={pkg.name}
                  className="w-full h-48"
                  imgClassName="w-full h-full object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                  {pkg.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{pkg.description}</p>
                <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-6">
                  {pkg.price}
                </p>
                <ul className="space-y-2">
                  {pkg.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-emerald-500 mr-2" />
                      <span className="text-gray-700 dark:text-gray-300">{feature.feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" size="lg" asChild>
                  <a href={pkg.link}>Book Now</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
