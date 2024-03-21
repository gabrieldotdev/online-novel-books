import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { textVariants } from "@/themes/tw/cva";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const LogoBrand = () => {
	return (
		<Link href="/" className="mr-6 group flex items-center space-x-1">
			<Image
				src="/icon.svg"
				alt="Next.js Logo"
				width={30}
				height={30}
				style={{ width: "2rem", height: "2rem" }}
				className="relative drop-shadow-[0_0_0.3rem_#ffffff70] invert"
			/>
			<span
				className={cn(
					"hidden sm:inline-block group-hover:animate-jump",
					textVariants({ weight: "medium" }),
				)}
			>
				{siteConfig.name}
			</span>
		</Link>
	);
};
