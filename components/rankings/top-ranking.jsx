"use client";

import * as React from "react";
import { Icons } from "@/components/icons";
import { Card, CardFooter } from "@/components/primitives/card";
import { useHovered } from "@/hooks/useHovered";

import { Link } from "../primitives/link";
import { RankingItem } from "./_comps/ranking-item";

export function TopRanking({ sortedData, type }) {
  const { hovered, handleHover } = useHovered();
  // const novel = data.data.novels;

  return (
    <Card
      className="cursor-pointer shrink-0 border-none shadow-none w-72 pt-20"
      style={{
        backgroundImage: `url('/assets/ranks/i564x240/${type}.png')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <section className="min-h-[200px] space-y-2 pb-4">
        {sortedData.slice(0, 10).map((item, idx) => (
          <RankingItem key={item.id} type={type} item={item} idx={idx} hovered={hovered} handleHover={handleHover} />
        ))}
      </section>
      <CardFooter className="justify-end">
        <Link href="/rank" className="group space-x-0.5 text-xs font-normal text-muted-foreground">
          <span>Nhiều hơn</span>
          <Icons.chevronRight size={14} className="group-hover:animate-jumpR" />
        </Link>
      </CardFooter>
    </Card>
  );
}
