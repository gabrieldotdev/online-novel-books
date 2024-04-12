"use client";

import { Icons } from "@/islands/icons";
import { Button } from "@/islands/primitives/button";
import { useTheme } from "next-themes";

export function ThemesGeneralSwitcher({ iconClassName = "mr-2 h-4 w-4", className, ...props }) {
  const { setTheme, theme } = useTheme();

  return (
    <Button variant="none" size="chip" onClick={() => setTheme(theme === "light" ? "dark" : "light")} {...props}>
      <Icons.sun className="h-4 w-4 dark:hidden" />
      <Icons.moon className="h-4 w-4 hidden dark:block" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
