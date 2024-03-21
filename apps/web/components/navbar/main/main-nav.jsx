"use client";

import { usePathname } from "next/navigation";
import * as React from "react";

import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/ui/hover-card";
import { siteNavigation } from "@/config/site-nav";
import { cn } from "@/lib/utils";
import { textVariants } from "@/themes/tw/cva";
import Link from "next/link";
import { ListItem } from "../_components/list-item";
import { LogoBrand } from "../_components/logo-brand";

export const Navbar = ({ children }) => {
	return <nav className="flex items-center gap-3">{children}</nav>;
};

export const MainNav = () => {
	const pathname = usePathname();

	return (
		<div className="mr-4 hidden md:flex items-center h-full">
			<LogoBrand />
			<Navbar>
				{siteNavigation.mainNav
					.filter((navitem) => !navitem.external)
					.map((navItem) => (
						<HoverCard key={navItem.href}>
							<HoverCardTrigger asChild>
								<div className="group flex items-center">
									<Link
										href={navItem.href}
										className={cn(
											"leading-[4rem]",
											"group-hover:animate-jump hover:drop-shadow-[0_0_0.3rem_#ffffff70]",
											textVariants({ weight: "medium" }),
											pathname === navItem.href
												? "drop-shadow-[0_0_0.3rem_#ffffff70]"
												: "text-white",
										)}
									>
										<span>{navItem.title}</span>
									</Link>
								</div>
							</HoverCardTrigger>
							{!!navItem.items?.length && (
								<HoverCardContent className="w-auto inline-block">
									<div className="grid grid-cols-2 gap-4 p-4">
										{navItem.items.map((item) => (
											<ListItem
												key={item.href}
												title={item.title}
												href={item.href}
											>
												{item.description}??
											</ListItem>
										))}
									</div>
								</HoverCardContent>
							)}
						</HoverCard>
					))}
			</Navbar>
		</div>
	);
};
