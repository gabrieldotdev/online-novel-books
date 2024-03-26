"use client";

import * as React from "react";
import Image from "next/image";
import { settings } from "@/config/app";
import { siteConfig } from "@/config/site";
import { Banner } from "@/islands/effect-banner/banner";
import { ExtraNav, MainNav } from "@/islands/navigation/main-nav";
import { ThemesGeneralSwitcher } from "@/islands/switchers/themes-general-switcher";
import { cls } from "@/utils";

import CommandSearch from "./command-search";

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
      <nav
        className={cls(
          "absolute flex px-6 w-full h-[3rem] items-center top-0 z-[1000]",
          isSticky
            ? "fixed bg-background text-foreground inset-0 animate-slideInDown"
            : "text-white",
        )}
      >
        <MainNav items={siteConfig.mainNav} isSticky={isSticky} />
        {/* <MobileNav mainNavItems={siteConfig.mainNav} /> */}
        <div className="flex flex-1 items-center justify-between h-full space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandSearch isSticky={isSticky} />
          </div>
          <ExtraNav items={siteConfig.extraNav} isSticky={isSticky} />
        </div>
        {/* {settings.themeToggleEnabled && <ThemesGeneralSwitcher />} */}
      </nav>
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
