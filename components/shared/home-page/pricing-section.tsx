import PricingCard from './pricing-card';

export default function PricingSection() {
  return (
    <section className='py-20  text-center'>
      <div className='mb-10'>
        <span className='bg-green-700  px-4 py-1 rounded-full text-sm font-medium'>
          Choose Your Plan
        </span>
        <h2 className='text-3xl md:text-4xl font-bold mt-4'>
          Stop Appearing Un-professional
        </h2>
        <p className='text-gray-700 mt-2 max-w-2xl mx-auto'>
          Your competitors are getting customers online while you&apos;re still
          waiting. Choose your plan and get ahead today!
        </p>
      </div>

      <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
        {/* Static Website */}
        <PricingCard
          title='Static Website'
          price='₦150,000'
          description='Stop losing customers to competitors with better websites'
          features={[
            'Look as professional as your biggest competitor',
            'Your own .com.ng domain that builds trust',
            'Never worry about hosting - we handle it for 1 year',
            'Customers can WhatsApp you directly from your site',
            'Looks perfect on every phone and tablet',
          ]}
          popular
        />

        {/* Dynamic Lite */}
        <PricingCard
          title='Dynamic Lite'
          price='₦250,000'
          description='Build deeper relationships with your customers online'
          features={[
            'Everything that makes you look professional',
            'Store customer info safely and securely',
            'Let customers create accounts and come back',
            'Manage everything from one simple dashboard',
            'Never lose a customer inquiry again',
          ]}
          comingSoon
        />
      </div>
    </section>
  );
}
