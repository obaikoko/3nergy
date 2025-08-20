const HowItWork = () => {
  return (
    <section className='px-8 py-16 text-center'>
      <div className='mb-4'>
        <span className='bg-blue-700 text-white px-3 py-1 rounded-full text-sm'>
          How It Works
        </span>
      </div>
      <h2 className='text-3xl font-bold mb-2'>How It Actually Works</h2>
      <p className='text-gray-300 max-w-xl mx-auto mb-12'>
        Our risk-free process means you only pay if you love what we create for
        you
      </p>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
        <div className='bg-[#111827] p-6 rounded-lg text-center'>
          <div className='bg-green-900 p-4 rounded-full w-12 h-12 mx-auto mb-4'>
            📄
          </div>
          <h3 className='font-bold mb-2'>1. Tell Us About Your Business</h3>
          <p className='text-gray-400 text-sm'>
            Fill out our simple form with your business details, goals, and what
            makes you unique. This takes just 5 minutes.
          </p>
        </div>

        <div className='bg-[#111827] p-6 rounded-lg text-center'>
          <div className='bg-green-900 p-4 rounded-full w-12 h-12 mx-auto mb-4'>
            🎨
          </div>
          <h3 className='font-bold mb-2'>2. We Create 3 Options for You</h3>
          <p className='text-gray-400 text-sm'>
            Our team builds 3 different professional website designs based on
            your information. You'll see all your options within 2 days.
          </p>
        </div>

        <div className='bg-[#111827] p-6 rounded-lg text-center'>
          <div className='bg-green-900 p-4 rounded-full w-12 h-12 mx-auto mb-4'>
            💚
          </div>
          <h3 className='font-bold mb-2'>3. Choose Your Favorite</h3>
          <p className='text-gray-400 text-sm'>
            Review all 3 designs and pick the one you love most. If none feel
            right, you don't pay anything - no risk to you.
          </p>
        </div>

        <div className='bg-[#111827] p-6 rounded-lg text-center'>
          <div className='bg-green-900 p-4 rounded-full w-12 h-12 mx-auto mb-4'>
            🚀
          </div>
          <h3 className='font-bold mb-2'>4. Pay & Go Live</h3>
          <p className='text-gray-400 text-sm'>
            Once you choose your favorite design, complete payment and we'll
            deploy your website immediately. You're live in minutes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWork;
