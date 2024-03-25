"use client";

import * as React from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { Banner } from "@/islands/effect-banner/banner";
import { MainNav } from "@/islands/navigation/main-nav";
import { cls } from "@/utils";

export function SiteHeader() {
  const [isSticky, setIsSticky] = React.useState(false);
  const [lastScrollTop, setLastScrollTop] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollTop && currentScrollY > 0) {
        setIsSticky(true);
      } else if (currentScrollY > lastScrollTop || currentScrollY === 0) {
        setIsSticky(false);
      }
      setLastScrollTop(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <header className="z-50 relative mx-auto min-h-52 w-full max-w-[2560px]">
      <div
        className={cls(
          "absolute flex h-[4rem] px-6 w-full items-center top-0 z-[1000] text-white",
          "duration-100 transition-all",
          isSticky ? "fixed bg-background inset-0 animate-slideInDown" : "",
        )}
      >
        <MainNav items={siteConfig.mainNav} />
        {/* <MobileNav mainNavItems={siteConfig.mainNav} /> */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            {/* <CommandSearch /> */}
            <h1 className="hover:animate-jump">CommandSearch</h1>
          </div>
          <h1>{siteConfig.name}</h1>
        </div>
      </div>
      <div className="relative z-0 h-44 max-h-44 w-full overflow-hidden">
        <Banner />
        <div className="absolute bottom-0 top-0 z-10 w-full">
          <div className="px-20 flex h-full items-end justify-between">
            <Image
              className="relative mb-6 drop-shadow-[0_0_0.3rem_#ffffff70] invert"
              src="/logo.svg"
              alt="Next.js Logo"
              width={200}
              height={100}
              priority
            />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[2560px] px-20">Categories</div>
    </header>
  );
}
