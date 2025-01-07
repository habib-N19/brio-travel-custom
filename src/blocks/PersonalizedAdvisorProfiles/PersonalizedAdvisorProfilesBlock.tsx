/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export const PersonalizedAdvisorProfilesBlock: React.FC<any> = ({ title, advisors }) => {
  const [selectedAdvisor, setSelectedAdvisor] = useState(0)

  return (
    <div className="container my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {advisors.map((advisor, index) => (
          <button
            key={index}
            onClick={() => setSelectedAdvisor(index)}
            className={`px-4 py-2 rounded-full ${
              selectedAdvisor === index ? 'bg-primary text-white' : 'bg-gray-200'
            }`}
          >
            {advisor?.name}
          </button>
        ))}
      </div>
      {advisors[selectedAdvisor] && (
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full md:w-1/3">
            <Image
              src={advisors[selectedAdvisor]?.image?.url || null}
              alt={advisors[selectedAdvisor]?.name}
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
          <div className="w-full md:w-2/3">
            <h3 className="text-2xl font-bold mb-4">{advisors[selectedAdvisor]?.name}</h3>
            <p className="mb-4">{advisors[selectedAdvisor].bio}</p>
            <h4 className="text-xl font-semibold mb-2">Specialties:</h4>
            <ul className="list-disc list-inside mb-4">
              {advisors[selectedAdvisor]?.specialties?.map((specialty, index) => (
                <li key={index}>{specialty?.specialty}</li>
              ))}
            </ul>
            <h4 className="text-xl font-semibold mb-2">Client Testimonials:</h4>
            {advisors[selectedAdvisor].testimonials.map((testimonial, index) => (
              <blockquote key={index} className="italic mb-4 pl-4 border-l-4 border-gray-300">
                &quot;{testimonial?.quote}&quot;
                <footer className="text-right">- {testimonial?.author}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
