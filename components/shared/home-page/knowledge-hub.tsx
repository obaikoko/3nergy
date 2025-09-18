'use client';

import { Button } from '@/components/ui/button';

const KnowledgeHub = () => {
  const articles = [
    {
      icon: '💡',
      category: 'Tips',
      title: '5 Ways to Maximize Your Solar Investment',
      excerpt: 'Learn how to get the most out of your solar system and maximize your energy savings.',
      readTime: '3 min read'
    },
    {
      icon: '⚙️',
      category: 'Technology',
      title: 'Understanding Solar Panel Efficiency',
      excerpt: 'Everything you need to know about solar panel efficiency and what affects performance.',
      readTime: '5 min read'
    },
    {
      icon: '📊',
      category: 'Savings',
      title: 'Calculate Your Solar ROI',
      excerpt: 'Use our simple calculator to see how much you can save with solar energy.',
      readTime: '4 min read'
    }
  ];

  return (
    <section className='py-20 bg-gray-50 dark:bg-gray-900'>
      <div className='container mx-auto px-4'>
        <div className='max-w-6xl mx-auto'>
          {/* Header */}
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4'>
              Stay Informed. Stay Empowered.
            </h2>
            <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Solar tips, energy hacks, and industry news — so you always stay ahead.
            </p>
          </div>

          {/* Articles Grid */}
          <div className='grid md:grid-cols-3 gap-8 mb-12'>
            {articles.map((article, index) => (
              <div key={index} className='bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
                <div className='p-6'>
                  <div className='flex items-center gap-2 mb-3'>
                    <span className='text-2xl'>{article.icon}</span>
                    <span className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                      {article.category}
                    </span>
                  </div>
                  <h3 className='text-xl font-bold mb-3 line-clamp-2'>
                    {article.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300 mb-4 line-clamp-3'>
                    {article.excerpt}
                  </p>
                  <div className='flex items-center justify-between'>
                    <span className='text-sm text-gray-500 dark:text-gray-400'>
                      {article.readTime}
                    </span>
                    <Button variant='ghost' className='text-purple-600 hover:text-purple-700 p-0 h-auto'>
                      Read More →
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className='text-center'>
            <Button className='bg-purple-600 hover:bg-purple-700 px-8 py-3 text-lg'>
              Read Updates
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className='mt-16 bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg max-w-2xl mx-auto'>
            <div className='text-center'>
              <h3 className='text-2xl font-bold mb-3'>Get Solar Insights Delivered</h3>
              <p className='text-gray-600 dark:text-gray-300 mb-6'>
                Subscribe to our newsletter for the latest solar tips, industry updates, and exclusive offers.
              </p>
              <div className='flex flex-col sm:flex-row gap-3 max-w-md mx-auto'>
                <input
                  type='email'
                  placeholder='Enter your email'
                  className='flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white'
                />
                <Button className='bg-purple-600 hover:bg-purple-700 px-6 py-3 whitespace-nowrap'>
                  Subscribe
                </Button>
              </div>
              <p className='text-xs text-gray-500 dark:text-gray-400 mt-3'>
                No spam, unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHub; 