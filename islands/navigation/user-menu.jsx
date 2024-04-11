// import Link from "next/link";
import { Link } from "@/core/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/islands/account/avatar";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/islands/primitives/hover-card";
import { cls } from "@/utils";

import { labelVariants } from "../primitives/tw-variants/tv";

export default function UserMenu({ isSticky, signInNow = "Đăng nhập ngay", signIn = "Đăng nhập" }) {
  const session = false;

  if (session) {
    return (
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="group flex items-center h-full">
            <Link variant="none" size="none" href="" className={cls("leading-[4rem]", labelVariants())}>
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1711127263278-07edabd1990d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxODJ8fHxlbnwwfHx8fHw%3D"
                  alt=""
                />
                <AvatarFallback>N</AvatarFallback>
              </Avatar>
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
    <Link
      href="/sign-in"
      variant="none"
      className={cls(
        "flex items-center rounded-lg shadow-none ring-1",
        isSticky
          ? "bg-background/5 hover:bg-foreground/10 text-foreground/60 ring-foreground/20"
          : "bg-white/5 hover:bg-white/10 text-white/60 ring-white/20",
      )}
    >
      <span className="hidden lg:inline-flex">{signInNow}</span>
      <span className="inline-flex lg:hidden">{signIn}</span>
    </Link>
  );
}
