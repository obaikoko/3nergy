// components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='bg-[#0C1220] text-white'>
      {/* Top section */}
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6 border-b border-gray-800'>
        {/* Left Logo */}
        <div className='flex items-center space-x-2'>
          <Image
            src='/logo.png' // replace with your logo path
            alt='AISites Logo'
            width={40}
            height={40}
          />
          <span className='text-lg font-bold'>AISites.ng</span>
        </div>

        {/* Center Links */}
        <div className='flex space-x-6 mt-3 md:mt-0 text-sm'>
          <Link href='/contact' className='hover:text-gray-300'>
            Contact
          </Link>
          <Link href='/terms' className='hover:text-gray-300'>
            Terms
          </Link>
          <Link href='/privacy' className='hover:text-gray-300'>
            Privacy
          </Link>
        </div>

        {/* Right Text */}
        <div className='mt-3 md:mt-0 text-sm text-gray-300'>
          Starting from <span className='line-through'>₦150,000</span> • Max 2
          Days
        </div>
      </div>

      {/* Bottom section */}
      <div className='py-3 px-6 text-center text-gray-400 text-sm'>
        © {new Date().getFullYear()} AISites.ng. AI-accelerated Nigerian
        websites.
      </div>
    </footer>
  );
}
