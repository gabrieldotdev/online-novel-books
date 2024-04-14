import * as React from "react";
import { Link } from "@/core/link";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/islands/primitives/hover-card";
import { labelVariants } from "@/islands/primitives/tw/twv";
import { NavbarContent } from "@/islands/wrappers/wps-header";
import { NavbarBrand } from "@/islands/wrappers/wps-header/navbar-brand";
import { siteConfig } from "@/settings/app";
import { cls } from "@/utils";

import { ListItem } from "./_islands/list-item";

export function MainNav({ items, isSticky }) {
  return (
    <NavbarContent>
      <NavbarBrand src="/icon.svg" alt="Logo" className={isSticky ? "dark:invert" : "invert"}>
        <span
          className={cls(
            "hidden font-medium sm:inline-block",
            "group-hover:animate-jump",
            isSticky || "text-white",
            labelVariants(),
          )}
        >
          {siteConfig.name}
        </span>
      </NavbarBrand>
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
    </NavbarContent>
  );
}
