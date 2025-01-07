/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Button } from '@/components/ui/button'

export const MembershipBenefitsBlock: React.FC<any> = ({
  title,
  description,
  benefits,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="container my-16 bg-gray-100 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
      <p className="text-center mb-8">{description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {benefits?.map((benefit, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-2">{benefit.name}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <Button asChild>
          <a href={ctaLink}>{ctaText}</a>
        </Button>
      </div>
    </div>
  )
}
