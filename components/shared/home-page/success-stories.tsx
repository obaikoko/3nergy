import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

export default function SuccessStories() {
  return (
    <section className='bg-[#0A0D12] text-white py-20'>
      <div className='container mx-auto px-4'>
        {/* Tag */}
        <div className='text-center mb-6'>
          <div className='inline-block bg-green-900 text-green-200 text-sm px-3 py-1 rounded-full'>
            Real Success Stories
          </div>
        </div>

        {/* Heading */}
        <h2 className='text-3xl md:text-4xl font-bold text-center'>
          See How We Transform Businesses
        </h2>
        <p className='mt-4 text-gray-300 text-center max-w-3xl mx-auto'>
          Real Nigerian businesses, real challenges, real results. Each client
          got 3 website options and chose their favorite.
        </p>

        {/* Content Grid */}
        <div className='mt-12 grid md:grid-cols-2 gap-10 items-start'>
          {/* Left: Business Info */}
          <div>
            <h3 className='text-2xl font-bold'>KemiKollections</h3>
            <p className='text-gray-400'>Kemi Aliu • Abuja</p>
            <span className='inline-block mt-3 bg-gray-700 text-gray-200 text-xs px-3 py-1 rounded-full'>
              Contemporary African Fashion
            </span>

            {/* Challenge Box */}
            <div className='mt-6 border border-l-4 border-l-orange-400 border-gray-700 rounded-lg p-4'>
              <p className='text-orange-400 font-semibold'>The Challenge</p>
              <p className='text-gray-300  mt-1'>
                Needed to establish an online presence that reflects her modern
                take on traditional African fashion
              </p>
            </div>
            <div className='mt-6 border border-gray-700 rounded-lg p-4'>
              <p className=' font-semibold'>The Story </p>
              <p className='text-gray-300 mt-1'>
                Kemi is a 28-year-old fashion designer with a degree in design
                and a passion for African culture. She creates ready-to-wear and
                bespoke outfits using Ankara and Adire fabrics with a modern
                twist, targeting young professionals and fashion-forward
                individuals who want to express their African identity in a
                chic, contemporary way.
              </p>
            </div>

            {/* Nav Arrows */}
            <div className='flex gap-3 mt-6'>
              <button className='bg-gray-800 p-2 rounded-full hover:bg-gray-700'>
                <ChevronLeft className='w-5 h-5' />
              </button>
              <button className='bg-gray-800 p-2 rounded-full hover:bg-gray-700'>
                <ChevronRight className='w-5 h-5' />
              </button>
            </div>
          </div>

          {/* Right: Design Response */}
          <div>
            <h4 className='font-semibold text-lg'>Our Design Response</h4>
            <p className='text-gray-300 text-sm'>
              We created three distinct visual directions. The client chose
              their favorite.
            </p>

            {/* Options */}
            <div className='flex flex-wrap gap-3 mt-4'>
              <Button
                variant='outline'
                className='bg-transparent border-gray-600 text-white hover:bg-gray-800'
              >
                Heritage Elegance
              </Button>
              <Button className='bg-green-700 hover:bg-green-800 text-white'>
                Modern Couture
              </Button>
              <Button
                variant='outline'
                className='bg-transparent border-gray-600 text-white hover:bg-gray-800'
              >
                Cultural Chic
              </Button>
            </div>

            {/* Browser Frame */}
            <div className='mt-6 bg-gray-900 rounded-lg overflow-hidden border border-gray-700'>
              {/* Browser top bar */}
              <div className='flex items-center gap-2 px-4 py-2 bg-gray-800'>
                <span className='w-3 h-3 bg-red-500 rounded-full'></span>
                <span className='w-3 h-3 bg-yellow-500 rounded-full'></span>
                <span className='w-3 h-3 bg-green-500 rounded-full'></span>
                <span className='ml-4 text-gray-300 text-xs truncate'>
                  kemikollections.com.ng
                </span>
              </div>

              {/* Scrollable Website Screenshot */}
              <div className='relative max-h-[300px] overflow-y-auto'>
                <Image
                  src='/placeholder1.jpg'
                  alt='Website preview'
                  width={800}
                  height={500}
                  className='w-full object-cover'
                />
                {/* Down Arrow Indicator */}
                <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 rounded-full p-2'>
                  <ChevronDown className='w-5 h-5 text-white' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
