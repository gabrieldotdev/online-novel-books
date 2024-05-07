"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/primitives/carousel";
import { useCarousel } from "@/hooks/use-carousel";
import { cls } from "@/utils";

import { ElItem } from "./_comps/el-item";

const data = [
  {
    id: 73254713,
    name: "Thanh trư ẩn cư",
    image: "/assets/images/600.webp",
  },
  {
    id: 46836486,
    name: "Chư thiên vạn giới",
    image: "/assets/images/600.webp",
  },
  {
    id: 2123214,
    name: "Thanh đồng đại lục",
    image: "/assets/images/600.webp",
  },
  {
    id: 346437,
    name: "Vô địch đan dược sư",
    image: "/assets/images/600.webp",
  },
  {
    id: 1982464,
    name: "Thiên hạ đệ nhất sư",
    image: "/assets/images/600.webp",
  },
  {
    id: 32343423,
    name: "Đại chiến thần giới",
    image: "/assets/images/600.webp",
  },
  {
    id: 7667975646,
    name: "Thể biến dị kỳ",
    image: "/assets/images/600.webp",
  },
  {
    id: 1246479000,
    name: "Huyền quang đại lục",
    image: "/assets/images/600.webp",
  },

  {
    id: 11121333,
    name: "Thiên hạ đệ nhất sư",
    image: "/assets/images/600.webp",
  },
  {
    id: 222315,
    name: "Đại chiến thần giới",
    image: "/assets/images/600.webp",
  },
  {
    id: 3465343733,
    name: "Thể biến dị kỳ",
    image: "/assets/images/600.webp",
  },
  {
    id: 23513600,
    name: "Huyền quang đại lục",
    image: "/assets/images/600.webp",
  },
];

export function ChiefCarousel() {
  const { setApi, options, plugins, selectedIndex, handleSelect } = useCarousel({ delay: 10000 });

  return (
    <Carousel setApi={setApi} opts={options} plugins={plugins} className="w-full max-w-full">
      <CarouselContent>
        {data.map((item, idx) => (
          <CarouselItem key={item.id} onClick={() => handleSelect(idx)} className="basis-1/6">
            <div
              className={cls(
                "transform transition-transform duration-500",
                idx === selectedIndex ? "order-1" : "translate-y-3",
              )}
            >
              <ElItem item={item} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
