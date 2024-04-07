"use client";

import * as React from "react";
import Image from "next/image";
import { cls } from "@/utils";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import { Button } from "../primitives/button";

export default function SiteCarousel() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ playOnInit: true, delay: 2000 })]);

  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = React.useCallback(
    (index) => {
      if (!emblaApi || !emblaThumbsApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi, emblaThumbsApi],
  );

  const onSelect = React.useCallback(() => {
    if (!emblaApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap());
  }, [emblaApi, emblaThumbsApi, setSelectedIndex]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="max-w-[48rem] m-auto">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex ml-[calc(1rem) * -1]">
          {Array.from(Array(10).keys()).map((index) => (
            <Image
              src="/assets/images/32a92ff7e101abb3260aa4941ece6ae55cbc8c26.jpg@976w_550h_1c_!web-home-carousel-cover.avif"
              key={index}
              alt=""
              width={400}
              height={200}
              style={{ width: "auto", height: "auto" }}
              className="object-cover w-full h-full"
            />
          ))}
        </div>
      </div>
      <div className="mt-[0.8rem]">
        <div className="overflow-hidden" ref={emblaThumbsRef}>
          <div className="flex flex-row ml-[calc(0.8rem)*-1]">
            {Array.from(Array(10).keys()).map((_, index) => (
              <Button
                key={index}
                className={cls(
                  "flex-shrink-0 w-8 h-8 bg-white border border-gray-300",
                  selectedIndex === index && "bg-red-400",
                )}
                onClick={() => onThumbClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
