// components/Footer.tsx
import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className='bg-[#0C1220] text-white'>
      {/* Top section */}
      <div className='container mx-auto flex flex-col md:flex-row items-center justify-between py-4 px-6 border-b border-gray-800'>
        {/* Left Logo */}
        <div className='flex items-center space-x-2'>
          <span className='text-lg font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent'>
            {APP_NAME}
          </span>
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
          WhatsApp: +2349066996674 • Solar Solutions
        </div>
      </div>

      {/* Bottom section */}
      <div className='py-3 px-6 text-center text-gray-400 text-sm'>
        © {new Date().getFullYear()} {APP_NAME}. Solar energy solutions for homes and businesses across Africa.
      </div>
    </footer>
  );
}
