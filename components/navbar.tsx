import Link from 'next/link';
import { APP_NAME } from '@/lib/constants';
import Menu from '@/components/shared/header/menu';
import ModeToggle from './shared/header/mode-toggle';

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-background text-foreground'>
      <div className='mx-auto max-w-screen-xl px-4 flex justify-between items-center py-2'>
        <Link href='/' className='flex items-center space-x-2'>
          <span className='text-2xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>
            {APP_NAME}
          </span>
        </Link>
        <ModeToggle />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
