import * as React from "react";
import { Link } from "@/core/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/islands/account/avatar";
import { Icons } from "@/islands/icons";
import { Badge } from "@/islands/primitives/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/islands/primitives/card";
import { Separator } from "@/islands/primitives/separator";
import { labelVariants } from "@/islands/primitives/tw/twv";
import { SpecialBook } from "@/islands/visuals/books/special-book";
import { BaseShell, Shell } from "@/islands/wrappers/shell-variants";
import { bookDetails } from "@/settings/other";
import { cls } from "@/utils";

export default function BookDetail({ params }) {
  console.log(params);
  return (
    <BaseShell as="div">
      <Shell variant="compact" className="flex">
        <Card className="flex flex-grow items-center border-none">
          <CardHeader className="flex-shrink-0">
            <SpecialBook imageUrl={"/assets/images/600.webp"} alt="" size="large" />
          </CardHeader>
          <div className="space-y-4 h-full">
            {/* title */}
            <CardContent className="p-0">
              <CardTitle className={cls("truncate", labelVariants({ size: "xl" }))}>
                Từ lúc bắt đầu, ta vô địch lĩnh vực
              </CardTitle>
              <div className="flex space-x-3">
                <CardDescription>
                  <span className="text-foreground/90">Tác giả:</span>{" "}
                  <Link href="#" className="text-foreground/90">
                    Wxs Dev
                  </Link>
                </CardDescription>
                <CardDescription className="text-foreground/60">Được chỉnh sửa: 2024-04-11 09:35:45</CardDescription>
              </div>
            </CardContent>
            {/* Tags */}
            <CardContent className="p-0 flex-grow">
              <CardDescription className="flex flex-wrap gap-2">
                {bookDetails.allTags.map((tag, index) => (
                  <Link key={index} href={tag.href} size="sm" variant="outline">
                    {tag.name}
                  </Link>
                ))}
              </CardDescription>
            </CardContent>
            {/* Nums */}
            <CardContent className="p-0 flex flex-grow space-x-3">
              {bookDetails.allNums.map((num, index) => (
                <CardDescription key={index} className="text-xs">
                  <span className={cls("text-foreground/80", labelVariants({ size: "lg" }))}>{num.value}</span>{" "}
                  {num.name}
                </CardDescription>
              ))}
            </CardContent>
            {/* Chapter */}
            <CardContent className="p-0 flex-grow">
              <CardDescription className="line-clamp-2 text-foreground/80">
                <span className="text-foreground">Chương mới nhất:</span> Chương 112: Vô địch
              </CardDescription>
            </CardContent>
            {/* Button */}
            <CardFooter className="p-0">
              <div className="flex items-center justify-between space-x-3">
                {bookDetails.allButton.map((button, index) => (
                  <Link key={index} href={button.href} variant="outline" size="lg">
                    {button.name}
                  </Link>
                ))}
              </div>
            </CardFooter>
          </div>
        </Card>
        <Card className="hidden lg:flex flex-col items-center space-y-4 w-72 px-4 py-6">
          <CardHeader className="p-0 space-y-4">
            <figure className="relative">
              <Avatar className="h-24 w-24 hover:rounded-lg">
                <AvatarImage src="/assets/images/600.webp" alt="" />
                <AvatarFallback className="font-semibold text-2xl">N</AvatarFallback>
              </Avatar>
              <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2" size="large">
                <span className="font-bold">Lv.5</span>
              </Badge>
            </figure>
            <CardTitle className="flex items-center justify-center space-x-2">
              <Link href="#" className="text-foreground/90">
                Wxs Dev
              </Link>
              <Icons.star size="16" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <CardDescription className="text-center">Đạt Lv.5 danh hiệu "Tác giả nổi tiếng"</CardDescription>
          </CardContent>
          <CardFooter className="p-0 flex">
            <span className="text-center">
              <CardDescription className="text-foreground/80">Tổng số tác phẩm</CardDescription>
              <CardTitle className="text-md text-foreground/90">20</CardTitle>
            </span>
            <Separator orientation="vertical" className="mx-2 h-8" />
            <span className="text-center">
              <CardDescription className="text-foreground/80">Tổng số tác phẩm</CardDescription>
              <CardTitle className="text-md text-foreground/90">20</CardTitle>
            </span>
            <Separator orientation="vertical" className="mx-2 h-8" />
            <span className="text-center">
              <CardDescription className="text-foreground/80">Tổng số tác phẩm</CardDescription>
              <CardTitle className="text-md text-foreground/90">20</CardTitle>
            </span>
          </CardFooter>
        </Card>
      </Shell>
    </BaseShell>
  );
}
