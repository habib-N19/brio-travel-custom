'use client'

import React, { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { animateScroll as scroll } from 'react-scroll'

export const GoToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    scroll.scrollToTop()
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <Button onClick={scrollToTop} className="fixed bottom-4 right-4 z-50 rounded-full p-2">
          <ChevronUp className="h-6 w-6" />
        </Button>
      )}
    </>
  )
}
