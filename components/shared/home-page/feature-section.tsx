import { DollarSign, Clock, Zap } from 'lucide-react';
import FeatureCard from './feature-card';

export default function FeaturesSection() {
  return (
    <section className=' py-16 px-6 text-center'>
      <h2 className='text-3xl md:text-4xl font-bold '>
        Everything You Need to Feel Confident Online
      </h2>
      <p className=' mt-3 max-w-2xl mx-auto'>
        Stop hiding from potential customers. Get everything you need to
        showcase your business with pride – starting at just ₦150,000
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
