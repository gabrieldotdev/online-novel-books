import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/islands/primitives/carousel";
import Autoplay from "embla-carousel-autoplay";

import { ChiefCard } from "./islands/chief-card";

const data = [
  {
    id: 1,
    name: "Vô địch lĩnh vực, vô địch cuộc sống",
    href: "/chief-1",
    description: "Chief 1 description hello hehehe hahha sdfdgdsg",
    image: "/assets/images/600.webp",
    author: "Chief 1 author",
  },
  {
    id: 2,
    name: "Đạt cấp bậc cao nhất trong công ty",
    href: "/chief-2",
    description: "Chief 2 description",
    image: "/assets/images/600.webp",
    author: "Chief 1 author",
  },
  {
    id: 3,
    name: "Chief 3",
    href: "/chief-3",
    description: "Chief 3 description",
    image: "/assets/images/600.webp",
    author: "Chief 1 author",
  },
  {
    id: 4,
    name: "Chief 4",
    href: "/chief-4",
    description: "Chief 4 description",
    image: "/assets/images/600.webp",
    author: "Chief 1 author",
  },
  {
    id: 5,
    name: "Chief 5",
    href: "/chief-5",
    description: "Chief 5 description",
    image: "/assets/images/600.webp",
    author: "Chief 1 author",
  },
  {
    id: 6,
    name: "Chief 6",
    href: "/chief-6",
    description: "Chief 6 description",
    image: "/assets/images/600.webp",
    author: "Chief 1 author",
  },
  {
    id: 7,
    name: "Chief 7",
    href: "/chief-7",
    description: "Chief 7 description",
    image: "/assets/images/600.webp",
    author: "Chief 1 author",
  },
  {
    id: 8,
    name: "Chief 8",
    href: "/chief-8",
    description: "Chief 8 description",
    image: "/assets/images/600.webp",
    author: "Chief 1 author",
  },
  {
    id: 9,
    name: "Chief 9",
    href: "/chief-9",
    description: "Chief 9 description",
    image: "/assets/images/600.webp",
    author: "Chief 1 author",
  },
  {
    id: 10,
    name: "Chief 10",
    href: "/chief-10",
    description: "Chief 10 description",
    image: "/assets/images/600.webp",
    author: "Chief 1 author",
  },
];

export function ChiefCarousel() {
  const [api, setApi] = React.useState();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    return () => api.off("select", onSelect);
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
        plugins={[Autoplay({ playOnInit: true, delay: 5000 })]}
        className="flex h-96 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-b from-destructive/30 to-transparent"
      >
        <CarouselContent>
          {data.map((item) => (
            <CarouselItem key={item.id} className="basis-1/3 md:basis-1/4 lg:basis-1/6">
              <ChiefCard
                id={item.id}
                image={item.image}
                name={item.name}
                description={item.description}
                author={item.author}
                href={item.href}
                selectedIndex={selectedIndex}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
