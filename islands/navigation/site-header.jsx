"use client";

import * as React from "react";
import Image from "next/image";
import { useSticky } from "@/hooks/useSticky";
import { Header, Navbar, NavbarContent } from "@/islands/wrappers/wps-header";
import { settings, siteConfig } from "@/settings/app";

import { ThemesGeneralSwitcher } from "../switchers/themes-general-switcher";
import { Banner } from "../visuals/banner";
import { Categories } from "./categories";
import { ExtraNav } from "./extra-nav";
import { MainNav } from "./main-nav";
import UserMenu from "./user-menu";

export function SiteHeader() {
  const { isSticky } = useSticky();

  return (
    <Header>
      <Navbar isSticky={isSticky}>
        <MainNav items={siteConfig.mainNav} isSticky={isSticky} />
        {/* <MobileNav mainNavItems={siteConfig.mainNav} isSticky={isSticky} /> */}
        <NavbarContent className="flex flex-1 items-center justify-between h-full space-x-4 md:justify-end">
          {settings.themeToggleEnabled && <ThemesGeneralSwitcher />}
          <div className="w-full flex-1 md:w-auto md:flex-none">{/* <CommandSearch isSticky={isSticky} /> */}</div>
          <ExtraNav items={siteConfig.extraNav} isSticky={isSticky} />
          <UserMenu isSticky={isSticky} />
        </NavbarContent>
      </Navbar>
      <div className="relative z-0 h-[12rem] max-h-[12rem] w-full overflow-hidden">
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
      <Categories />
    </Header>
  );
}
