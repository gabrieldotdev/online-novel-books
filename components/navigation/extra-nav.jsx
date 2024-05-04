"use client";

import { siteConfig } from "@/configs/app";
import { useSticky } from "@/hooks/use-sticky";

import { LogoBrand } from "../visuals/logo/logo-brand";
import { Navbar } from "../wrappers/nav/navbar";
import { CommandSearch } from "./command-search";
import { CreateNovel } from "./create-novel";
import { ExtendNav } from "./navs/extend-nav";
import { MainNav } from "./navs/main-nav";
import { MobileNav } from "./navs/mobile-nav";
import { Search } from "./search";
import { UserMenu } from "./user-menu";

export function ExtraNav() {
	const { isSticky } = useSticky();
	return (
		<div className="h-[3.5rem] w-full">
			<Navbar
				isSticky={isSticky}
				className={isSticky ? "" : "border-b border-input"}
			>
				<LogoBrand isSticky={isSticky} color="dark:invert" />
				<MainNav
					items={siteConfig.mainNav}
					isSticky={isSticky}
					color="text-foreground/80"
				/>
				<MobileNav items={siteConfig.mainNav} />
				<div className="flex flex-1 items-center  h-full space-x-3 justify-end">
					<Search />
					<CommandSearch />
					<ExtendNav
						items={siteConfig.extendNav}
						isSticky={isSticky}
						color="text-foreground/80"
					/>
					<CreateNovel
						isSticky={isSticky}
						color="text-black/80 border-black/20"
					/>
					<UserMenu isSticky={isSticky} color="text-foreground/80" />
				</div>
			</Navbar>
		</div>
	);
}
