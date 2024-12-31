'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const TestimonialsBlock: React.FC<any> = ({ title, testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="container my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="relative bg-gray-100 p-8 rounded-lg">
        <blockquote className="text-xl italic mb-4">{testimonials[currentIndex].quote}</blockquote>
        <div className="flex items-center">
          {testimonials[currentIndex].image && (
            <Image
              src={testimonials[currentIndex].image.url}
              alt={testimonials[currentIndex].author}
              width={60}
              height={60}
              className="rounded-full mr-4"
            />
          )}
          <p className="font-bold">{testimonials[currentIndex].author}</p>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
          <Button onClick={prevTestimonial}>Previous</Button>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
          <Button onClick={nextTestimonial}>Next</Button>
        </div>
      </div>
    </div>
  )
}
