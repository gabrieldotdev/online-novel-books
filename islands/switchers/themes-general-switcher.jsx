"use client";

import { useIsClient } from "@/hooks/use-is-client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/islands/primitives/button";

export function ThemesGeneralSwitcher({
  iconClassName = "mr-2 h-4 w-4",
  className,
  ...props
}) {
  const { setTheme, theme } = useTheme();
  const client = useIsClient();

  if (!client)
    return (
      <Button
        aria-label="Theme Switcher"
        className="h-9 w-9 rounded-lg border"
        {...props}
      >
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
        <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
      </Button>
    );

  return (
    <Button
      aria-label="Theme Switcher"
      className="h-9 w-9 rounded-lg border"
      onClick={() => setTheme((theme) => (theme === "dark" ? "light" : "dark"))}
      {...props}
    >
      <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-transform dark:rotate-0 dark:scale-100" />
    </Button>
  );
}
