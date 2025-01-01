'use client'

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export const InteractiveTravelPlannerBlock: React.FC<any> = ({ title, description, destinations, travelStyles }) => {
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedTravelStyle, setSelectedTravelStyle] = useState('');
  const [budget, setBudget] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send this data to your backend or process it
    console.log({ selectedDestination, selectedTravelStyle, budget, duration });
    // For now, we'll just show an alert
    alert('Thank you for your preferences. Our team will contact you shortly with personalized recommendations.');
  };

  return (
    <div className="container my-16">
      <h2 className="text-3xl font-bold mb-4 text-center">{title}</h2>
      <p className="text-center mb-8">{description}</p>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="mb-4">
          <label className="block mb-2">Destination</label>
          <select
            value={selectedDestination}
            onChange={(e) => setSelectedDestination(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a destination</option>
            {destinations.map((dest, index) => (
              <option key={index} value={dest.name}>{dest.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Travel Style</label>
          <select
            value={selectedTravelStyle}
            onChange={(e) => setSelectedTravelStyle(e.target.value)}
            className="w-full p-2 border rounded"
            required
          >
            <option value="">Select a travel style</option>
            {travelStyles.map((style, index) => (
              <option key={index} value={style.name}>{style.name}</option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Budget (USD)</label>
          <input
            type="number"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter your budget"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Duration (days)</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Enter trip duration"
            required
          />
        </div>
        <Button type="submit" className="w-full">Get Personalized Recommendations</Button>
      </form>
    </div>
  );
};

