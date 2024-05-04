"use client";

import { buttonVariants } from "@/themes/twv";
import { cn } from "@/utils";
import Link from "next/link";
import * as React from "react";

const ExtendedLink = React.forwardRef(
	({ className, variant, size, href, ...props }, ref) => {
		const variantClasses = buttonVariants({ variant, size });
		const linkHref = href ?? "/";

		return (
			<Link
				href={linkHref}
				className={cn("no-underline", variantClasses, className)}
				ref={ref}
				{...props}
			/>
		);
	},
);

export { ExtendedLink as Link };
