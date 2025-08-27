import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className='bg-background text-foreground py-20'>
      <div className='container mx-auto text-center px-4'>
        {/* Tag */}
        <div className='inline-block font-bold bg-green-100 text-green-700 text-sm px-2  rounded-full mb-6'>
          NG Made for Nigerian Businesses
        </div>

        {/* Heading */}
        <h1 className='text-4xl md:text-5xl font-bold leading-tight max-w-4xl mx-auto'>
          Finally, A Website That <br />
          <span className='bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent'>
            Matches Your Quality
          </span>
        </h1>

        {/* Subtext */}
        <p className='mt-6 text-lg max-w-2xl mx-auto'>
          Professional Nigerian websites that make customers choose{' '}
          <span className='font-bold'>you over your competitors.</span> Built in
          just 2 days.
        </p>

        {/* CTA Buttons */}
        <div className='mt-8 flex justify-center gap-4 flex-wrap'>
          <Button
            size='lg'
            className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6'
          >
            Get Started Now →
          </Button>
          <Button
            size='lg'
            variant='outline'
            className='border-gray-400 hover:bg-gray-100 font-semibold px-6'
          >
            See Success Stories
          </Button>
        </div>
      </div>
    </section>
  );
}
