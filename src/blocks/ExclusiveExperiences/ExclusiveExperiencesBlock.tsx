import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const ExclusiveExperiencesBlock: React.FC<any> = ({ title, experiences }) => {
  return (
    <div className="container my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {experiences.map((experience, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src={experience?.image?.url || null}
              alt={experience?.name}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{experience?.name}</h3>
              <p className="text-gray-600 mb-4">{experience?.description}</p>
              {experience?.price && (
                <p className="text-lg font-semibold mb-4">From {experience?.price}</p>
              )}
              <Button>Book Now</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
