'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

const PowerInAction = () => {
  const [activeTab, setActiveTab] = useState('basic');

  const tabs = [
    { id: 'basic', label: 'Basic', icon: '🌞' },
    { id: 'standard', label: 'Standard', icon: '⚡' },
    { id: 'premium', label: 'Premium', icon: '🚀' },
  ];

  const installations = {
    basic: [
      {
        title: '1.5kVA Home Setup',
        description: 'Perfect for small families and essential appliances',
        image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?q=80&w=1600&auto=format&fit=crop',
        features: ['Lights & Fans', 'TV & Laptop', 'Phone Charging', 'Small Appliances']
      },
      {
        title: '2.5kVA Student Setup',
        description: 'Ideal for students and young professionals',
        image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?q=80&w=1600&auto=format&fit=crop',
        features: ['Study Lights', 'Laptop Power', 'Fan & AC', 'Kitchen Essentials']
      }
    ],
    standard: [
      {
        title: '3.5kVA Family Setup',
        description: 'Comprehensive power for mid-sized families',
        image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1600&auto=format&fit=crop',
        features: ['Multiple ACs', 'Freezers', 'Washing Machine', 'Home Office']
      },
      {
        title: '5kVA Business Setup',
        description: 'Reliable power for small businesses',
        image: 'https://images.unsplash.com/photo-1505672678657-cc7037095e60?q=80&w=1600&auto=format&fit=crop',
        features: ['POS Systems', 'Refrigeration', 'Office Equipment', 'Security Systems']
      }
    ],
    premium: [
      {
        title: '7.5kVA Estate Setup',
        description: 'Premium power for large homes and estates',
        image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=1600&auto=format&fit=crop',
        features: ['Multiple Units', 'Central AC', 'Advanced Security', 'Smart Home Integration']
      },
      {
        title: '15kVA Commercial Setup',
        description: 'Industrial-grade power for large businesses',
        image: 'https://images.unsplash.com/photo-1581093588401-16ec7c49d4fa?q=80&w=1600&auto=format&fit=crop',
        features: ['Heavy Machinery', 'Multiple Floors', 'Data Centers', 'Manufacturing Equipment']
      }
    ]
  };

  return (
    <section className='py-20 bg-background text-foreground'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Power in Action: Real Setups, Real Results
          </h2>
          <p className='text-lg max-w-3xl mx-auto'>
            Explore our completed solar installations and products in action. See how Cesol3nergy is bringing reliable, affordable energy to homes, businesses, and estates across Nigeria.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className='flex justify-center mb-8'>
          <div className='flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1'>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-green-500 text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                <span className='mr-2'>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Installation Grid */}
        <div className='grid md:grid-cols-2 gap-8 max-w-6xl mx-auto'>
          {installations[activeTab as keyof typeof installations].map((installation, index) => (
            <div key={index} className='bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg'>
              <div className='h-48 bg-gray-200 dark:bg-gray-700 relative'>
                <img
                  src={installation.image}
                  alt={installation.title}
                  className='w-full h-full object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold mb-2'>{installation.title}</h3>
                <p className='text-gray-600 dark:text-gray-300 mb-4'>{installation.description}</p>
                <div className='space-y-2'>
                  {installation.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className='flex items-center text-sm'>
                      <span className='w-2 h-2 bg-green-500 rounded-full mr-3'></span>
                      {feature}
                    </div>
                  ))}
                </div>
                <Button className='w-full mt-4 bg-green-600 hover:bg-green-700'>
                  Get Quote for This Setup
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className='text-center mt-12'>
          <h3 className='text-2xl font-bold mb-4'>Ready to Go Solar?</h3>
          <p className='text-lg mb-6'>
            Pick a package, request a quote, and let's power your future together.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Button className='bg-green-600 hover:bg-green-700 px-8 py-3'>
              Start My Solar Journey
            </Button>
            <Button variant='outline' className='px-8 py-3'>
              WhatsApp Us: +2349066996674
            </Button>
          </div>
          <p className='text-sm text-gray-500 mt-4'>
            No upfront risk • Clear package pricing with no hidden costs • Once payment is confirmed, your solar setup is installed fast — within 2 days on selected packages.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PowerInAction; 