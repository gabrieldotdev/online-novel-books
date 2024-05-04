import { Icons } from "@/components/icons";
import { ElCarousel } from "@/components/navigation/carousels/el-carousel";
import { FestivalCarousel } from "@/components/navigation/carousels/festival-carousel";
import { Card, CardContent, CardDescription, CardFooter, CardTitle } from "@/components/primitives/card";
import { Link } from "@/components/primitives/link";
import { BookshelfRankings } from "@/components/rankings/bookshelf-rankings";
import { NoName } from "@/components/rankings/no-name";
import { Ads } from "@/components/visuals/ads";
import { Book } from "@/components/visuals/book";
import { Shell } from "@/components/wrappers/shell-variants";
import { cls } from "@/utils";

import { getNovels } from "../_api/getNovels";

export default async function Home() {
  const novel = await getNovels();

  return (
    <Shell as="div" className="py-0 md:py-2">
      {/* notification */}
      {/* festival */}
      <section className="flex items-start w-[inherit] h-full gap-x-4">
        <Card
          className={cls(
            "relative shrink-0 border-none shadow-none w-72 h-[calc(100%-3rem)] mt-12",
            "bg-[url('https://revo.zongheng.com/www/2024/images/c4d794c.png')] bg-top bg-cover bg-no-repeat",
          )}
        >
          <div className="absolute -top-12 left-0 w-full h-6">
            <span className="text-lg font-semibold text-foreground">Bộ sách đã hoàn thành</span>
          </div>
          <section className="min-h-[200px] mx-4 py-6">
            <ElCarousel />
          </section>
          <CardFooter className="absolute bottom-0 w-full flex justify-center">
            <Link size="lg" variant="outline">
              <Icons.sparkles size={16} className="mr-2" />
              <span>Khám phá ngay</span>
            </Link>
          </CardFooter>
        </Card>
        <section className="flex-grow space-y-4">
          <FestivalCarousel />
        </section>
        <NoName data={novel} type="vote" />
      </section>
      {/* editor recommendations */}
      <section className="flex items-start w-[inherit] h-full gap-x-4">
        <section className="shrink-0 w-72 h-full">
          <Card className="relative cursor-pointer border-none shadow-none h-[calc(100%-8rem)] mt-32">
            <div className="absolute -top-32 left-0 w-full h-6">
              <span className="text-lg font-bold text-foreground">Khuyến nghị của biên tập</span>
            </div>
            <section className="text-center min-h-[200px] pt-44">
              <Book
                src="/assets/images/600.webp"
                size="lg"
                className="absolute -top-20 left-1/2 transform -translate-x-1/2"
              />
              <CardContent className="space-y-3">
                <CardTitle className="text-base line-clamp-1">Từ lúc bắt đầu, ta liền vô địch lĩnh vực này</CardTitle>
                <CardDescription className="text-sm font-medium text-foreground/80">Wxs Dev</CardDescription>
                <CardDescription className="text-sm line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nisi commodi aliquam modi nihil magnam
                  expedita placeat, dolor incidunt, eaque quo aspernatur. Voluptates qui reiciendis facere a illo autem
                  porro.
                </CardDescription>
              </CardContent>
            </section>
          </Card>
        </section>
        <section className="flex-grow h-full">
          <Card className="relative cursor-pointer border-none shadow-none bg-transparent w-full h-[calc(100%-3rem)] mt-12">
            {/* <div className="absolute -top-12 left-3 w-full h-6">
              <span>Khuyến nghị của biên tập</span>
            </div> */}
            <section className="grid grid-cols-2 content-between min-h-full gap-x-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <CardContent key={index} className="flex items-center space-x-2 p-0">
                  <Book src="/assets/images/600.webp" size="sm" />
                  <div className="flex flex-col space-y-1.5">
                    <CardTitle className="text-base line-clamp-1">
                      Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                    </CardTitle>
                    <CardDescription className="text-sm text-foreground/60 line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nisi commodi aliquam modi nihil
                      magnam expedita placeat, dolor incidunt, eaque quo aspernatur. Voluptates qui reiciendis facere a
                      illo autem porro.
                    </CardDescription>
                    <CardDescription className="text-sm text-foreground/80">Hoàng Thái Ninh</CardDescription>
                  </div>
                </CardContent>
              ))}
            </section>
          </Card>
        </section>
        <NoName data={novel} type="top" />
      </section>

      {/* bookshelf rankings */}
      <section className="w-[inherit] h-[inherit] gap-x-4">
        <BookshelfRankings data={novel} />
      </section>
    </Shell>
  );
}
