"use client";

import * as React from "react";
import { Card, CardDescription, CardHeader } from "@/components/primitives/card";
import { Tabs, TabsContent } from "@/components/primitives/tabs";
import TabListButton from "@/components/rankings/_comps/tab-list-button";
import { Popular } from "@/components/rankings/ranking-lists/popular";
import { Shell } from "@/components/wrappers/shell-variants";
import { siteConfig } from "@/configs/app";

function TabContentOnly({ value, children }) {
  return <TabsContent value={value}>{children}</TabsContent>;
}

export default function Page({ params }) {
  const workTabs = siteConfig.rankTheWorkTabs;
  const authorTabs = siteConfig.authorRankingTabs;
  const tabs = [...workTabs, ...authorTabs];

  return (
    <Shell as="div" variant="none" className="max-w-[1200px] mx-auto">
      <Tabs defaultValue="popular" className="flex items-start w-[inherit] gap-x-4">
        <div className="w-72 shrink-0 space-y-4">
          <TabListButton work={workTabs} author={authorTabs} />
        </div>
        <div className="flex-grow space-y-4">
          <Card className="border-none shadow-none bg-white">
            <CardHeader>
              {/* Gồm 9 thành phần tử nổi loạn! */}
              <TabContentOnly value={tabs[0].value}>
                <Popular />
              </TabContentOnly>
              <TabContentOnly value={tabs[1].value}>
                <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. 1</CardDescription>
              </TabContentOnly>
              <TabContentOnly value={tabs[2].value}>
                <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. 2</CardDescription>
              </TabContentOnly>
              <TabContentOnly value={tabs[3].value}>
                <CardDescription>Lorem ipsum dolor sit amet consectetur adipisicing elit. 3</CardDescription>
              </TabContentOnly>
            </CardHeader>
          </Card>
        </div>
      </Tabs>
    </Shell>
  );
}
