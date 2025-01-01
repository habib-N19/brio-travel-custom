import React from 'react'
import Image from 'next/image'
import RichText from '@/components/RichText'

export const IntroductionBlock: React.FC<any> = ({ title, content, image }) => {
  return (
    <div className="container my-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <RichText data={content} />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src={image?.url || null}
            alt={image?.alt || 'Introduction image'}
            width={600}
            height={400}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}
