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
    <section className='bg-[#0a0f1a] py-20 text-center'>
      <div className='max-w-3xl mx-auto px-4'>
        <h2 className='text-3xl md:text-4xl font-bold text-white mb-4'>
          Quick Questions? Quick Answers!
        </h2>
        <p className='text-gray-300 mb-10'>
          The stuff you&apos;re probably wondering about (we get these questions all
          the time!)
        </p>

        <Accordion type='single' collapsible className='space-y-4'>
          <AccordionItem
            value='item-1'
            className='border-gray-600  rounded-xl bg-[#0f1625] px-4'
          >
            <AccordionTrigger className='text-left text-white font-medium'>
              Wait, is ₦150,000 really ALL I pay?
            </AccordionTrigger>
            <AccordionContent className='text-gray-300'>
              ✅ Yes, that&apos;res the total cost. No hidden charges or extra fees.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value='item-2'
            className='border-gray-600  rounded-xl bg-[#0f1625] px-4'
          >
            <AccordionTrigger className='text-left text-white font-medium'>
              How fast do you ACTUALLY deliver?
            </AccordionTrigger>
            <AccordionContent className='text-gray-300'>
              🚀 We typically deliver within a few days, depending on your
              request.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value='item-3'
            className='border-gray-600  rounded-xl bg-[#0f1625] px-4'
          >
            <AccordionTrigger className='text-left text-white font-medium'>
              Do I get to pick which website I like best?
            </AccordionTrigger>
            <AccordionContent className='text-gray-300'>
              🎨 Yes, you&apos;rell have options and can choose the design that suits
              you.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
