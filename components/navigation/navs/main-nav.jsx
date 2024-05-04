import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from "@/components/primitives/hover-card";
import { Link } from "@/components/primitives/link";
import { labelVariants } from "@/themes/twv";
import { cls } from "@/utils";
import React from "react";

import { ListItem } from "../_comps/list-item";

export function MainNav({ items, isSticky, color = "text-white" }) {
	return (
		<div className="flex items-center justify-between h-full space-x-2 md:justify-end">
			{items
				?.filter((navitem) => !navitem.external)
				.map((navItem) => (
					<HoverCard key={navItem.href}>
						<HoverCardTrigger asChild>
							<div className="group hidden md:flex flex-shrink-0 items-center h-full">
								<Link
									href={navItem.href}
									target="_blank"
									className={cls(
										"leading-[4rem] group-hover:animate-jump",
										labelVariants(),
										isSticky || color,
									)}
								>
									<span>{navItem.label}</span>
								</Link>
							</div>
						</HoverCardTrigger>
						{!!navItem.items?.length && (
							<HoverCardContent className="w-auto inline-block">
								<div className="grid grid-cols-2 gap-4 p-4">
									{navItem.items.map((item) => (
										<ListItem
											key={item.href}
											href={item.href}
											label={item.label}
										>
											{item.description}
										</ListItem>
									))}
								</div>
							</HoverCardContent>
						)}
					</HoverCard>
				))}
		</div>
	);
}
