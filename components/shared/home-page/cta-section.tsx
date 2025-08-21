'use client';

import { CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className=' text-center py-16 px-6'>
      <h2 className='text-4xl md:text-5xl font-bold '>
        Ready to Elevate Your Business Presence?
      </h2>
      <p className='mt-4 text-lg  max-w-2xl mx-auto'>
        Join the growing community of Nigerian businesses that command respect
        with professional websites. Your transformation begins today.
      </p>

      {/* Features Row */}
      <div className='flex flex-wrap justify-center items-center gap-6 mt-6 '>
        <div className='flex items-center gap-2'>
          <CheckCircle className='text-green-500 w-5 h-5' />
          <span>Starting from ₦150,000</span>
        </div>
        <div className='flex items-center gap-2'>
          <Clock className='text-green-500 w-5 h-5' />
          <span>Professional delivery in 2 days</span>
        </div>
        <div className='flex items-center gap-2'>
          <CheckCircle className='text-green-500 w-5 h-5' />
          <span>.com.ng domain included</span>
        </div>
      </div>

      {/* Buttons */}
      <div className='mt-8 flex flex-col md:flex-row justify-center gap-4'>
        <Button className='bg-green-600 hover:bg-green-700  text-lg px-6 py-5 rounded-lg'>
          Get Started Now – ₦150,000
        </Button>
        <Button
          className='bg-white text-black px-6 py-5 rounded-lg text-lg shadow hover:bg-gray-200'
        >
          WhatsApp Us: +234 0901 326 3750
        </Button>
      </div>

      {/* Footer Note */}
      <p className='mt-6 text-gray-400 text-sm'>
        No contracts • No monthly fees • Professional results guaranteed
      </p>
    </section>
  );
}
