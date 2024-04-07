import Link from "next/link";
import { usePathname } from "next/navigation";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/islands/primitives/hover-card";
import { labelVariants } from "@/islands/primitives/tw-variants";
import { NavbarContent } from "@/islands/wrappers/navbar-shell";
import { cls } from "@/utils";

import { ListItem } from "./_components/list-item";
import { LogoBrand } from "./_components/logo-brand";

const isActive = (pathname, href) => pathname === href;
const activeClass = "drop-shadow-[0_0_0.3rem_#ffffff70]";

export function MainNav({ items, isSticky }) {
  const pathname = usePathname();
  return (
    <NavbarContent>
      <LogoBrand isSticky={isSticky} />
      {items
        ?.filter((navitem) => !navitem.external)
        .map((navItem) => (
          <HoverCard key={navItem.href}>
            <HoverCardTrigger asChild>
              <div className="group flex items-center h-full">
                <Link
                  href={navItem.href}
                  target="_blank"
                  className={cls(
                    "leading-[4rem] group-hover:animate-jump",
                    labelVariants(),
                    isActive(pathname, navItem.href) ? activeClass : "",
                  )}
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
    </NavbarContent>
  );
}

export function ExtraNav({ items, isSticky }) {
  const pathname = usePathname();
  return (
    <NavbarContent className="space-x-2">
      {items
        ?.filter((navitem) => !navitem.external)
        .map((navItem) => (
          <HoverCard key={navItem.href}>
            <HoverCardTrigger asChild>
              <div className="group flex items-center h-full">
                <Link
                  href={navItem.href}
                  target="_blank"
                  className={cls(
                    "leading-[4rem]",
                    labelVariants(),
                    pathname === navItem.href ? "drop-shadow-[0_0_0.3rem_#ffffff70]" : "",
                  )}
                >
                  <div className="flex flex-col items-center">
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
    </NavbarContent>
  );
}
