import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/lib/constants';
import Menu from '@/components/shared/header/menu';
import ModeToggle from './shared/header/mode-toggle';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-background text-foreground'>
      <div className='mx-auto max-w-screen-xl px-4 flex justify-between items-center py-2'>
        <Link href='/' className='flex items-center space-x-2'>
          <Image
            src='/images/logo.png'
            alt={`${APP_NAME} logo`}
            width={48}
            height={48}
            priority
          />
        </Link>
        <ModeToggle />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
