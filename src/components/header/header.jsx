import * as React from 'react';
import { Banner } from '@/components/banner';
import { HeaderBrand } from '@/components/header';
import { Navbar } from '@/components/navbar';

export const Header = () => {
  return (
    <header className="relative mx-auto min-h-52 w-full max-w-[2560px] text-white dark:text-white">
      <div className="absolute top-0 z-[1000] w-full">
        <Navbar />
      </div>
      <div className="relative z-0 h-auto max-h-52 w-full overflow-hidden">
        <Banner />
        <div className="absolute bottom-0 top-0 z-10 w-full">
          <HeaderBrand />
        </div>
      </div>
      <div className="mx-auto max-w-[2560px] px-20">{/* <Categories /> */}</div>
    </header>
  );
};
