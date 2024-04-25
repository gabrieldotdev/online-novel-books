import React from "react";
import { UserAvatar } from "@/components/account/user-avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/primitives/hover-card";
import { Link } from "@/components/primitives/link";
import { labelVariants } from "@/themes/twv";
import { cls } from "@/utils";

export function UserMenu({ isSticky, signInNow = "Đăng nhập", signIn = "Đột nhập", color = "text-white" }) {
  const session = false;

  if (session) {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="group flex items-center h-full">
            <Link href="/profile" className={cls("leading-[4rem]", labelVariants())}>
              <UserAvatar
                src="https://images.unsplash.com/photo-1711127263278-07edabd1990d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODJ8fHxlbnwwfHx8fHw%3D"
                fallback="N"
              />
            </Link>
          </div>
        </HoverCardTrigger>
        <HoverCardContent className="w-56 inline-block px-2">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">shadcn</p>
            <p className="text-xs leading-none text-muted-foreground">m@example.com</p>
          </div>
        </HoverCardContent>
      </HoverCard>
    );
  }
  return (
    <Link href="/sign-in" className={cls("rounded-xl h-full", isSticky ? "text-foreground/80" : color)}>
      <span className="hidden lg:inline-flex">{signInNow}</span>
      <span className="inline-flex lg:hidden">{signIn}</span>
    </Link>
  );
}
