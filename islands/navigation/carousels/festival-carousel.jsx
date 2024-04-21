import * as React from "react";
import Image from "next/image";
import { Button } from "@/islands/primitives/button";
import { Card, CardContent } from "@/islands/primitives/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/islands/primitives/carousel";
import { cls } from "@/utils";
import Autoplay from "embla-carousel-autoplay";
import { set } from "react-hook-form";

import { Thumb } from "./islands/thumb";

const items = [
  {
    id: 1,
    name: "Tonic",
    image: "/assets/images/32a92ff7e101abb3260aa4941ece6ae55cbc8c26.jpg@976w_550h_1c_!web-home-carousel-cover.avif",
  },
  {
    id: 2,
    name: "Tonic",
    image: "/assets/images/32a92ff7e101abb3260aa4941ece6ae55cbc8c26.jpg@976w_550h_1c_!web-home-carousel-cover.avif",
  },
  {
    id: 3,
    name: "Huyền Huyễn",
    image: "/assets/images/32a92ff7e101abb3260aa4941ece6ae55cbc8c26.jpg@976w_550h_1c_!web-home-carousel-cover.avif",
  },
  {
    id: 4,
    name: "Nhất Quỷ Nhì Ma",
    image: "/assets/images/32a92ff7e101abb3260aa4941ece6ae55cbc8c26.jpg@976w_550h_1c_!web-home-carousel-cover.avif",
  },
  {
    id: 5,
    name: "Tonic",
    image: "/assets/images/32a92ff7e101abb3260aa4941ece6ae55cbc8c26.jpg@976w_550h_1c_!web-home-carousel-cover.avif",
  },
  {
    id: 6,
    name: "Tonic",
    image: "/assets/images/32a92ff7e101abb3260aa4941ece6ae55cbc8c26.jpg@976w_550h_1c_!web-home-carousel-cover.avif",
  },
  {
    id: 7,
    name: "Tonic",
    image: "/assets/images/32a92ff7e101abb3260aa4941ece6ae55cbc8c26.jpg@976w_550h_1c_!web-home-carousel-cover.avif",
  },
  {
    id: 8,
    name: "Tonic",
    image: "/assets/images/32a92ff7e101abb3260aa4941ece6ae55cbc8c26.jpg@976w_550h_1c_!web-home-carousel-cover.avif",
  },
  {
    id: 9,
    name: "Tonic",
    image: "/assets/images/32a92ff7e101abb3260aa4941ece6ae55cbc8c26.jpg@976w_550h_1c_!web-home-carousel-cover.avif",
  },
  {
    id: 10,
    name: "Tonic",
    image: "/assets/images/32a92ff7e101abb3260aa4941ece6ae55cbc8c26.jpg@976w_550h_1c_!web-home-carousel-cover.avif",
  },
];

export function FestivalCarousel() {
  const [api, setApi] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onThumbClick = React.useCallback(
    (index) => {
      api.scrollTo(index);
    },
    [api],
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
          containScroll: "keepSnaps",
          dragFree: true,
        }}
        plugins={[Autoplay({ delay: 3000 })]}
        className="w-full max-w-full"
      >
        <CarouselContent>
          {items.map((item) => (
            <CarouselItem key={item.id}>
              <Card className="overflow-hidden border-none">
                <CardContent className="flex aspect-auto items-center justify-center p-0">
                  <img src={item.image} alt={item.name} />
                </CardContent>
              </Card>
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
