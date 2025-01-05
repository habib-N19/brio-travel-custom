'use client'

import React, { useState } from 'react'
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion, AnimatePresence } from 'framer-motion'

import type { InteractiveMapBlock as InteractiveMapBlockType } from '@/payload-types'

const mapContainerStyle = {
  width: '100%',
  height: '600px',
}

const center = { lat: 20, lng: 0 }

export const InteractiveMapBlock: React.FC<InteractiveMapBlockType> = ({
  title,
  description,
  destinations,
}) => {
  const [selectedDestination, setSelectedDestination] = useState<(typeof destinations)[0] | null>(
    null,
  )
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  })

  if (!isLoaded) return <div>Loading map...</div>

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
        {description && <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>}
      </div>
      <div className="relative">
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={2}
          options={{
            styles: [
              {
                featureType: 'all',
                elementType: 'all',
                stylers: [{ saturation: -100 }],
              },
            ],
          }}
        >
          {destinations?.map((destination, index) => (
            <MarkerF
              key={index}
              position={{ lat: destination.latitude, lng: destination.longitude }}
              onClick={() => setSelectedDestination(destination)}
            />
          ))}
        </GoogleMap>
        <AnimatePresence>
          {selectedDestination && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute bottom-8 left-8 right-8 md:left-auto md:right-8 md:w-96"
            >
              <Card>
                <CardHeader>
                  <CardTitle>{selectedDestination.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{selectedDestination.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
