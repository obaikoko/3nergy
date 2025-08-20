import { DollarSign, Clock, Zap } from 'lucide-react';
import FeatureCard from './feature-card';

export default function FeatureTwo() {
  return (
    <section className='bg-[#0B132B] py-16 px-6 text-center'>
      <h2 className='text-3xl md:text-4xl font-bold text-white'>
        Why Nigerian Businesses Choose Us
      </h2>
      <p className='text-xl text-gray-300 mt-3 max-w-2xl mx-auto'>
        We're not just another website builder. We're your local partner in
        digital success with a smarter approach.
      </p>

      <div className='mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        <FeatureCard
          icon={<DollarSign className='w-6 h-6 text-green-500' />}
          title='Never Stress About Tech Stuff'
          description='Keep easy knowing we handle everything – hosting, security, updates. You focus on your customers, we keep you online 24/7.'
          clientFavorite
        />
        <FeatureCard
          icon={<Clock className='w-6 h-6 text-green-500' />}
          title='Get Online Fast (No More Waiting!)'
          description='Your website goes live in just 2 days. Stop losing customers to competitors while you wait months for other developers.'
        />
        <FeatureCard
          icon={<Zap className='w-6 h-6 text-green-500' />}
          title='Pick Your Perfect Look'
          description="Get 3 custom designs made just for YOU. Choose the one that makes you say 'Yes, this is exactly my business!'"
          clientFavorite
        />
      </div>
    </section>
  );
}
