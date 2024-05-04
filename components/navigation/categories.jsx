"use client";

import { Link } from "@/components/primitives/link";
import { Separator } from "@/components/primitives/separator";
import { Shell } from "@/components/wrappers/shell-variants";
import { allCategories, popularCategories } from "@/configs/other";
import { useResponsive } from "@/hooks/use-responsive";
import { buttonVariants, labelVariants } from "@/themes/twv";
import { cls } from "@/utils";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Icons } from "../icons";
import { Button } from "../primitives/button";

const FastLink = React.memo(({ href, children }) => (
	<Link href={href} variant="sm" target="_blank" className="group">
		<div
			className={cls("flex items-center gap-x-1", "group-hover:animate-jump")}
		>
			{children}
		</div>
	</Link>
));

export function Categories() {
	const pathname = usePathname();
	const { isListOpen, setIsListOpen, maxVisible, containerRef } = useResponsive(
		{
			initialMaxVisible: () => allCategories.length,
		},
	);
	const toggleCategories = () => setIsListOpen((prev) => !prev);
	const isActive = (href) => pathname === href;

	return (
		<Shell
			className={cls(
				"flex items-start py-2 md:py-2",
				isListOpen &&
					"absolute top-0 w-full left-1/2 transform -translate-x-1/2 rounded-br-xl rounded-bl-xl bg-white z-10",
			)}
		>
			<div
				className={cls(
					"flex space-x-2 flex-shrink-0",
					buttonVariants({ size: "sm" }),
				)}
				style={{ padding: "0" }}
			>
				{popularCategories.map((category) => (
					<FastLink key={category.label} href={category.href}>
						{category.icon}
						{category.label}
					</FastLink>
				))}
			</div>
			<div className="flex items-center w-full" ref={containerRef}>
				<Separator orientation="vertical" className="mx-2 h-3" />
				<div
					className={cls(
						"relative inline-flex flex-wrap items-center gap-2",
						isListOpen ? "" : "w-full overflow-hidden max-h-7",
					)}
				>
					{allCategories
						.slice(0, isListOpen ? allCategories.length : maxVisible)
						.map((category) => (
							<Link
								key={category.label}
								href={category.href}
								size="sm"
								className={cls(
									isActive(category.href)
										? "border border-dashed"
										: "bg-foreground/10 text-foreground hover:bg-foreground/15",
									labelVariants(),
								)}
							>
								{category.label}
							</Link>
						))}
				</div>
			</div>
			<Button size="chip" onClick={toggleCategories}>
				{isListOpen ? (
					<Icons.chevronUp size={16} />
				) : (
					<Icons.chevronDown size={16} />
				)}
			</Button>
		</Shell>
	);
}
