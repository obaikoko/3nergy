'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './testimonial-card';

const testimonials = [
  {
    quote:
      'Running my shop was becoming impossible with rising fuel prices. Every day, I was spending more on diesel than I was making in sales. Cesol3nergy helped me switch to solar, and honestly, it\'s the best decision I\'ve made for my business. My monthly expenses have dropped drastically, and I can keep my freezers, lights, and POS machines running all day without stress. Customers even notice how consistent we are now. Solar is truly the future, and Cesol3nergy made it easy for me.',
    name: 'Emeka Okeke',
    business: 'Shop Owner, Lagos',
  },
  {
    quote:
      'As a developer, I\'m always looking for ways to make my properties more attractive to buyers. Partnering with Cesol3nergy added that edge. They installed a solar package for one of our estates, and the feedback from clients has been fantastic — buyers feel reassured knowing their homes will have steady, affordable power. The professionalism of the Cesol3nergy team also gave me confidence. This is not just about installations; it\'s about building long-term value.',
    name: 'Adunni Adebayo',
    business: 'Real Estate Developer, Lagos',
  },
  {
    quote:
      'Before Cesol3nergy, my family and I were always at the mercy of NEPA and the noise of generators. Since installing our solar system, we\'ve had constant power — no fuel costs, no blackouts. What impressed me most was how the team explained everything in simple terms and delivered exactly when they said they would. It feels good knowing my home now runs on clean energy, and I don\'t worry about bills piling up.',
    name: 'Fatima Abdullahi',
    business: 'Homeowner, Abuja',
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  // ✅ 1 card on small screens, 2 cards on md+
  const visibleCards =
    typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 2;
  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  });

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <>
      <h2 className='text-center text-gray-400 mb-6 font-extrabold'>
        TRUSTED BY BUSINESSES ACROSS AFRICA
      </h2>
      <div className='bg-background text-foreground relative w-full max-w-5xl mx-auto overflow-hidden'>
        <div
          className='flex transition-transform duration-700 ease-in-out'
          style={{
            transform: `translateX(-${current * (100 / visibleCards)}%)`,
          }}
        >
          {testimonials.map((t, i) => (
            <div key={i} className='w-full md:w-1/2 flex-shrink-0 px-4'>
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>

        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          className='bg-background text-foreground absolute top-1/2 left-0 transform -translate-y-1/2 hover:bg-gray-200  p-2 rounded-full shadow-md  transition'
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className='absolute top-1/2 right-0 transform -translate-y-1/2  p-2 rounded-full shadow-md hover:bg-gray-200 transition'
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </>
  );
}
