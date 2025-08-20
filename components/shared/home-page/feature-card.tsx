import { ReactNode } from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  clientFavorite?: boolean;
}

export default function FeatureCard({
  icon,
  title,
  description,
  clientFavorite = false,
}: FeatureCardProps) {
  return (
    <Card className='bg-[#0B132B] border border-green-900 rounded-xl shadow-md hover:shadow-lg transition p-6 flex flex-col justify-between'>
      <CardContent className='flex flex-col items-start gap-4'>
        <div className='bg-[#1C1F2E] p-3 rounded-lg'>{icon}</div>
        <h3 className='text-lg font-bold text-white'>{title}</h3>
        <p className='text-gray-300'>{description}</p>
        {clientFavorite && (
          <div className='mt-4 flex items-center gap-2 bg-green-900/60 text-green-400 px-3 py-1 rounded-full text-sm font-medium'>
            ⭐ Client Favorite
          </div>
        )}
      </CardContent>
    </Card>
  );
}
