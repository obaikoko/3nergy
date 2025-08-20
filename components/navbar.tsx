import React from 'react';

export default function Navbar() {
  return (
    <nav className='bg-[#0A0F1C] text-white px-6 py-4 flex items-center justify-between'>
      {/* Logo */}
      <div className='flex items-center gap-2'>
        <img src='/logo.png' alt='AISites.ng' className='w-8 h-8' />
        <span className='text-lg font-bold'>
          <span className='text-green-500'>AISites</span>.ng
        </span>
      </div>

      {/* Links */}
      <ul className='hidden md:flex items-center gap-8 text-sm'>
        <li>Case Studies</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Why Us ▾</li>
        <li>Contact</li>
      </ul>

      {/* Actions */}
      <div className='flex items-center gap-4'>
        <button className='text-sm'>Sign In</button>
        <button className='bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded'>
          Get Started Now
        </button>
      </div>
    </nav>
  );
}
