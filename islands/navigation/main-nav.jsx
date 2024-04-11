import Link from "next/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/islands/primitives/hover-card";
import { labelVariants } from "@/islands/primitives/tw-variants/tv";
import { ShellAs } from "@/islands/wrappers/shell-as";
import { cls } from "@/utils";

import { ListItem } from "./_components/list-item";
import { LogoBrand } from "./_components/logo-brand";

export function MainNav({ items, isSticky }) {
  return (
    <ShellAs as="navbarContent">
      <LogoBrand isSticky={isSticky} />
      {items
        ?.filter((navitem) => !navitem.external)
        .map((navItem) => (
          <HoverCard key={navItem.href}>
            <HoverCardTrigger asChild>
              <div className="group hidden md:flex flex-shrink-0 items-center h-full">
                <Link
                  href={navItem.href}
                  target="_blank"
                  className={cls("leading-[4rem] group-hover:animate-jump", isSticky || "text-white", labelVariants())}
                >
                  <span>{navItem.label}</span>
                </Link>
              </div>
            </HoverCardTrigger>
            {!!navItem.items?.length && (
              <HoverCardContent className="w-auto inline-block">
                <div className="grid grid-cols-2 gap-4 p-4">
                  {navItem.items.map((item) => (
                    <ListItem key={item.href} href={item.href} label={item.label}>
                      {item.description}
                    </ListItem>
                  ))}
                </div>
              </HoverCardContent>
            )}
          </HoverCard>
        ))}
    </ShellAs>
  );
}

export function ExtraNav({ items, isSticky }) {
  return (
    <ShellAs as="navbarContent" className="space-x-3">
      {items
        ?.filter((navitem) => !navitem.external)
        .map((navItem) => (
          <HoverCard key={navItem.href}>
            <HoverCardTrigger asChild>
              <div className="group flex items-center h-full">
                <Link href={navItem.href} target="_blank" className={cls("leading-[4rem]", labelVariants())}>
                  <div className={cls("flex flex-col items-center", isSticky || "text-white")}>
                    <span className="group-hover:animate-jump text-[0.9rem]">{navItem.icon}</span>
                    <span className={cls("text-xs", isSticky ? "sr-only" : "hidden lg:block")}>{navItem.label}</span>
                  </div>
                </Link>
              </div>
            </HoverCardTrigger>
            {!!navItem.items?.length && (
              <HoverCardContent className="w-auto inline-block">
                <div className="grid grid-cols-2 gap-4">
                  {navItem.items.map((item) => (
                    <ListItem key={item.href} href={item.href} label={item.label}>
                      {item.description}
                    </ListItem>
                  ))}
                </div>
              </HoverCardContent>
            )}
          </HoverCard>
        ))}
    </ShellAs>
  );
}
