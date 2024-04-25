import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/primitives/hover-card";
import { Link } from "@/components/primitives/link";
import { labelVariants } from "@/themes/twv";
import { cls } from "@/utils";

import { ListItem } from "../_comps/list-item";

export function ExtendNav({ items, isSticky, color = "text-white" }) {
  return (
    <div className="hidden md:flex items-center justify-between h-full space-x-4 md:justify-end">
      {items
        ?.filter((navitem) => !navitem.external)
        .map((navItem) => (
          <HoverCard key={navItem.href}>
            <HoverCardTrigger asChild>
              <div className="group flex items-center h-full">
                <Link href={navItem.href} target="_blank" className={cls("leading-[4rem]", labelVariants())}>
                  <div className={cls("flex flex-col items-center space-y-0.5", isSticky || color)}>
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
    </div>
  );
}
