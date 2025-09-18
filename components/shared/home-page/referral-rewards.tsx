'use client';

import { Button } from '@/components/ui/button';
import { Gift, Users, TrendingUp } from 'lucide-react';

const ReferralRewards = () => {
  return (
    <section className='py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800'>
      <div className='container mx-auto px-4 text-center'>
        <div className='max-w-4xl mx-auto'>
          {/* Header */}
          <div className='mb-12'>
            <div className='inline-flex items-center gap-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4'>
              <Gift className='w-4 h-4' />
              <span>Coming Soon</span>
            </div>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Earn Rewards By Sharing Solar
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Our referral program is coming soon! Earn cash or service credits every time you refer someone who installs a solar system.
            </p>
          </div>

          {/* Features Grid */}
          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            <div className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg'>
              <div className='w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Gift className='w-6 h-6 text-purple-600 dark:text-purple-400' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Cash Rewards</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                Earn direct cash payments for every successful referral. The more you share, the more you earn.
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg'>
              <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                <Users className='w-6 h-6 text-blue-600 dark:text-blue-400' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Service Credits</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                Get credits toward your own solar maintenance, upgrades, or additional services.
              </p>
            </div>

            <div className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg'>
              <div className='w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4'>
                <TrendingUp className='w-6 h-6 text-purple-600 dark:text-purple-400' />
              </div>
              <h3 className='text-xl font-bold mb-2'>Growing Network</h3>
              <p className='text-gray-600 dark:text-gray-300'>
                Build your network while helping others access clean, reliable energy solutions.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className='mb-8'>
            <Button 
              className='bg-purple-600 hover:bg-purple-700 px-8 py-4 text-lg font-semibold'
              disabled
            >
              Notify Me When It Launches
            </Button>
          </div>

          {/* Additional Info */}
          <div className='bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg max-w-2xl mx-auto'>
            <h3 className='text-xl font-bold mb-3'>How It Will Work</h3>
            <div className='space-y-3 text-left'>
              <div className='flex items-start gap-3'>
                <span className='w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>1</span>
                <p className='text-gray-600 dark:text-gray-300'>Share your unique referral link with friends, family, or business contacts</p>
              </div>
              <div className='flex items-start gap-3'>
                <span className='w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>2</span>
                <p className='text-gray-600 dark:text-gray-300'>When they install a solar system through your link, you earn rewards</p>
              </div>
              <div className='flex items-start gap-3'>
                <span className='w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>3</span>
                <p className='text-gray-600 dark:text-gray-300'>Redeem your rewards for cash or use them for your own solar services</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferralRewards; 