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
import { IMAGE_TYPE } from "@/configs/app";
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
          <Bestseller data={data.novelData} type={IMAGE_TYPE.bestseller} />
        </TabContentOnly>
        <TabContentOnly value={tabs[2].value}>
          <NewBook data={data.novelData} type={IMAGE_TYPE.newBook} />
        </TabContentOnly>
        <TabContentOnly value={tabs[3].value}>
          <Access data={data.novelData} type={IMAGE_TYPE.access} />
        </TabContentOnly>
        <TabContentOnly value={tabs[4].value}>
          <Propose data={data.novelData} type={IMAGE_TYPE.propose} />
        </TabContentOnly>
        <TabContentOnly value={tabs[5].value}>
          <RatingBoard data={data.novelData} type={IMAGE_TYPE.ratingBoard} />
        </TabContentOnly>
        <TabContentOnly value={tabs[6].value}>
          <BookEnded data={data.novelData} type={IMAGE_TYPE.bookEnded} />
        </TabContentOnly>
        <TabContentOnly value={tabs[7].value}>
          <RegisterNewBook data={data.novelData} type={IMAGE_TYPE.registerNewBook} />
        </TabContentOnly>
        <TabContentOnly value={tabs[8].value}>
          <BookUpdate data={data.novelData} type={IMAGE_TYPE.bookUpdate} />
        </TabContentOnly>
        <TabContentOnly value={tabs[9].value}>
          <FamousAuthor data={data.novelData} type={IMAGE_TYPE.famousAuthor} />
        </TabContentOnly>
      </div>
    </Tabs>
  );
}
