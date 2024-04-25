"use client";

import Image from "next/image";
import { Categories } from "@/components/navigation/categories";
import { CommandSearch } from "@/components/navigation/command-search";
import { CreateNovel } from "@/components/navigation/create-novel";
import { ExtendNav } from "@/components/navigation/navs/extend-nav";
import { MainNav } from "@/components/navigation/navs/main-nav";
import { MobileNav } from "@/components/navigation/navs/mobile-nav";
import { Search } from "@/components/navigation/search";
import { UserMenu } from "@/components/navigation/user-menu";
import { Banner } from "@/components/visuals/banner";
import { LogoBrand } from "@/components/visuals/logo/logo-brand";
import { siteConfig } from "@/configs/app";
import { useSticky } from "@/hooks/use-sticky";

import { Navbar } from "../wrappers/nav/navbar";

const Header = ({ children }) => <header className="relative mx-auto w-full z-50">{children}</header>;

export function SiteHeader() {
  const { isSticky } = useSticky();
  return (
    <Header>
      <Navbar isSticky={isSticky}>
        <LogoBrand isSticky={isSticky} />
        <MainNav items={siteConfig.mainNav} isSticky={isSticky} />
        <MobileNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center  h-full space-x-3 justify-end">
          <Search />
          <CommandSearch />
          <ExtendNav items={siteConfig.extendNav} isSticky={isSticky} />
          <CreateNovel isSticky={isSticky} />
          <UserMenu isSticky={isSticky} />
        </div>
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
      <section className="relative h-[3rem]">
        <Categories />
      </section>
    </Header>
  );
}
