'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Media } from '@/components/Media'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

import type { TestimonialsBlock as TestimonialsBlockType } from '@/payload-types'

export const TestimonialsBlock: React.FC<TestimonialsBlockType> = ({
  title,
  description,
  testimonials,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    if (testimonials && testimonials.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }
  }

  const prevTestimonial = () => {
    if (testimonials && testimonials.length > 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
        {description && <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>}
      </div>
      <Card className="bg-gray-100 dark:bg-gray-800 overflow-hidden">
        <CardContent className="p-8 relative">
          <Quote className="absolute top-4 left-4 w-12 h-12 text-gray-300 dark:text-gray-700" />
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {testimonials && testimonials[currentIndex] && (
                  <>
                    <blockquote className="text-2xl italic mb-8 text-gray-700 dark:text-gray-300">
                      &quot;{testimonials[currentIndex].quote}&quot;
                    </blockquote>
                    <div className="flex items-center justify-center">
                      {testimonials[currentIndex].image && (
                        <Media
                          resource={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].author}
                          className="w-16 h-16 rounded-full mr-4"
                          imgClassName="w-full h-full object-cover rounded-full"
                        />
                      )}
                      <div className="text-left">
                        <p className="font-bold text-lg text-gray-900 dark:text-white">
                          {testimonials[currentIndex].author}
                        </p>
                        {testimonials[currentIndex].position && (
                          <p className="text-gray-600 dark:text-gray-400">
                            {testimonials[currentIndex].position}
                          </p>
                        )}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <Button variant="ghost" size="icon" onClick={prevTestimonial}>
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <Button variant="ghost" size="icon" onClick={nextTestimonial}>
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
