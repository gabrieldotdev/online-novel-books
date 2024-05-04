import { Icons } from "@/components/icons";
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@/components/primitives/tabs";
import * as React from "react";

import { ComingSoon } from "./coming-soon";
import { TopRanking } from "./top-ranking";

export function BookshelfRankings({ data }) {
	return (
		<Tabs defaultValue="books">
			<TabsList className="w-full text-center">
				<TabsTrigger value="books">全站脑洞排行</TabsTrigger>
				<TabsTrigger value="coming-soon">
					发展 <Icons.sparkles size={18} className="ml-1" />
				</TabsTrigger>
			</TabsList>
			<TabsContent value="books" className="flex justify-between">
				<TopRanking data={data} type={"tps1"} />
				<TopRanking data={data} type={"tps1"} />
				<TopRanking data={data} type={"tps1"} />
				<TopRanking data={data} type={"tps1"} />
			</TabsContent>
			<TabsContent
				value="coming-soon"
				className="flex justify-center animate-pulse"
			>
				<ComingSoon />
			</TabsContent>
		</Tabs>
	);
}
