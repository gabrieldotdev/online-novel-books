import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { Banner } from "@/components/banner";
import { MainNav, Navbar } from "@/components/navbar/main/main-nav";
import { siteNavigation } from "@/config/site-nav";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/themes/theme-toggle";

import { NavItem } from "@/components/navbar/_components/nav-item";
import { CommandSearch } from "@/components/search/command-search";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export const SiteHeader = () => {
  return (
    <header className="z-50 relative mx-auto min-h-52 w-full max-w-[2560px]">
      <div className="absolute flex h-[4rem] px-6 w-full items-center top-0 z-[1000] text-white">
        <MainNav />
        {/* <MobileNav /> */}
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandSearch />
          </div>
          <Navbar>
            {siteNavigation.mainNav
              .filter((navitem) => navitem.external)
              .map((navItem) => (
                <HoverCard key={navItem.href}>
                  <HoverCardTrigger asChild>
                    <Link
                      href={navItem.href}
                      className={cn(
                        "group leading-[4rem]",
                        "hover:drop-shadow-[0_0_0.3rem_#ffffff70]"
                      )}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span className="group-hover:animate-jump text-[0.9rem]">
                          {navItem.icon}
                        </span>
                        <span className="text-xs hidden xl:block">
                          {navItem.title}
                        </span>
                      </div>
                    </Link>
                  </HoverCardTrigger>
                  {!!navItem.items?.length && (
                    <HoverCardContent className="mt-4 w-auto inline-block">
                      <div className="grid grid-cols-2 gap-4 p-4">
                        {navItem.items.map((item) => (
                          <NavItem
                            key={item.href}
                            title={item.title}
                            href={item.href}
                          >
                            {item.description}
                          </NavItem>
                        ))}
                      </div>
                    </HoverCardContent>
                  )}
                </HoverCard>
              ))}
            <ThemeToggle />
          </Navbar>
        </div>
      </div>
      <div className="relative z-0 h-40 max-h-40 w-full overflow-hidden">
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
};
