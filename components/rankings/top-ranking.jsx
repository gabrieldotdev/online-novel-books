"use client";

import * as React from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Card, CardFooter } from "@/components/primitives/card";
import { useHovered } from "@/hooks/useHovered";
import { cls } from "@/utils";

import { RankingItem } from "./_comps/ranking-item";

export function TopRanking({ data }) {
  const { hovered, handleHover } = useHovered();

  return (
    <Card
      className={cls(
        "cursor-pointer border-none shadow-none w-72 pt-20",
        "bg-[url('/assets/tops/tps1.png')] bg-top bg-contain bg-no-repeat",
      )}
    >
      <section className="min-h-[200px] space-y-2 pb-4">
        {data
          .sort((a, b) => b.view - a.view)
          .slice(0, 10)
          .map((item, idx) => (
            <RankingItem key={item.id} item={item} idx={idx} hovered={hovered} handleHover={handleHover} />
          ))}
      </section>
      <CardFooter className="justify-end">
        <Link href="/rankings" className="group flex items-center space-x-0.5 text-xs text-muted-foreground">
          <span>Nhiều hơn</span>
          <Icons.chevronRight size={14} className="group-hover:animate-jumpR" />
        </Link>
      </CardFooter>
    </Card>
  );
}
