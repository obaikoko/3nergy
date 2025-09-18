import { BookOpen, Globe, TrendingUp, Users, Clock, Zap } from 'lucide-react';
import FeatureCard from './feature-card';
import { Button } from '@/components/ui/button';

export default function FeatureTwo() {
  return (
    <section className=' py-16 px-6 text-center'>
      <h2 className='text-3xl md:text-4xl font-bold '>
        Learn & Grow with Solar
      </h2>
      <p className='text-xl text-gray-600 mt-3 max-w-2xl mx-auto'>
        Want to start a career in solar? Through our partnership with SolarSpark Academy, we connect aspiring engineers and installers with world-class training.
      </p>

      <div className='mt-8 mb-8'>
        <Button className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg'>
          Register for SolarSpark Training
        </Button>
      </div>

      <div className='mt-12 grid md:grid-cols-3 gap-6 max-w-6xl mx-auto'>
        <FeatureCard
          icon={<BookOpen className='w-6 h-6 text-purple-500' />}
          title='Hands-On Training'
          description='Learn by doing, not just theory. Gain practical skills that prepare you for real-world solar installations.'
          clientFavorite
        />
        <FeatureCard
          icon={<Globe className='w-6 h-6 text-purple-500' />}
          title='Globally Recognized Curriculum'
          description='Access world-class solar training that meets international standards and keeps you competitive anywhere.'
        />
        <FeatureCard
          icon={<TrendingUp className='w-6 h-6 text-purple-500' />}
          title='High Earning Potential'
          description='Solar is one of the fastest-growing industries. With the right skills, you can start a profitable career or business.'
          clientFavorite
        />
        <FeatureCard
          icon={<Users className='w-6 h-6 text-purple-500' />}
          title='Job & Partnership Opportunities'
          description='Through Cesol3nergy&apos;s network, graduates can connect with projects, jobs, and business opportunities in the solar sector.'
        />
        <FeatureCard
          icon={<Clock className='w-6 h-6 text-purple-500' />}
          title='Flexible Learning'
          description='Training options are designed to fit your schedule, whether you&apos;re a student, working professional, or entrepreneur.'
        />
        <FeatureCard
          icon={<Zap className='w-6 h-6 text-purple-500' />}
          title='Be Part of the Energy Future'
          description='Join the movement driving Nigeria and Africa toward cleaner, more reliable, and sustainable power.'
          clientFavorite
        />
      </div>
    </section>
  );
}
