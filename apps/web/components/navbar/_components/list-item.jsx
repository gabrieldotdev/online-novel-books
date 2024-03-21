import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";

export const ListItem = React.forwardRef(
	({ className, title, children, ...props }, ref) => {
		return (
			<Link
				ref={ref}
				className={cn(
					"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
					className,
				)}
				{...props}
			>
				<div className="text-sm font-medium leading-none">{title}</div>
				<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
					{children}
				</p>
			</Link>
		);
	},
);
