"use client";

import { Card, CardContent, CardDescription, CardTitle } from "@/components/primitives/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/primitives/carousel";
import { Link } from "@/components/primitives/link";
import { Book } from "@/components/visuals/book";
import { useCarousel } from "@/hooks/use-carousel";
import { cls } from "@/utils";

import { ElItem } from "./_comps/el-item";

const data = [
  {
    id: 73254713,
    name: "Thanh trư ẩn cư",
    image: "https://static.zongheng.com/upload/recommend/75/36/7536bcb9f60f08730ad15d913c41ccaf.jpeg",
  },
  {
    id: 46836486,
    name: "Chư thiên vạn giới",
    image: "https://static.zongheng.com/upload/recommend/04/dd/04dd487bc2c7029ca7c21daa0c2442c9.jpeg",
  },
  {
    id: 2123214,
    name: "Thanh đồng đại lục",
    image: "https://static.zongheng.com/upload/recommend/b0/f3/b0f36ea45b22703ba1f8a59d6b03beb2.jpeg",
  },
  {
    id: 346437,
    name: "Vô địch đan dược sư",
    image: "https://static.zongheng.com/upload/recommend/75/36/7536bcb9f60f08730ad15d913c41ccaf.jpeg",
  },
  {
    id: 1982464,
    name: "Thiên hạ đệ nhất sư",
    image: "https://static.zongheng.com/upload/recommend/b0/f3/b0f36ea45b22703ba1f8a59d6b03beb2.jpeg",
  },
  {
    id: 32343423,
    name: "Đại chiến thần giới",
    image: "https://static.zongheng.com/upload/recommend/75/36/7536bcb9f60f08730ad15d913c41ccaf.jpeg",
  },
  {
    id: 7667975646,
    name: "Thể biến dị kỳ",
    image: "https://static.zongheng.com/upload/recommend/04/dd/04dd487bc2c7029ca7c21daa0c2442c9.jpeg",
  },
  {
    id: 1246479000,
    name: "Huyền quang đại lục",
    image: "https://static.zongheng.com/upload/recommend/b0/f3/b0f36ea45b22703ba1f8a59d6b03beb2.jpeg",
  },
];

export function ElCarousel() {
  const { setApi, options, plugins, selectedIndex, handleSelect } = useCarousel({ delay: 10000 });

  return (
    <>
      <Carousel setApi={setApi} opts={options} plugins={plugins} className="w-full max-w-full">
        <CarouselContent>
          {data.map((item, idx) => (
            <CarouselItem key={item.id} onClick={() => handleSelect(idx)} className="basis-1/3s">
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
      <Card className="border-none shadow-none bg-transparent mt-4">
        <CardContent className="flex flex-col flex-grow px-0 pb-0 space-y-2">
          <Link href="/">
            <CardTitle className="text-lg hover:text-destructive line-clamp-2">{data[selectedIndex]?.name}</CardTitle>
          </Link>
          <Link href="/">
            <CardDescription className="text-sm font-medium hover:text-destructive text-foreground/80">
              Wxs Dev
            </CardDescription>
          </Link>
          <CardDescription className="text-center text-sm line-clamp-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic nisi commodi aliquam modi nihil magnam
            expedita placeat, dolor incidunt, eaque quo aspernatur. Voluptates qui reiciendis facere a illo autem porro.
          </CardDescription>
        </CardContent>
      </Card>
    </>
  );
}
