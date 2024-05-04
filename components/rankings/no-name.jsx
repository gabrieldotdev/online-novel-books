"use client";

import { Card } from "@/components/primitives/card";
import { useHovered } from "@/hooks/useHovered";
import { cls } from "@/utils";
import * as React from "react";

import { RankingItem } from "./_comps/ranking-item";

export function NoName({ data, type }) {
	const { hovered, handleHover } = useHovered();
	// const novel = data.data.novels;

	return (
		<Card
			className={cls(
				"relative shrink-0 cursor-pointer border-none shadow-none w-72 mt-12",
				"bg-[url('https://revo.zongheng.com/www/2024/images/c4d794c.png')] bg-top bg-cover bg-no-repeat",
			)}
		>
			<div
				className="absolute -top-12 left-3 w-full h-6"
				style={{
					backgroundImage: `url('/assets/tops/${type}.png')`,
					backgroundSize: "contain",
					backgroundRepeat: "no-repeat",
				}}
			/>
			<section className="min-h-[200px] space-y-2 py-4">
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
		</Card>
	);
}
