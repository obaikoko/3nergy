'use client';

import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TestimonialCard from './testimonial-card';

const testimonials = [
  {
    quote:
      'The website has elevated how customers see my fashion business. I used to compete mainly on price, but now clients choose me because my online presence shows the quality and professionalism of my work.',
    name: 'Fatima Abdullahi',
    business: "Fatima's Fashion House, Abuja",
  },
  {
    quote:
      'Having a professional website has changed how people interact with my business. Customers now see me as the established electronics expert in the area, not just another shop. The WhatsApp integration makes it so easy for them to reach me.',
    name: 'Emeka Okafor',
    business: 'Okafor Electronics, Lagos',
  },
  {
    quote:
      'My online store has boosted my sales by 70%. Customers trust me more now that I have a professional digital presence.',
    name: 'Aisha Mohammed',
    business: "Aisha's Beauty Supply, Kano",
  },
  {
    quote:
      'Now that I have a professional website, I’ve gained corporate clients who never noticed my services before.',
    name: 'Chinedu Umeh',
    business: 'Umeh Consulting, Enugu',
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
        TRUSTED BY BUSINESSES ACROSS NIGERIA
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
          className='bg-background text-foreground absolute top-1/2 left-0 transform -translate-y-1/2  p-2 rounded-full shadow-md  transition'
        >
          <ChevronLeft size={20} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          className='absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-md hover:bg-gray-200 transition'
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </>
  );
}
