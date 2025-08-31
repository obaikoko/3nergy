'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

type StoryOption = {
  name: string;
};

type SuccessStory = {
  businessName: string;
  personAndLocation: string;
  tag: string;
  challenge: string;
  story: string;
  options: StoryOption[];
  chosenOptionIndex: number;
  websiteUrl: string;
  images: { src: string; alt: string }[];
};

const STORIES: SuccessStory[] = [
  {
    businessName: 'Mrs. Oladipo',
    personAndLocation: 'Homeowner • Ikeja, Lagos',
    tag: 'Uninterrupted Power',
    challenge:
      'Constant blackouts and the stress of running a noisy, costly generator.',
    story:
      'Mrs. Oladipo\'s family was constantly at the mercy of NEPA, and their generator often disrupted peace at home. With fuel costs rising, she needed a lasting solution. Cesol3nergy installed a 1.5kVA Basic Solar Package with a portable power station, giving her uninterrupted power for essential appliances like lights, fans, and TV. Today, she enjoys quiet nights, zero fuel stress, and the peace of mind that her home runs on clean energy. What stood out most was how clearly Cesol3nergy explained everything and delivered exactly as promised.',
    options: [
      { name: '1.5kVA Basic Package' },
      { name: 'Portable Power Station' },
      { name: 'Essential Appliances' }
    ],
    chosenOptionIndex: 1,
    websiteUrl: 'cesol3nergy.com',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop',
        alt: 'Solar panels on rooftop at sunset',
      },
      {
        src: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=1600&auto=format&fit=crop',
        alt: 'Solar farm under clear sky',
      },
      {
        src: 'https://images.unsplash.com/photo-1505739896310-3ce8a83f40d5?q=80&w=1600&auto=format&fit=crop',
        alt: 'Engineer checking solar inverters',
      },
    ],
  },
  {
    businessName: 'Mr. Eze',
    personAndLocation: 'Small Business Owner • Enugu',
    tag: 'Cost Savings',
    challenge:
      'Rising fuel expenses draining business profits.',
    story:
      'Running his popular provision shop became almost impossible for Mr. Eze as diesel costs ate up most of his profit. He reached out to Cesol3nergy, and after assessment, the team installed a 5kVA Standard Solar Package to power his freezers, lights, and POS machines. Within the first month, his expenses dropped drastically — no more fuel stress or noisy generator breakdowns. Customers noticed his improved consistency, and his profits became sustainable again. For him, switching to solar with Cesol3nergy was the smartest move for his business.',
    options: [
      { name: '5kVA Standard Package' },
      { name: 'Business Appliances' },
      { name: 'Profit Optimization' }
    ],
    chosenOptionIndex: 0,
    websiteUrl: 'cesol3nergy.com',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1600&auto=format&fit=crop',
        alt: 'Clean energy solar farm with blue sky',
      },
      {
        src: 'https://images.unsplash.com/photo-1505672678657-cc7037095e60?q=80&w=1600&auto=format&fit=crop',
        alt: 'Close-up of solar cells pattern',
      },
      {
        src: 'https://images.unsplash.com/photo-1567113463300-102a7eb5b7db?q=80&w=1600&auto=format&fit=crop',
        alt: 'Solar panels in desert landscape',
      },
    ],
  },
  {
    businessName: 'Mr. Hassan',
    personAndLocation: 'Real Estate Developer • Lekki, Lagos',
    tag: 'Property Value',
    challenge:
      'Making new estate properties more attractive to buyers.',
    story:
      'Mr. Hassan wanted his estate project to stand out in the competitive Lagos property market. Buyers were concerned about reliable power, so he partnered with Cesol3nergy. The team designed and installed a 20kVA Premium Solar Package across selected estate units, ensuring reliable and affordable power for residents. Feedback from prospective buyers was overwhelmingly positive, and sales improved significantly. Mr. Hassan says the installation didn\'t just boost demand — it added long-term value to his estate. He describes Cesol3nergy\'s professionalism and delivery as a true "game-changer" for developers.',
    options: [
      { name: '20kVA Premium Package' },
      { name: 'Estate Integration' },
      { name: 'Property Enhancement' }
    ],
    chosenOptionIndex: 2,
    websiteUrl: 'cesol3nergy.com',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=1600&auto=format&fit=crop',
        alt: 'Worker inspecting solar panel array',
      },
      {
        src: 'https://images.unsplash.com/photo-1581093588401-16ec7c49d4fa?q=80&w=1600&auto=format&fit=crop',
        alt: 'Solar roof on modern home',
      },
      {
        src: 'https://images.unsplash.com/photo-1603714228682-9b6b8f9eb5a0?q=80&w=1600&auto=format&fit=crop',
        alt: 'Sunset over solar installation',
      },
    ],
  },
];

export default function SuccessStories() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [optionNameIndex, setOptionNameIndex] = useState<number>(STORIES[0].chosenOptionIndex);

  const story = STORIES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + STORIES.length) % STORIES.length);
    setSelectedOptionIndex(null);
    // option index will be reset in useEffect based on chosenOptionIndex
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % STORIES.length);
    setSelectedOptionIndex(null);
    // option index will be reset in useEffect based on chosenOptionIndex
  };

  useEffect(() => {
    setOptionNameIndex(STORIES[activeIndex].chosenOptionIndex);
  }, [activeIndex]);

  const sectionLabelId = 'success-stories-heading';

  return (
    <section className='bg-background text-foreground py-20' aria-labelledby={sectionLabelId}>
      <div className='container mx-auto px-4'>
        {/* Tag */}
        <div className='text-center mb-6'>
          <div
            className='inline-block bg-green-100 text-green-700 text-sm px-3 py-1 font-bold rounded-full'
            aria-label='Section tag: Real Power Transformation'
          >
            Real Power Transformation
          </div>
        </div>

        {/* Heading */}
        <h2 id={sectionLabelId} className='text-3xl md:text-4xl font-bold text-center'>
          See How Businesses Shine Brighter with Cesol3nergy
        </h2>
        <p className='mt-4  text-center max-w-3xl mx-auto'>
          See how Nigerians like you are powering their lives with Cesol3nergy.
        </p>

        {/* Content Grid */}
        <div className='mt-12 grid md:grid-cols-2 gap-10 items-start' role='region' aria-live='polite'>
          {/* Left: Business Info */}
          <div>
            <h3 className='text-2xl font-bold'>{story.businessName}</h3>
            <p className='text-gray-400'>{story.personAndLocation}</p>
            <span className='inline-block mt-3  text-xs px-3 py-1 rounded-full' aria-label={`Business tag: ${story.tag}`}>
              {story.tag}
            </span>

            {/* Challenge Box */}
            <div className='mt-6 border border-l-4 border-l-orange-400 border-gray-700 rounded-lg p-4'>
              <p className='text-orange-400 font-semibold'>The Challenge</p>
              <p className=' mt-1'>
                {story.challenge}
              </p>
            </div>
            <div className='mt-6 border border-gray-700 rounded-lg p-4'>
              <p className=' font-semibold'>The Story </p>
              <p className=' mt-1'>
                {story.story}
              </p>
            </div>

            {/* Nav Arrows */}
            <div className='flex gap-3 mt-6'>
              <button
                type='button'
                className=' p-2 rounded-full hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent'
                onClick={handlePrev}
                aria-label='Previous success story'
              >
                <ChevronLeft className='w-5 h-5' />
              </button>
              <button
                type='button'
                className=' p-2 rounded-full hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent'
                onClick={handleNext}
                aria-label='Next success story'
              >
                <ChevronRight className='w-5 h-5' />
              </button>
            </div>
          </div>

          {/* Right: Design Response */}
          <div>
            <h4 className='font-semibold text-lg'>Our Solar Solution</h4>
            <p className=' text-sm'>
              We created three distinct solar package options. The client chose
              their preferred setup.
            </p>

            {/* Inline option switch (changes image) */}
            <div className='flex items-center gap-3 mt-4' aria-label='Selected solar package option'>
              <button
                type='button'
                className='p-2 rounded-full hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent'
                aria-label='Previous option'
                onClick={() => setOptionNameIndex((i) => (i - 1 + story.options.length) % story.options.length)}
              >
                <ChevronLeft className='w-4 h-4' />
              </button>
              <button
                type='button'
                className='text-sm font-medium min-w-[10rem] text-center px-3 py-1 rounded hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent'
                aria-label='Selected option name; click to change'
                onClick={() => setOptionNameIndex((i) => (i + 1) % story.options.length)}
              >
                {story.options[optionNameIndex].name}
              </button>
              <button
                type='button'
                className='p-2 rounded-full hover:bg-accent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent'
                aria-label='Next option'
                onClick={() => setOptionNameIndex((i) => (i + 1) % story.options.length)}
              >
                <ChevronRight className='w-4 h-4' />
              </button>
            </div>

            {/* Browser Frame */}
            <div className='mt-6 bg-gray-900 rounded-lg overflow-hidden border border-gray-700'>
              {/* Browser top bar */}
              <div className='flex items-center gap-2 px-4 py-2 bg-gray-800'>
                <span className='w-3 h-3 bg-red-500 rounded-full'></span>
                <span className='w-3 h-3 bg-yellow-500 rounded-full'></span>
                <span className='w-3 h-3 bg-green-500 rounded-full'></span>
                <span className='ml-4  text-xs truncate'>
                  {story.websiteUrl}
                </span>
              </div>

              {/* Scrollable Website Screenshot */}
              <div className='relative max-h-[420px] overflow-hidden'>
                <div className='relative h-[420px]'>
                  <Image
                    src={story.images[optionNameIndex]?.src}
                    alt={story.images[optionNameIndex]?.alt}
                    fill
                    sizes='(max-width: 768px) 100vw, 50vw'
                    className='object-cover'
                    priority
                  />
                </div>
                {/* Sticky bouncing Down Arrow Indicator */}
                <div className='sticky bottom-3 w-full flex justify-center' aria-hidden='true'>
                  <div className='bg-black/50 rounded-full p-2 animate-bounce'>
                    <ChevronDown className='w-5 h-5 text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
