import { cn } from '@/lib/utils';
import { titleVariants } from '@/themes/tw';
import Image from 'next/image';
import Link from 'next/link';

export const NavbarBrand = () => {
  return (
    <div className="group max-w-fit gap-3">
      <Link href={'/'} className="flex items-center justify-start gap-x-1">
        <div className="relative h-8 w-8">
          <Image
            className="drop-shadow-[0_0_0.3rem_#ffffff70] invert"
            style={{ width: 'auto', height: 'auto' }}
            src="/icon.svg"
            alt="logo"
            width={25}
            height={25}
            priority
          />
        </div>
        <span
          className={cn(
            'group-hover:animate-jump',
            titleVariants({ size: 'sm' }),
          )}
        >
          Nhà
        </span>
      </Link>
    </div>
  );
};
