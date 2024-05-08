"use client";

import * as React from "react";
import { Tabs, TabsContent } from "@/components/primitives/tabs";
import { TabListButton } from "@/components/rankings/_comps/tab-list-button";
import {
  Access,
  Bestseller,
  BookEnded,
  BookUpdate,
  FamousAuthor,
  NewBook,
  Popular,
  Propose,
  RatingBoard,
  RegisterNewBook,
} from "@/components/rankings/ranking-lists";
import { useTabParams } from "@/hooks/use-tab-params";

function TabContentOnly({ value, children }) {
  return <TabsContent value={value}>{children}</TabsContent>;
}

export function EncyclopediaRankings({ tabs, workTabs, authorTabs, data = { novelData: [], categoryData: [] } }) {
  const { searchParams, isActive, handleTabChange } = useTabParams(tabs);
  return (
    <Tabs
      defaultValue={isActive(tabs[0].value) ? tabs[0].value : searchParams.get("label") || tabs[0].value}
      className="flex items-start w-[inherit] gap-x-4"
    >
      <div className="w-72 shrink-0 space-y-4">
        <TabListButton work={workTabs} author={authorTabs} onClick={handleTabChange} />
      </div>
      <div className="grow">
        {/* Gồm 9 thành phần tử nổi loạn! */}
        <TabContentOnly value={tabs[0].value}>
          <Popular data={data.novelData} />
        </TabContentOnly>
        <TabContentOnly value={tabs[1].value}>
          <Bestseller data={data.novelData} type="test" />
        </TabContentOnly>
        <TabContentOnly value={tabs[2].value}>
          <NewBook data={data.categoryData} />
        </TabContentOnly>
        <TabContentOnly value={tabs[3].value}>
          <Access />
        </TabContentOnly>
        <TabContentOnly value={tabs[4].value}>
          <Propose />
        </TabContentOnly>
        <TabContentOnly value={tabs[5].value}>
          <RatingBoard />
        </TabContentOnly>
        <TabContentOnly value={tabs[6].value}>
          <BookEnded />
        </TabContentOnly>
        <TabContentOnly value={tabs[7].value}>
          <RegisterNewBook />
        </TabContentOnly>
        <TabContentOnly value={tabs[8].value}>
          <BookUpdate />
        </TabContentOnly>
        <TabContentOnly value={tabs[9].value}>
          <FamousAuthor />
        </TabContentOnly>
      </div>
    </Tabs>
  );
}
