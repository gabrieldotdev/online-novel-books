import * as React from "react";
import { Link } from "@/core/link";
import { useCarousel } from "@/hooks/useCarousel";
import { Card, CardContent } from "@/islands/primitives/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/islands/primitives/carousel";
import { festivals } from "@/settings/other";
import { cls } from "@/utils";
import Autoplay from "embla-carousel-autoplay";

import { Thumb } from "./islands/thumb";

export function FestivalCarousel() {
  const { setApi } = useCarousel();
  const plugins = [Autoplay({ delay: 3000 })];
  const options = {
    align: "center",
    loop: true,
    containScroll: "keepSnaps",
    dragFree: true,
  };

  return (
    <>
      <Carousel setApi={setApi} opts={options} plugins={plugins} className="w-full max-w-full">
        <CarouselContent>
          {festivals.map((item) => (
            <CarouselItem key={item.id}>
              <Link href={item.href}>
                <Card className="overflow-hidden border-none">
                  <CardContent className="flex aspect-auto items-center justify-center p-0">
                    <img src={item.image} alt={item.name} />
                  </CardContent>
                </Card>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      {/* Thumb */}
      {/* <div className="relative mt-2">
        <div className="absolute inset-x-0 flex justify-center overflow-x-auto hide-scrollbar">
          <div className="flex">
            {items.map((item, index) => (
              <Thumb
                key={item.id}
                selected={index === selectedIndex}
                onClick={() => onThumbClick(index)}
                thumbName={item.name}
              />
            ))}
          </div>
        </div>
      </div> */}
    </>
  );
}
