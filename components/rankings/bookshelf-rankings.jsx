import * as React from "react";
import { Icons } from "@/components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/primitives/tabs";

import { ComingSoon } from "./coming-soon";
import { TopRanking } from "./top-ranking";

export function BookshelfRankings({ data }) {
  const sortedVote = data.sort((a, b) => b.vote - a.vote);
  const sortedView = data.sort((a, b) => b.view - a.view);
  const sortedLike = data.sort((a, b) => b.vote - a.vote);
  const sortedComment = data.sort((a, b) => b.view - a.view);

  return (
    <Tabs defaultValue="books">
      <TabsList className="w-full text-center">
        <TabsTrigger className="uppercase" value="books">
          Xếp hạng lý tưởng của toàn bộ sách
        </TabsTrigger>
        <TabsTrigger className="uppercase" value="coming-soon">
          Đang phát triển <Icons.sparkles size={18} className="ml-1" />
        </TabsTrigger>
      </TabsList>
      <TabsContent value="books" className="flex justify-between">
        <TopRanking sortedData={sortedVote} type={"test"} />
        <TopRanking sortedData={sortedView} type={"test"} />
        <TopRanking sortedData={sortedLike} type={"test"} />
        <TopRanking sortedData={sortedComment} type={"test"} />
      </TabsContent>
      <TabsContent value="coming-soon" className="flex justify-center animate-pulse">
        <ComingSoon />
      </TabsContent>
    </Tabs>
  );
}
