import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { EllipsisVertical } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
const Menu = () => {
  return (
    <div className='bg-background text-foreground flex items-center'>
      {/* Desktop nav */}
      <nav className=' hidden md:flex items-center gap-2 flex-wrap'>
        <Button asChild variant='ghost'>
          <Link href='/#hero'>Home</Link>
        </Button>
        <Button asChild variant='ghost'>
          <Link href='/#success-stories'>Success Stories</Link>
        </Button>
        <Button asChild variant='ghost'>
          <Link href='/#power-in-action'>Power in Action</Link>
        </Button>
        <Button asChild variant='ghost'>
          <Link href='/#how-it-works'>How it Works</Link>
        </Button>
        <Button asChild variant='ghost'>
          <Link href='/#features'>Features</Link>
        </Button>
        <Button asChild variant='ghost'>
          <Link href='/#pricing'>Pricing</Link>
        </Button>
        <Button asChild variant='ghost'>
          <Link href='/#faq'>FAQ</Link>
        </Button>
        <Button asChild variant='ghost'>
          <Link href='/#contact'>Contact</Link>
        </Button>
      </nav>

      {/* Mobile nav */}
      <nav className='md:hidden'>
        <Sheet>
          <SheetTrigger className='align-middle'>
            <EllipsisVertical />
          </SheetTrigger>
          <SheetContent className='flex flex-col items-start space-y-2 pt-6'>
            <SheetTitle>Menu</SheetTitle>
            <Button asChild variant='ghost'>
              <Link href='/#hero'>Home</Link>
            </Button>
            <Button asChild variant='ghost'>
              <Link href='/#success-stories'>Success Stories</Link>
            </Button>
            <Button asChild variant='ghost'>
              <Link href='/#power-in-action'>Power in Action</Link>
            </Button>
            <Button asChild variant='ghost'>
              <Link href='/#how-it-works'>How it Works</Link>
            </Button>
            <Button asChild variant='ghost'>
              <Link href='/#features'>Features</Link>
            </Button>
            <Button asChild variant='ghost'>
              <Link href='/#pricing'>Pricing</Link>
            </Button>
            <Button asChild variant='ghost'>
              <Link href='/#faq'>FAQ</Link>
            </Button>
            <Button asChild variant='ghost'>
              <Link href='/#contact'>Contact</Link>
            </Button>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;