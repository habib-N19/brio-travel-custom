'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Media } from '@/components/Media'
import { motion, AnimatePresence } from 'framer-motion'

import type { BookingFormBlock as BookingFormBlockType } from '@/payload-types'

export const BookingFormBlock: React.FC<BookingFormBlockType> = ({
  title,
  description,
  successMessage,
  backgroundImage,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <section className="relative py-24">
      <Media
        resource={backgroundImage}
        className="absolute inset-0 w-full h-full object-cover"
        imgClassName="w-full h-full object-cover"
        alt="Booking Form Background"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 container mx-auto px-4">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border-none text-white">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold text-center">{title}</CardTitle>
                  <p className="text-center mt-2">{description}</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      type="text"
                      placeholder="Full Name"
                      required
                      className="bg-white/20 text-white placeholder:text-gray-300"
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      required
                      className="bg-white/20 text-white placeholder:text-gray-300"
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      required
                      className="bg-white/20 text-white placeholder:text-gray-300"
                    />
                    <Select>
                      <SelectTrigger className="bg-white/20 text-white">
                        <SelectValue placeholder="Preferred Destination" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="europe">Europe</SelectItem>
                        <SelectItem value="asia">Asia</SelectItem>
                        <SelectItem value="africa">Africa</SelectItem>
                        <SelectItem value="americas">Americas</SelectItem>
                        <SelectItem value="oceania">Oceania</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      type="date"
                      placeholder="Preferred Date"
                      required
                      className="bg-white/20 text-white placeholder:text-gray-300"
                    />
                    <Input
                      type="number"
                      placeholder="Number of Travelers"
                      required
                      className="bg-white/20 text-white placeholder:text-gray-300"
                    />
                    <Textarea
                      placeholder="Additional Comments or Requirements"
                      rows={4}
                      className="bg-white/20 text-white placeholder:text-gray-300"
                    />
                    <Button type="submit" size="lg" className="w-full">
                      Submit Booking Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto text-center text-white"
            >
              <h2 className="text-3xl font-bold mb-4">{successMessage}</h2>
              <p className="text-xl">
                We&apos;ll be in touch with you shortly to confirm your booking.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
