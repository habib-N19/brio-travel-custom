import React from 'react'
import { Button } from '@/components/ui/button'

export const ExclusiveMembershipBlock: React.FC<any> = ({
  title,
  description,
  benefits,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="container my-16 bg-gray-100 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="mb-6">{description}</p>
      <ul className="list-disc list-inside mb-8">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit.benefit}</li>
        ))}
      </ul>
      <Button asChild>
        <a href={ctaLink}>{ctaText}</a>
      </Button>
    </div>
  )
}
