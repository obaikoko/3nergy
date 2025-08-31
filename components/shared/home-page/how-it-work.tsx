const HowItWork = () => {
  return (
    <section className=' bg-background text-foreground px-8 py-16 text-center'>
      <div className='mb-4'>
        <span className='bg-green-700 text-white px-3 py-1 rounded-full text-sm'>
          How it works
        </span>
      </div>
      <h2 className='text-3xl font-bold mb-2'>How it actually works</h2>
      <p className='text-gray-300 max-w-xl mx-auto mb-12'>
        Transparent pricing, no hidden costs. Once your payment is confirmed, Cesol3nergy delivers and installs your solar setup quickly — within 2 days on selected packages.
      </p>

      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6'>
        <div className=' p-6 rounded-lg text-center'>
          <div className='bg-green-400 p-4 rounded-full w-12 h-12 mx-auto mb-4'>
            1
          </div>
          <h3 className='font-bold mb-2'>Select Your Preferred Package</h3>
          <p className=' text-sm'>
            Browse our Standard & Premium Solar Packages to find the setup size that best matches your lifestyle or business needs. Whether it&apos;s a basic backup or full energy independence, there&apos;s a package for you.
          </p>
        </div>

        <div className=' p-6 rounded-lg text-center'>
          <div className='bg-green-400 p-4 rounded-full w-12 h-12 mx-auto mb-4'>
            2
          </div>
          <h3 className='font-bold mb-2'>Tell Us What You&apos;re Powering</h3>
          <p className=' text-sm'>
            Share a quick list of your key appliances or equipment. This helps us ensure your chosen package is properly sized to handle your loads efficiently, avoiding underperformance or overspending.
          </p>
        </div>

        <div className=' p-6 rounded-lg text-center'>
          <div className='bg-green-400 p-4 rounded-full w-12 h-12 mx-auto mb-4'>
            3
          </div>
          <h3 className='font-bold mb-2'>Get Two Tailored Quotes</h3>
          <p className=' text-sm'>
            Our experts will provide you with two solar setup options — one closely aligned with your needs and another with added flexibility. Both quotes are transparent, clear, and designed to give you peace of mind.
          </p>
        </div>

        <div className=' p-6 rounded-lg text-center'>
          <div className='bg-green-400 p-4 rounded-full w-12 h-12 mx-auto mb-4'>
            4
          </div>
          <h3 className='font-bold mb-2'>Choose Your Favorite</h3>
          <p className=' text-sm'>
            Select the option that works best for your budget and goals. No pressure, just the confidence of knowing you&apos;re making the right investment.
          </p>
        </div>

        <div className=' p-6 rounded-lg text-center'>
          <div className='bg-green-400 p-4 rounded-full w-12 h-12 mx-auto mb-4'>
            5
          </div>
          <h3 className='font-bold mb-2'>Pay & Get Installed</h3>
          <p className=' text-sm'>
            Once confirmed, our certified engineers handle delivery, installation, and testing. You&apos;ll be guided every step of the way, with most setups completed in just a few days.
          </p>
        </div>

        <div className=' p-6 rounded-lg text-center'>
          <div className='bg-green-400 p-4 rounded-full w-12 h-12 mx-auto mb-4'>
            6
          </div>
          <h3 className='font-bold mb-2'>Enjoy Solar Freedom</h3>
          <p className=' text-sm'>
            Say goodbye to noisy generators and fuel stress. From day one, you&apos;ll enjoy reliable, clean, and cost-saving energy — with our support team always a call away.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
