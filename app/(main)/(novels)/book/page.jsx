import { Link } from "@/core/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/islands/account/avatar";
import { Icons } from "@/islands/icons";
import { Badge } from "@/islands/primitives/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/islands/primitives/card";
import { Separator } from "@/islands/primitives/separator";
import { labelVariants } from "@/islands/primitives/tw-variants/tv";
import { SpecialBook } from "@/islands/visuals/books/special-book";
import { CompressionShell } from "@/islands/wrappers/compression-shell";
import { Shell } from "@/islands/wrappers/shell-variants";
import { bookDetails } from "@/settings/app";
import { cls } from "@/utils";

const allNums = [
  { name: "Lượt truy cập", value: 624 },
  { name: "Tổng khuyến nghị", value: 4544 },
  { name: "Đề xuất theo tuần", value: 34 },
  { name: "Bộ sưu tập", value: 20 },
];

const allTags = [
  { name: "Tưởng tượng" },
  { name: "Đang ra" },
  { name: "Phép thuật" },
  { name: "Huyền huyễn" },
  { name: "Hài hước" },
  { name: "Hành động" },
];

export default function Book() {
  return (
    <Shell as="div" variant="compact">
      <Shell className="flex">
        <CompressionShell>
          <Card className="flex items-center justify-between h-full p-4">
            <div className="flex items-center">
              <SpecialBook imageUrl={"/assets/images/600.webp"} alt="" size="large" />
              <div className="flex flex-1 flex-col space-y-4 h-full p-4">
                {/* title */}
                <CardHeader className="p-0">
                  <CardTitle className={cls("truncate", labelVariants({ size: "xl" }))}>
                    Từ lúc bắt đầu, ta vô địch lĩnh vực
                  </CardTitle>
                  <div className="flex space-x-3">
                    <CardDescription>
                      <span className="text-foreground/90 font-semibold">Tác giả:</span>{" "}
                      <Link href="#" className="text-foreground/90">
                        Wxs Dev
                      </Link>
                    </CardDescription>
                    <CardDescription className="font-semibold text-foreground/60">
                      Được chỉnh sửa: 2024-04-11 09:35:45
                    </CardDescription>
                  </div>
                </CardHeader>
                {/* Tags */}
                <CardContent className="p-0 flex-grow">
                  <CardDescription className="space-x-2">
                    {allTags.map((tag, index) => (
                      <Link key={index} href="/novels/1" size="chip" variant="outline">
                        {tag.name}
                      </Link>
                    ))}
                  </CardDescription>
                </CardContent>
                {/* Nums */}
                <CardContent className="p-0 flex flex-grow space-x-3">
                  {allNums.map((num, index) => (
                    <CardDescription key={index} className="text-xs">
                      <span className="text-lg text-foreground/80 font-bold">{num.value}</span> {num.name}
                    </CardDescription>
                  ))}
                </CardContent>
                {/* Chapter */}
                <CardContent className="p-0 flex-grow">
                  <CardDescription className="line-clamp-2 font-normal text-foreground/80">
                    <span className="text-foreground font-semibold">Chương mới nhất:</span> Chương 112: Vô địch
                  </CardDescription>
                </CardContent>
                {/* Button */}
                <CardFooter className="p-0">
                  <div className="flex items-center justify-between space-x-3">
                    {bookDetails.allButton.map((button, index) => (
                      <Link key={index} href={button.href} variant="outline" size="large">
                        {button.name}
                      </Link>
                    ))}
                  </div>
                </CardFooter>
              </div>
            </div>
            <Separator orientation="vertical" className="h-60" />
            <div className="flex flex-col items-center w-64 h-full mr-4">
              <CardHeader className="p-0 space-y-3">
                <figure className="relative">
                  <Avatar className="h-24 w-24 hover:rounded-lg">
                    <AvatarImage src="/assets/images/600.webp" alt="" />
                    <AvatarFallback className="font-semibold text-2xl">N</AvatarFallback>
                  </Avatar>
                  {/* Badge bottom center */}
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
              <CardContent className="flex-grow py-4">
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
            </div>
          </Card>
        </CompressionShell>
      </Shell>
    </Shell>
  );
}
