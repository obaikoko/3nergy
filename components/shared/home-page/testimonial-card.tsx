import { Card, CardContent } from '@/components/ui/card';

interface TestimonialCardProps {
  quote: string;
  name: string;
  business: string;
}

export default function TestimonialCard({
  quote,
  name,
  business,
}: TestimonialCardProps) {
  return (
    <Card className='border-0 text-white rounded-2xl shadow-lg p-4 h-full'>
      <CardContent>
        <p className='italic text-lg mb-4'>&quot;{quote}&quot;</p>
        <p className='font-bold'>— {name}</p>
        <p className='text-gray-400'>{business}</p>
      </CardContent>
    </Card>
  );
}
