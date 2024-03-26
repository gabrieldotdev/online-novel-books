"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Button } from "@/islands/primitives/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/islands/primitives/command";
import { cls } from "@/utils";
import { FileIcon, SearchIcon } from "lucide-react";

import { Icons } from "../icons";

export default function CommandSearch({
  searchTitle = "Search...",
  quickSearchTitle = "Quick search...",
  placeholder = "Type a command or search",
  cmdTheme = "Theme",
  cmdLight = "Light",
  cmdDark = "Dark",
  cmdSystem = "System",
  isSticky,
}) {
  const router = useRouter();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((isOpen) => !isOpen);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const runCommand = React.useCallback((command) => {
    setIsOpen(false);
    command();
  }, []);

  return (
    <>
      <Button
        className={cls(
          "relative flex items-center justify-start rounded-lg shadow-none",
          "w-full h-8 sm:pr-12 md:w-40 lg:w-64",
          "text-xs font-medium ring-1",
          isSticky
            ? "bg-black/5 hover:bg-foreground/10 text-foreground/60 ring-foreground/20"
            : "bg-white/5 hover:bg-white/10 text-white/60 ring-white/20",
        )}
        onClick={() => setIsOpen(true)}
      >
        <Icons.search className="h-3.5 w-3.5 mr-2" />
        <span className="hidden lg:inline-flex">{quickSearchTitle}</span>
        <span className="inline-flex lg:hidden">{searchTitle}</span>
        <kbd className="pointer-events-none absolute right-[0.3rem] hidden h-5 select-none items-center gap-1 rounded px-1.5 text-[14px] opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput placeholder={placeholder} />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Links">
            {siteConfig.mainNav
              .filter((navitem) => !navitem.external)
              .map((navItem) => (
                <CommandItem
                  key={navItem.href}
                  value={navItem.title}
                  onSelect={() => {
                    runCommand(() => router.push(navItem.href));
                  }}
                >
                  <FileIcon className="mr-2 h-4 w-4" />
                  {navItem.title}
                </CommandItem>
              ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
