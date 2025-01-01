import React from 'react'
import { Phone, Mail } from 'lucide-react'
import RichText from '@/components/RichText'

export const EmergencySupportBlock: React.FC<any> = ({
  title,
  description,
  phoneNumber,
  email,
  additionalInfo,
}) => {
  return (
    <div className="container my-16 bg-red-100 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
      <p className="text-center mb-8">{description}</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        <div className="flex items-center gap-2">
          <Phone className="w-6 h-6" />
          <a href={`tel:${phoneNumber}`} className="text-xl font-bold">
            {phoneNumber}
          </a>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-6 h-6" />
          <a href={`mailto:${email}`} className="text-xl font-bold">
            {email}
          </a>
        </div>
      </div>
      {additionalInfo && (
        <div className="bg-white p-6 rounded-lg">
          <RichText data={additionalInfo} />
        </div>
      )}
    </div>
  )
}
