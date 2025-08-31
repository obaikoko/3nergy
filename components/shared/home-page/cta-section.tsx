'use client';

import { CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CTASection() {
  return (
    <section className=' text-center py-16 px-6'>
      <h2 className='text-4xl md:text-5xl font-bold '>
        ⚡ Power Your Home & Business the Smarter Way
      </h2>
      <p className='mt-4 text-lg  max-w-2xl mx-auto'>
        With Cesol3nergy's reliable solar solutions, you'll enjoy steady power, lower costs, and a future-ready energy system built just for you.
      </p>

      {/* Features Row */}
      <div className='flex flex-wrap justify-center items-center gap-6 mt-6 '>
        <div className='flex items-center gap-2'>
          <CheckCircle className='text-green-500 w-5 h-5' />
          <span>No Long-Term Contracts</span>
        </div>
        <div className='flex items-center gap-2'>
          <Clock className='text-green-500 w-5 h-5' />
          <span>No Hidden Monthly Fees</span>
        </div>
        <div className='flex items-center gap-2'>
          <CheckCircle className='text-green-500 w-5 h-5' />
          <span>Professional Solar Results You Can Rely On</span>
        </div>
      </div>

      {/* Buttons */}
      <div className='mt-8 flex flex-col md:flex-row justify-center gap-4'>
        <Button className='bg-green-600 hover:bg-green-700  text-lg px-6 py-5 rounded-lg'>
          Get a free Quote
        </Button>
        <Button
          className='bg-white text-black px-6 py-5 rounded-lg text-lg shadow hover:bg-gray-200'
        >
          WhatsApp Us: +2349066996674
        </Button>
      </div>

      {/* Footer Note */}
      <p className='mt-6 text-gray-400 text-sm'>
        Ready to Go Solar? Pick a package, request a quote, and let's power your future together.
      </p>
    </section>
  );
}
