import { DollarSign, Clock, Zap, Shield, Users, TrendingUp } from 'lucide-react';
import FeatureCard from './feature-card';

export default function FeaturesSection() {
  return (
    <section className=' py-16 px-6 text-center'>
      <h2 className='text-3xl md:text-4xl font-bold '>
        🌟 Why Choose Cesol3nergy?
      </h2>
      <p className=' mt-3 max-w-2xl mx-auto'>
        Because powering your life should be simple, reliable, and stress-free. Here's why homes and businesses trust us.
      </p>

      <div className='mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        <FeatureCard
          icon={<Zap className='w-6 h-6 text-green-500' />}
          title='Tailored Solar Packages'
          description='Solutions built to match your exact energy needs and budget.'
          clientFavorite
        />
        <FeatureCard
          icon={<Shield className='w-6 h-6 text-green-500' />}
          title='Expert Installation'
          description='Certified engineers who ensure safe, clean, and professional setups.'
        />
        <FeatureCard
          icon={<Clock className='w-6 h-6 text-green-500' />}
          title='Fast Turnaround'
          description='Enjoy solar within days, not weeks.'
          clientFavorite
        />
        <FeatureCard
          icon={<Users className='w-6 h-6 text-green-500' />}
          title='After-Sales Support'
          description='Ongoing service and maintenance so your system always runs smoothly.'
        />
        <FeatureCard
          icon={<TrendingUp className='w-6 h-6 text-green-500' />}
          title='Trusted Partnerships'
          description='We work with top solar brands for durability and performance.'
        />
        <FeatureCard
          icon={<DollarSign className='w-6 h-6 text-green-500' />}
          title='Value & Savings'
          description='Cut down fuel costs and enjoy long-term returns on your investment.'
          clientFavorite
        />
      </div>
    </section>
  );
}
