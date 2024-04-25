"use client";

import Link from "next/link";
import { Icons } from "@/components/icons";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/primitives/card";
import { Separator } from "@/components/primitives/separator";

import { NovelItem } from "./_comps/novel-item";

// Các tác phẩm được đề xuất khác
export function OtherRecommendedWorks({ items }) {
  return (
    <Card className="border-none shadow-none bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-y-0">
        <CardTitle>Đề xuất</CardTitle>
        <Link href="/profile/d.wxs" className="group flex items-center">
          <CardDescription className="text-xs">Khám phá</CardDescription>
          <Icons.chevronRight size={16} className="group-hover:animate-jumpR" />
        </Link>
      </CardHeader>
      <CardContent className="space-y-3">
        <Separator />
        {Array.from({ length: 9 }).map((_, idx) => (
          <Link key={idx} href="/profile/d.wxs">
            <NovelItem key={idx} />
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
