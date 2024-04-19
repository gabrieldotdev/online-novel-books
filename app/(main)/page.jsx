"use client";

import * as React from "react";
import Image from "next/image";
import { Link } from "@/core/link";
import { ChiefCarousel } from "@/islands/navigation/carousels/chief-carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/islands/primitives/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/islands/primitives/carousel";
import { typographyVariants } from "@/islands/primitives/tw/typography";
import Ads from "@/islands/visuals/ads";
import { RegularBook } from "@/islands/visuals/books/regular-book";
import { SpecialBook } from "@/islands/visuals/books/special-book";
import { BaseShell, Shell } from "@/islands/wrappers/shell-variants";
import Autoplay from "embla-carousel-autoplay";

export default function Home() {
  return (
    <BaseShell as="div" className="py-0 md:py-0 space-y-8">
      <Ads
        imageUrl="https://images.unsplash.com/photo-1712675009273-5a6c46663fbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Ads"
      />
      {/* editor recommendations */}
      <Shell variant="compact" className="flex flex-col lg:flex-row items-start justify-between h-full">
        <section className="flex-shrink-0 w-80 h-full hidden lg:block">
          <div className="flex items-center justify-between pb-7 pt-2">
            <span className="text-lg font-bold text-foreground">Được đề xuất cho bạn</span>
          </div>
          <Card x-chunk="Top 10 Comics" className="relative mt-16 h-[calc(100%-10rem)]">
            <CardHeader className="absolute left-1/2 -top-16 transform -translate-x-1/2 p-0 z-10">
              <SpecialBook size="large" imageUrl="/assets/images/600.webp" />
            </CardHeader>
            <CardContent className="pt-4 space-y-3 mt-48">
              <CardDescription className="flex flex-col space-y-4 text-center">
                <span className="text-base font-semibold text-foreground line-clamp-2">
                  Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                </span>
                <span className="text-sm font-medium text-foreground/80">Hoàng Thái Ninh</span>
                <span className="text-sm font-medium text-foreground/60 mt-4 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nisi commodi aliquam modi nihil magnam
                  expedita placeat, dolor incidunt, eaque quo aspernatur. Voluptates qui reiciendis facere a illo autem
                  porro.
                </span>
              </CardDescription>
            </CardContent>
          </Card>
        </section>
        <Card x-chunk="De Xuat" className="relative w-full h-[calc(100%-4rem)] mt-16 border-none">
          <CardHeader className="not-sr-only lg:sr-only absolute -top-14 left-6 p-0">
            <span className="text-lg font-bold text-foreground">Đề xuất</span>
          </CardHeader>
          <CardContent className="pb-16 space-y-3 h-full">
            <div className="grid grid-cols-2 content-between h-full gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RegularBook imageUrl="/assets/images/600.webp" className="flex-shrink-0" />
                  <CardDescription className="flex flex-col justify-between h-full py-1">
                    <span className="text-sm font-medium text-foreground line-clamp-2">
                      Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                    </span>
                    <span className="text-sm line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nisi commodi aliquam modi nihil
                      magnam expedita placeat, dolor incidunt, eaque quo aspernatur. Voluptates qui reiciendis facere a
                      illo autem porro.
                    </span>
                    <span className="text-sm">Huyền Huyễn</span>
                  </CardDescription>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <section className="flex-shrink-0 w-80 hidden lg:block">
          <Card x-chunk="Top 10 Comics" className="relative mt-16">
            <CardHeader className="absolute -top-14 left-4 p-0">
              <CardTitle className={typographyVariants({ size: "large" })}>TOP ?</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="relative flex">
                <figure className="flex-shrink-0">
                  <Image
                    src="https://revo.zongheng.com/www/2024/images/56e1ee1.png"
                    alt="Top 1"
                    width={30}
                    height={30}
                  />
                </figure>
                <CardDescription className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-2">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm">Huyền huyễn</span>
                  <span className="text-sm text-destructive">Top 1 bảng xếp hạng</span>
                </CardDescription>
                <div className="ml-auto">
                  <RegularBook size="small" imageUrl="/assets/images/600.webp" />
                </div>
              </div>
              <div className="relative flex">
                <figure className="flex-shrink-0">
                  <Image
                    src="https://revo.zongheng.com/www/2024/images/85a0c35.png"
                    alt="Top 1"
                    width={30}
                    height={30}
                  />
                </figure>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
              <div className="relative flex">
                <figure className="flex-shrink-0">
                  <Image
                    src="https://revo.zongheng.com/www/2024/images/718e8c9.png"
                    alt="Top 1"
                    width={30}
                    height={30}
                  />
                </figure>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
              <div className="relative flex">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8">
                  <span className="text-base font-extrabold text-foreground/40">04</span>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
              <div className="relative flex">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8">
                  <span className="text-base font-extrabold text-foreground/40">05</span>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
              <div className="relative flex">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8">
                  <span className="text-base font-extrabold text-foreground/40">06</span>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
              <div className="relative flex">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8">
                  <span className="text-base font-extrabold text-foreground/40">07</span>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
              <div className="relative flex">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8">
                  <span className="text-base font-extrabold text-foreground/40">08</span>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
              <div className="relative flex">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8">
                  <span className="text-base font-extrabold text-foreground/40">09</span>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
              <div className="relative flex">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8">
                  <span className="text-base font-extrabold text-foreground/40">10</span>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </section>
      </Shell>
      {/* chief editor recommendations */}
      <Shell variant="compact">
        <ChiefCarousel />
      </Shell>
      <Ads
        imageUrl="https://images.unsplash.com/photo-1712675009273-5a6c46663fbb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Ads"
      />
      {/* classic finished books */}
      <Shell variant="compact" className="flex flex-col lg:flex-row items-start justify-between h-full">
        <section className="flex-shrink-0 w-80 h-full hidden lg:block">
          <div className="flex items-center justify-between pb-7 pt-2">
            <span className="text-lg font-bold text-foreground">Được đề xuất cho bạn</span>
          </div>
          <Card x-chunk="Top 10 Comics" className="h-[calc(100%-6rem)]">
            <CardHeader className="items-center">
              <SpecialBook imageUrl="/assets/images/600.webp" />
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <CardDescription className="flex flex-col space-y-4 text-center">
                <span className="text-base font-semibold text-foreground line-clamp-2">
                  Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                </span>
                <span className="text-sm font-medium text-foreground/80">Hoàng Thái Ninh</span>
                <span className="text-sm font-medium text-foreground/60 mt-4 line-clamp-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nisi commodi aliquam modi nihil magnam
                  expedita placeat, dolor incidunt, eaque quo aspernatur. Voluptates qui reiciendis facere a illo autem
                  porro.
                </span>
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link variant="destructive" size="default" href="/book/1" className="rounded-xl">
                Đọc ngay
              </Link>
            </CardFooter>
          </Card>
        </section>
        <Card x-chunk="De Xuat" className="relative w-full h-[calc(100%-4rem)] mt-16 border-none">
          <CardHeader className="absolute -top-14 left-6 p-0">
            <span className="text-lg font-bold text-foreground">Được đề xuất cho bạn</span>
          </CardHeader>
          <CardContent className="pb-16 space-y-3 h-full">
            <div className="grid grid-cols-2 content-between h-full gap-4">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <RegularBook imageUrl="/assets/images/600.webp" className="flex-shrink-0" />
                  <CardDescription className="flex flex-col justify-between h-full py-1">
                    <span className="text-sm font-medium text-foreground line-clamp-2">
                      Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                    </span>
                    <span className="text-sm line-clamp-2">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nisi commodi aliquam modi nihil
                      magnam expedita placeat, dolor incidunt, eaque quo aspernatur. Voluptates qui reiciendis facere a
                      illo autem porro.
                    </span>
                    <span className="text-sm">Huyền Huyễn</span>
                  </CardDescription>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <section className="flex-shrink-0 w-80 hidden lg:block">
          <Card x-chunk="Top 10 Comics" className="relative mt-16">
            <CardHeader className="absolute -top-14 left-4 p-0">
              <CardTitle className={typographyVariants({ size: "large" })}>TOP ?</CardTitle>
            </CardHeader>
            <CardContent className="pt-4 space-y-3">
              <div className="relative flex">
                <figure className="flex-shrink-0">
                  <Image
                    src="https://revo.zongheng.com/www/2024/images/56e1ee1.png"
                    alt="Top 1"
                    width={30}
                    height={30}
                  />
                </figure>
                <CardDescription className="flex flex-col gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-2">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm">Huyền huyễn</span>
                  <span className="text-sm text-destructive">Top 1 bảng xếp hạng</span>
                </CardDescription>
                <div className="ml-auto">
                  <RegularBook size="small" imageUrl="/assets/images/600.webp" />
                </div>
              </div>
              <div className="relative flex">
                <figure className="flex-shrink-0">
                  <Image
                    src="https://revo.zongheng.com/www/2024/images/85a0c35.png"
                    alt="Top 1"
                    width={30}
                    height={30}
                  />
                </figure>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
              <div className="relative flex">
                <figure className="flex-shrink-0">
                  <Image
                    src="https://revo.zongheng.com/www/2024/images/718e8c9.png"
                    alt="Top 1"
                    width={30}
                    height={30}
                  />
                </figure>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
              <div className="relative flex">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8">
                  <span className="text-base font-extrabold text-foreground/40">04</span>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
              <div className="relative flex">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8">
                  <span className="text-base font-extrabold text-foreground/40">05</span>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
              <div className="relative flex">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8">
                  <span className="text-base font-extrabold text-foreground/40">06</span>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
              <div className="relative flex">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8">
                  <span className="text-base font-extrabold text-foreground/40">07</span>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
              <div className="relative flex">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8">
                  <span className="text-base font-extrabold text-foreground/40">08</span>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
              <div className="relative flex">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8">
                  <span className="text-base font-extrabold text-foreground/40">09</span>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
              <div className="relative flex">
                <div className="flex items-center justify-center flex-shrink-0 w-8 h-8">
                  <span className="text-base font-extrabold text-foreground/40">10</span>
                </div>
                <CardDescription className="flex items-center gap-1">
                  <span className="text-sm font-medium text-foreground line-clamp-1">
                    Từ lúc bắt đầu, ta liền vô địch lĩnh vực này
                  </span>
                  <span className="text-sm flex-shrink-0">Huyền huyễn</span>
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </section>
      </Shell>
    </BaseShell>
  );
}
