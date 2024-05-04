"use client";

import { Icons } from "@/components/icons";
import { Card, CardFooter } from "@/components/primitives/card";
import { useHovered } from "@/hooks/useHovered";
import Link from "next/link";
import * as React from "react";

import { RankingItem } from "./_comps/ranking-item";

export function TopRanking({ data, type }) {
	const { hovered, handleHover } = useHovered();
	// const novel = data.data.novels;

	return (
		<Card
			className="cursor-pointer shrink-0 border-none shadow-none w-72 pt-20"
			style={{
				backgroundImage: `url('/assets/tops/${type}.png')`,
				backgroundSize: "contain",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "top",
			}}
		>
			<section className="min-h-[200px] space-y-2 pb-4">
				{/* {novel.slice(0, 10).map((item, idx) => ( */}
				{data
					.sort((a, b) => b.view - a.view)
					.slice(0, 10)
					.map((item, idx) => (
						<RankingItem
							key={item.id}
							item={item}
							idx={idx}
							hovered={hovered}
							handleHover={handleHover}
						/>
					))}
			</section>
			<CardFooter className="justify-end">
				<Link
					href="/rankings"
					className="group flex items-center space-x-0.5 text-xs text-muted-foreground"
				>
					<span>Nhiều hơn</span>
					<Icons.chevronRight size={14} className="group-hover:animate-jumpR" />
				</Link>
			</CardFooter>
		</Card>
	);
}
