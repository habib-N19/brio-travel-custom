// 'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export const BlogPreviewBlock: React.FC<any> = ({ title, posts, ctaText, ctaLink }) => {
  return (
    <div className="container my-16">
      <h2 className="text-3xl font-bold mb-8">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            {post.featuredImage && (
              <Image
                src={post.featuredImage.url}
                alt={post.featuredImage.alt || post.title}
                width={400}
                height={250}
                objectFit="cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="mb-4">{post.excerpt}</p>
              <Button asChild variant="outline">
                <a href={`/blog/${post.slug}`}>Read More</a>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild>
          <a href={ctaLink}>{ctaText}</a>
        </Button>
      </div>
    </div>
  )
}
