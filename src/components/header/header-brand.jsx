import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const HeaderBrand = () => {
  return (
    <Link
      href={'/'}
      className="group mx-20 flex h-full w-52 items-end justify-between"
    >
      <Image
        className="relative mb-6 drop-shadow-[0_0_0.3rem_#ffffff70] invert"
        style={{ width: 'auto', height: 'auto' }}
        src="/logo.svg"
        alt="Next.js Logo"
        width={300}
        height={100}
        priority
      />
    </Link>
  );
};
