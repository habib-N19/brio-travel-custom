'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Media } from '@/components/Media'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

import type { ExclusiveMemberBlock as ExclusiveMemberBlockType } from '@/payload-types'

export const ExclusiveMemberBlock: React.FC<ExclusiveMemberBlockType> = ({
  title,
  description,
  benefits,
  ctaText,
  ctaLink,
  backgroundImage,
}) => {
  return (
    <section className="relative py-24">
      <Media
        resource={backgroundImage}
        className="absolute inset-0 w-full h-full object-cover"
        imgClassName="w-full h-full object-cover"
        alt="Exclusive Membership Background"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60" />
      <div className="relative z-10 container mx-auto px-4">
        <Card className="bg-white/10 backdrop-blur-md border-none text-white">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-center mb-4">{title}</CardTitle>
            <p className="text-lg text-center mb-8">{description}</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <Check className="w-6 h-6 text-emerald-400 mr-3 flex-shrink-0" />
                  <p className="text-lg">{benefit.benefit}</p>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Button size="lg" variant="secondary" asChild>
                <a href={ctaLink}>{ctaText}</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
