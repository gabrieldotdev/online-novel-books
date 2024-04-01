"use client";

import * as React from "react";
import { CarouselCards } from "@/islands/navigation/carousels/carousel-cards";
import { cls } from "@/utils";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

import CarouselSwitcherButton from "./carousels/carousel-switcher-button";

const carousels = [
  {
    title: "Your call has been confirmed.",
    label: "Tuyệt thế mỹ nam",
    imageUrl: "/images/test_carousel.jpg",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    label: "Cửa châu đại lục",
    imageUrl: "/images/test_carousel.jpg",
    description: "1 hour ago",
  },
  {
    title: "Your call has been confirmed.",
    label: "Alo sư phụ",
    imageUrl: "/images/test_carousel.jpg",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    label: "Hệ thống cấp bậc",
    imageUrl: "/images/test_carousel.jpg",
    description: "1 hour ago",
  },
  {
    title: "Your call has been confirmed.",
    label: "Đại chiến thần thú",
    imageUrl: "/images/test_carousel.jpg",
    description: "1 hour ago",
  },
];

export function SiteCarousel() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const autoplayRef = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplayRef.current,
  ]);

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <section className="mx-auto flex-auto justify-center" ref={emblaRef}>
      <div className="mx-auto flex">
        {carousels.map((carousel, index) => (
          <CarouselCards
            key={index}
            title={carousel.title}
            description={carousel.description}
            imageUrl={carousel.imageUrl}
            selectedIndex={selectedIndex === index}
          />
        ))}
      </div>
      {/* // <nav className="flex justify-center mt-4 space-x-3">
    //   {carousels.map((_, index) => (
    //     <CarouselSwitcherButton
    //       key={index}
    //       label={_.label}
    //       selectedIndex={selectedIndex === index}
    //       handleScrollTo={() => emblaApi.scrollTo(index)}
    //     />
    //   ))}
    // </nav> */}
    </section>
  );
}
