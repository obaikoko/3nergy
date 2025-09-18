import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  comingSoon?: boolean;
}

export default function PricingCard({
  title,
  price,
  description,
  features,
  popular,
  comingSoon,
}: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-6 border transition-all duration-300 
      ${
        popular
          ? 'border-purple-500 '
          : 'border-gray-700 bg-gray-700/60'
      } 
      ${comingSoon ? 'opacity-60' : ''}`}
    >
      {/* Badge */}
      {popular && (
        <span className='absolute -top-3 left-6 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium'>
          ⭐ Most Popular
        </span>
      )}
      {comingSoon && (
        <span className='absolute -top-3 left-6 bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium'>
          🚀 Coming Soon
        </span>
      )}

      {/* Title */}
      <h3 className='text-2xl font-bold mb-2'>{title}</h3>
      <p className='text-3xl font-extrabold text-purple-500'>{price}</p>
      <p className=' mt-2'>{description}</p>

      {/* Features */}
      <ul className='mt-6 space-y-3'>
        {features.map((feature, idx) => (
          <li key={idx} className='flex items-center '>
            <Check className='h-5 w-5 text-purple-500 mr-2' />
            {feature}
          </li>
        ))}
      </ul>
      <Button className='bg-purple-500 w-full mx-auto my-8 p-6' >Get Started Now</Button>
    </div>
  );
}
