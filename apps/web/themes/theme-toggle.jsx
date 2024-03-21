"use client";

import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ThemeToggle() {
	const { setTheme, theme } = useTheme();

	return (
		<div className="flex items-center gap-2">
			<button
				aria-label="Toggle Dark Mode"
				type="button"
				className="focus:outline-none"
				onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			>
				<Sun className="h-5 w-5 dark:hidden" />
				<Moon className="hidden h-5 w-5 dark:block" />
			</button>
			<button
				type="button"
				className={cn(
					"px-2 py-0.5 rounded-xl text-xs",
					"focus:outline-none ring-1 ring-muted-foreground",
					theme === "system" ? "drop-shadow-[0_0_0.3rem_#ffffff70]" : "",
					theme === "dark" ? "hover:drop-shadow-[0_0_0.3rem_#ffffff70]" : "",
				)}
				onClick={() => setTheme("system")}
			>
				Default
			</button>
		</div>
	);
}
