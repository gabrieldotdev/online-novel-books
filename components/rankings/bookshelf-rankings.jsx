import { Icons } from "@/components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/primitives/tabs";

import { ComingSoon } from "./coming-soon-dev";
import { TopRanking } from "./ranking-tops/top-ranking";

export function BookshelfRankings({ data }) {
  const sortedVote = data.sort((a, b) => b.vote - a.vote);
  const sortedNew = data.sort((a, b) => b.view - a.view);
  const sortedWord = data.sort((a, b) => b.vote - a.vote);
  const sortedAccess = data.sort((a, b) => b.view - a.view);

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
        <TopRanking data={sortedVote} type={"nominations"} />
        <TopRanking data={sortedNew} type={"newly-released"} />
        <TopRanking data={sortedWord} type={"number-of-words"} />
        <TopRanking data={sortedAccess} type={"access"} />
      </TabsContent>
      <TabsContent value="coming-soon" className="flex justify-center animate-pulse">
        <ComingSoon />
      </TabsContent>
    </Tabs>
  );
}
