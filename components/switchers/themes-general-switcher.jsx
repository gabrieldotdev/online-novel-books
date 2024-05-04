"use client";

import { useTheme } from "next-themes";

import { Icons } from "../icons";
import { Button } from "../primitives/button";

export function ThemesGeneralSwitcher({
	iconClassName = "mr-2 h-4 w-4",
	className,
	...props
}) {
	const { setTheme, theme } = useTheme();

	return (
		<Button
			variant="outlone"
			size="chip"
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			{...props}
		>
			<Icons.sun className="h-4 w-4 dark:hidden" />
			<Icons.moon className="h-4 w-4 hidden dark:block" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
