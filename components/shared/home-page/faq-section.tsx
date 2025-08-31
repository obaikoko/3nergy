// components/FaqSection.tsx
'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FaqSection() {
  return (
    <section className=' py-20 text-center'>
      <div className='max-w-3xl mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold  mb-4'>
          Got Questions? We've Got Quick Answers ⚡
        </h2>
        <p className='text-gray-600 mb-10'>
          Switching to solar doesn't have to feel complicated. We've made it simple by answering the questions most homeowners and business owners ask.
        </p>

        <Accordion type='single' collapsible className='space-y-4'>
          <AccordionItem
            value='item-1'
            className='border-gray-600  rounded-xl  px-4'
          >
            <AccordionTrigger className='text-left  font-medium'>
              Can solar really power my whole house 24/7?
            </AccordionTrigger>
            <AccordionContent className='text-gray-600'>
              ✅ Yes — with the right package, you'll enjoy steady power day and night.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value='item-2'
            className='border-gray-600  rounded-xl  px-4'
          >
            <AccordionTrigger className='text-left  font-medium'>
              Isn't solar too expensive for the average person?
            </AccordionTrigger>
            <AccordionContent className='text-gray-600'>
              💰 It feels big at first, but it's actually an investment — you pay once, then save on fuel and bills for years.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value='item-3'
            className='border-gray-600  rounded-xl  px-4'
          >
            <AccordionTrigger className='text-left  font-medium'>
              What happens when it rains or at night?
            </AccordionTrigger>
            <AccordionContent className='text-gray-600'>
              🔋 Your battery bank stores energy so you're covered even when the sun isn't shining.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value='item-4'
            className='border-gray-600  rounded-xl  px-4'
          >
            <AccordionTrigger className='text-left  font-medium'>
              Can I start small and expand later?
            </AccordionTrigger>
            <AccordionContent className='text-gray-600'>
              📈 Absolutely — our systems are built to grow as your needs grow.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value='item-5'
            className='border-gray-600  rounded-xl  px-4'
          >
            <AccordionTrigger className='text-left  font-medium'>
              How long will installation take?
            </AccordionTrigger>
            <AccordionContent className='text-gray-600'>
              ⚡ Most setups are ready within 2–5 days, depending on the package.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value='item-6'
            className='border-gray-600  rounded-xl  px-4'
          >
            <AccordionTrigger className='text-left  font-medium'>
              Do you offer after-sales service?
            </AccordionTrigger>
            <AccordionContent className='text-gray-600'>
              🛠️ Yes — every package comes with a warranty and dedicated support so your system keeps running smoothly.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
