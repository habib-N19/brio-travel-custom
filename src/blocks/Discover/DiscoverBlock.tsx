import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import RichText from '@/components/RichText'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DiscoverBlock: React.FC<any> = ({ title, content, image, ctaText, ctaLink }) => {
  return (
    <div className="container my-16">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-8">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <RichText data={content} />
          <Button asChild className="mt-6">
            <a href={ctaLink}>{ctaText}</a>
          </Button>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Image
            src={image?.url || null}
            alt={image?.alt || 'Discover image'}
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
