import { titleVariants } from '@/themes/tw';
import Link from 'next/link';

import { NavbarBrand } from './navbar-brand';

export const Navbar = () => {
  return (
    <aside className="flex items-center justify-between px-20 py-6">
      <NavbarBrand />
      <nav className="group flex items-center space-x-8">
        <Link href="/">
          <p className={titleVariants({ size: 'sm' })}>Trang chủ</p>
        </Link>
        <Link href="/dashboard">
          <p className={titleVariants({ size: 'sm' })}>Bảng điều khiển</p>
        </Link>
      </nav>
    </aside>
  );
};
