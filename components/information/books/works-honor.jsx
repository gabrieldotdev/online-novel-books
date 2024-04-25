"use client";

import * as React from "react";
import { Icons } from "@/components/icons";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/primitives/card";
import { Link } from "@/components/primitives/link";
import { Separator } from "@/components/primitives/separator";
import { useInfiniteMoving } from "@/hooks/use-infinite-moving";
import { cls } from "@/utils";

import { HonorItem } from "./_comps/honor-item";

export function WorksHonor({ items, direction = "left", speed = "fast", pauseOnHover = true }) {
  const { containerRef, scrollerRef, start } = useInfiniteMoving(direction, speed);

  return (
    <Card className="border-none shadow-none bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>Danh hiệu</CardTitle>
        <Link href="/profile/d.wxs" className="group flex items-center">
          <CardDescription className="text-xs">Khám phá</CardDescription>
          <Icons.chevronRight size={16} className="group-hover:animate-jumpR" />
        </Link>
      </CardHeader>
      <CardContent className="pb-2 space-y-2">
        <Separator />
        <CardDescription className="line-clamp-2">
          Accumulated three hundred thousand collections on February 21, 2024
        </CardDescription>
        <Separator />
      </CardContent>
      <CardFooter
        ref={containerRef}
        className={cls(
          "relative z-20  max-w-7xl overflow-hidden px-0 mx-6",
          "[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        )}
      >
        <section
          ref={scrollerRef}
          className={cls(
            "flex min-w-full shrink-0 gap-2 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]",
          )}
        >
          {items.map((item, idx) => (
            <HonorItem key={idx} src={item.src} value={item.value} />
          ))}
        </section>
      </CardFooter>
    </Card>
  );
}
