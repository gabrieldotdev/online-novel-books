import { Link } from "@/core/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/islands/primitives/hover-card";
import { NavbarContent } from "@/islands/wrappers/wps-header";
import { cls } from "@/utils";

import { labelVariants } from "../primitives/tw/twv";
import { ListItem } from "./_islands/list-item";

export function ExtraNav({ items, isSticky }) {
  return (
    <NavbarContent className="space-x-3">
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
    </NavbarContent>
  );
}
