'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BookingFormBlock: React.FC<any> = ({ title, description, successMessage }) => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission
    // For this example, we'll just set isSubmitted to true
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="container my-16 text-center">
        <h2 className="text-3xl font-bold mb-4">{successMessage}</h2>
        <p>We&apos;ll be in touch with you shortly to confirm your booking.</p>
      </div>
    )
  }

  return (
    <div className="container my-16">
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="mb-8">{description}</p>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Destination"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="date"
            placeholder="Preferred Date"
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Number of Travelers"
            required
            className="w-full p-2 border rounded"
          />
        </div>
        <textarea
          placeholder="Additional Comments or Requirements"
          className="w-full p-2 border rounded mt-6"
          rows={4}
        ></textarea>
        <Button type="submit" className="mt-6">
          Submit Booking Request
        </Button>
      </form>
    </div>
  )
}
