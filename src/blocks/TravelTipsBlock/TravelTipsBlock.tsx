import React from 'react'
import { Icon } from '@/components/ui/icon'

export const TravelTipsBlock: React.FC<any> = ({ title, tips }) => {
  return (
    <div className="container my-16">
      <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tips.map((tip, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg">
            <Icon name={tip.icon} className="w-12 h-12 mb-4 text-primary" />
            <h3 className="text-xl font-bold mb-2">{tip.tipTitle}</h3>
            <p>{tip.tipContent}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
