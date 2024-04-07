"use client";

import * as React from "react";
import Image from "next/image";
import CommandSearch from "@/islands/navigation/command-search";
import { ExtraNav, MainNav } from "@/islands/navigation/main-nav";
import UserMenu from "@/islands/navigation/user-menu";
import { ThemesGeneralSwitcher } from "@/islands/switchers/themes-general-switcher";
import { Banner } from "@/islands/visuals/banner";
import { Boundary } from "@/islands/wrappers/boundary";
import { Header, Navbar } from "@/islands/wrappers/navbar-shell";
import { settings, siteConfig } from "@/settings/app";

import { Categories } from "./categories";

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <Header>
      <Navbar isSticky={isSticky}>
        <MainNav items={siteConfig.mainNav} isSticky={isSticky} />
        {/* <MobileNav mainNavItems={siteConfig.mainNav} isSticky={isSticky} /> */}
        <div className="flex flex-1 items-center justify-between h-full space-x-2 md:justify-end">
          {settings.themeToggleEnabled && <ThemesGeneralSwitcher />}
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandSearch isSticky={isSticky} />
          </div>
          <UserMenu isSticky={isSticky} />
          <ExtraNav items={siteConfig.extraNav} isSticky={isSticky} />
        </div>
      </Navbar>
      <div className="relative z-0 h-36 max-h-36 w-full overflow-hidden">
        <Banner />
        <div className="absolute bottom-0 top-0 z-10 w-full">
          <div className="px-20 flex h-full items-end justify-between">
            <Image
              className="relative mb-6 drop-shadow-[0_0_0.3rem_#ffffff70] invert"
              style={{ width: "180px", height: "auto" }}
              src="/logo.svg"
              alt="Next.js Logo"
              width={180}
              height={100}
              priority
            />
          </div>
        </div>
      </div>
      <Boundary>
        <Categories />
      </Boundary>
    </Header>
  );
}
