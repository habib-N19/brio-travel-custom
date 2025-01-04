'use client'

import React from 'react'
import { Media } from '@/components/Media'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import RichText from '@/components/RichText'
import { ArrowRight } from 'lucide-react'

import type { BlogPreviewBlock as BlogPreviewType } from '@/payload-types'

export const BlogPreviewBlock: React.FC<BlogPreviewType> = ({
  title,
  description,
  posts,
  ctaText,
  ctaLink,
}) => {
  return (
    <section className="container mx-auto px-4 py-16">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{title}</h2>
        {description && <p className="text-lg text-gray-600 dark:text-gray-300">{description}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts?.map((post, index) => {
          if (typeof post === 'string') return null
          return (
            <Card key={index} className="group overflow-hidden bg-white dark:bg-gray-800">
              {post.featuredImage && (
                <div className="relative h-64 overflow-hidden">
                  <Media
                    resource={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full"
                    imgClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              )}
              <CardHeader>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{post.title}</h3>
              </CardHeader>
              <CardContent>{post.excerpt && <RichText data={post.excerpt} />}</CardContent>
              <CardFooter>
                <Button variant="ghost" className="group" asChild>
                  <a href={`/blog/${post.slug}`}>
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </CardFooter>
            </Card>
          )
        })}
      </div>
      <div className="text-center mt-12">
        <Button size="lg" asChild>
          <a href={ctaLink}>{ctaText}</a>
        </Button>
      </div>
    </section>
  )
}
