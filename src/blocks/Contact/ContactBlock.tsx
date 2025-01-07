/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'

// import type { ContactBlock as ContactBlockType } from '@/payload-types'

const mapContainerStyle = {
  width: '100%',
  height: '400px',
}

export const ContactBlock: React.FC<any> = ({
  title,
  description,
  email,
  phone,
  whatsapp,
  address,
  mapLocation,
}) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string,
  })

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-primary" />
                <p>{email}</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-3 text-primary" />
                <p>{phone}</p>
              </div>
              {whatsapp && (
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-primary"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  <p>{whatsapp}</p>
                </div>
              )}
              {address && (
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-3 text-primary flex-shrink-0" />
                  <p>{address}</p>
                </div>
              )}
            </CardContent>
          </Card>
          {isLoaded && mapLocation && (
            <div className="mt-8">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={{ lat: mapLocation.latitude, lng: mapLocation.longitude }}
                zoom={15}
              >
                <MarkerF position={{ lat: mapLocation.latitude, lng: mapLocation.longitude }} />
              </GoogleMap>
            </div>
          )}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" required />
                <Input type="email" placeholder="Your Email" required />
                <Input type="tel" placeholder="Your Phone" />
                <Textarea placeholder="Your Message" rows={4} required />
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
