import PricingCard from './pricing-card';

export default function PricingSection() {
  return (
    <section className='py-20  text-center'>
      <div className='mb-10'>
        <span className='bg-purple-700  px-4 py-1 rounded-full text-sm font-medium'>
          Choose your plan
        </span>
        <h2 className='text-3xl md:text-4xl font-bold mt-4'>
          From basic to premium, we have solar packages tailored to your lifestyle, budget, and energy needs
        </h2>
        <p className='text-gray-700 mt-2 max-w-2xl mx-auto'>
          Simply pick the plan that fits you best, and let us handle the rest.
        </p>
      </div>

      <div className='grid md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {/* Basic Solar Plan */}
        <PricingCard
          title='🌞 Basic Solar Plan'
          price='₦1.5M – ₦2.3M'
          description='Built For: Students, young professionals, and small families who want reliable power for essentials like lights, fans, TV, laptops, and phone charging.'
          features={[
            'Capacity: 1.5kVA – 2.5kVA',
            'Free energy audit',
            '1-year warranty',
            '1-month support',
            'Save on fuel, enjoy quiet reliable power',
            'Get up to 10% off when you book this month',
          ]}
          popular={false}
        />

        {/* Standard Solar Plan */}
        <PricingCard
          title='⚡ Standard Solar Plan'
          price='₦3.5M – ₦5M'
          description='Built For: Mid-sized families and small businesses who need steady power for home appliances, freezers, TVs, pumps, and office equipment.'
          features={[
            'Capacity: 3.5kVA – 5kVA',
            'Free installation check',
            '2-year warranty',
            'Priority after-sales support',
            'Lower energy bills, steady power for work and family life',
            'Get up to 15% off when you subscribe this month',
          ]}
          popular={true}
        />

        {/* Premium Solar Plan */}
        <PricingCard
          title='🚀 Premium Solar Plan'
          price='₦8M – ₦15M'
          description='Built For: Large homes, estates, and businesses that want round-the-clock power for ACs, multiple freezers, office tech, and advanced setups.'
          features={[
            'Capacity: 7.5kVA – 15kVA',
            'Free consultation',
            '5-year warranty',
            'Dedicated service manager',
            'Energy independence, long-term savings, higher property value',
            'Get up to 20% off when you secure your setup this month',
          ]}
          popular={false}
        />
      </div>
    </section>
  );
}
