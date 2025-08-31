import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className='bg-background text-foreground py-20'>
      <div className='container mx-auto text-center px-4'>
        {/* Tag */}
        <div className='inline-block font-bold bg-green-100 text-green-700 text-sm px-2  rounded-full mb-6'>
          Made for Homes and Businesses across Africa
        </div>

        {/* Heading */}
        <h1 className='text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto'>
          Choose Your Solar Package. <br />
          <span className='bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent'>
            Get a Custom Quote in Minutes.
          </span>
        </h1>

        {/* Subtext */}
        <p className='mt-6 text-lg max-w-2xl mx-auto'>
          Solar made simple: Pick a standardized package, request a quote, and we&apos;ll tailor it to your exact needs.
        </p>

        {/* CTA Buttons */}
        <div className='mt-8 flex justify-center gap-4 flex-wrap'>
          <Button
            size='lg'
            className='bg-green-600 hover:bg-green-700 text-white font-semibold px-6'
          >
            Explore Packages →
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='border-gray-400 hover:bg-gray-100 font-semibold px-6'
          >
            See Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
}
