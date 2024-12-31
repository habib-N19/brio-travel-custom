import React from 'react'
import Icon from '@/components/ui/icon'

export const ServiceHighlightsBlock: React.FC<any> = ({ services }) => {
  return (
    <div className="container my-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="text-center">
            <Icon name={service.icon} className="w-16 h-16 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
