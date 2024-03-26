import Link from "next/link";
import { usePathname } from "next/navigation";
import { ListItem } from "@/islands/navigation/_components/list-item";
import { LogoBrand } from "@/islands/navigation/_components/logo-brand";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/islands/primitives/hover-card";
import { titleVariants } from "@/islands/primitives/tw-v";
import { cls } from "@/utils";

export const Navbar = ({ children }) => {
  return <nav className="flex items-center h-full gap-3">{children}</nav>;
};

export function MainNav({ items, isSticky }) {
  const pathname = usePathname();

  return (
    <div className="mr-4 flex items-center h-full">
      <LogoBrand isSticky={isSticky} />
      <Navbar>
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
                      "group-hover:animate-jump hover:drop-shadow-[0_0_0.3rem_#ffffff70]",
                      titleVariants(),
                      pathname === navItem.href
                        ? "drop-shadow-[0_0_0.3rem_#ffffff70]"
                        : "",
                      isSticky ? "text-xs font-medium" : "text-white",
                    )}
                  >
                    <span>{navItem.title}</span>
                  </Link>
                </div>
              </HoverCardTrigger>
              {!!navItem.items?.length && (
                <HoverCardContent className="w-auto inline-block">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    {navItem.items.map((item) => (
                      <ListItem
                        key={item.href}
                        href={item.href}
                        title={item.title}
                      >
                        {item.description}
                      </ListItem>
                    ))}
                  </div>
                </HoverCardContent>
              )}
            </HoverCard>
          ))}
      </Navbar>
    </div>
  );
}

export function ExtraNav({ items, isSticky }) {
  const pathname = usePathname();

  return (
    <>
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
                    "group-hover:animate-jump hover:drop-shadow-[0_0_0.3rem_#ffffff70]",
                    titleVariants(),
                    pathname === navItem.href
                      ? "drop-shadow-[0_0_0.3rem_#ffffff70]"
                      : "",
                  )}
                >
                  <div className="flex flex-col items-center">
                    <span className="group-hover:animate-jump text-[0.9rem]">
                      {navItem.icon}
                    </span>
                    <span
                      className={cls(
                        "text-xs",
                        isSticky ? "sr-only" : "hidden lg:block",
                      )}
                    >
                      {navItem.title}
                    </span>
                  </div>
                </Link>
              </div>
            </HoverCardTrigger>
            {!!navItem.items?.length && (
              <HoverCardContent className="w-auto inline-block">
                <div className="grid grid-cols-2 gap-4">
                  {navItem.items.map((item) => (
                    <ListItem
                      key={item.href}
                      href={item.href}
                      title={item.title}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </div>
              </HoverCardContent>
            )}
          </HoverCard>
        ))}
    </>
  );
}
