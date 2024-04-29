import * as React from "react";
import { Icons } from "@/components/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/primitives/tabs";

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
        <TopRanking data={data} />
        <TopRanking data={data} />
        <TopRanking data={data} />
        <TopRanking data={data} />
      </TabsContent>
      <TabsContent value="coming-soon" className="animate-pulse">
        COMING SOON...
      </TabsContent>
    </Tabs>
  );
}
