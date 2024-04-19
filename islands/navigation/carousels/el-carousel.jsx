import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/islands/primitives/carousel";
import Autoplay from "embla-carousel-autoplay";

const data = [
  {
    id: 1,
    name: "Chief 1",
    image: "https://via.placeholder.com/150",
    description: "Chief 1 description",
    link: "/chief-1",
  },
  {
    id: 2,
    name: "Chief 2",
    image: "https://via.placeholder.com/150",
    description: "Chief 2 description",
    link: "/chief-2",
  },
  {
    id: 3,
    name: "Chief 3",
    image: "https://via.placeholder.com/150",
    description: "Chief 3 description",
    link: "/chief-3",
  },
  {
    id: 4,
    name: "Chief 4",
    image: "https://via.placeholder.com/150",
    description: "Chief 4 description",
    link: "/chief-4",
  },
  {
    id: 5,
    name: "Chief 5",
    image: "https://via.placeholder.com/150",
    description: "Chief 5 description",
    link: "/chief-5",
  },
  {
    id: 6,
    name: "Chief 6",
    image: "https://via.placeholder.com/150",
    description: "Chief 6 description",
    link: "/chief-6",
  },
  {
    id: 7,
    name: "Chief 7",
    image: "https://via.placeholder.com/150",
    description: "Chief 7 description",
    link: "/chief-7",
  },
  {
    id: 8,
    name: "Chief 8",
    image: "https://via.placeholder.com/150",
    description: "Chief 8 description",
    link: "/chief-8",
  },
  {
    id: 9,
    name: "Chief 9",
    image: "https://via.placeholder.com/150",
    description: "Chief 9 description",
    link: "/chief-9",
  },
  {
    id: 10,
    name: "Chief 10",
    image: "https://via.placeholder.com/150",
    description: "Chief 10 description",
    link: "/chief-10",
  },
];

export function ElCarousel() {
  // const [selectedIndex, setSelectedIndex] = React.useState(0);

  // const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
  //   containScroll: "keepSnaps",
  //   dragFree: true,
  // });

  // const onThumbClick = React.useCallback(
  //   (index) => {
  //     if (!emblaApi || !emblaThumbsApi) return;
  //     emblaApi.scrollTo(index);
  //   },
  //   [emblaApi, emblaThumbsApi],
  // );

  // const onSelect = React.useCallback(() => {
  //   if (!emblaApi || !emblaThumbsApi) return;
  //   setSelectedIndex(emblaApi.selectedScrollSnap());
  //   emblaThumbsApi.scrollTo(emblaApi.selectedScrollSnap());
  // }, [emblaApi, emblaThumbsApi, setSelectedIndex]);

  // React.useEffect(() => {
  //   if (!emblaApi) return;
  //   onSelect();
  //   emblaApi.on("select", onSelect);
  //   emblaApi.on("reInit", onSelect);
  // }, [emblaApi, onSelect]);
  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
        containScroll: "keepSnaps",
        dragFree: true,
      }}
      plugins={[Autoplay({ playOnInit: true, delay: 3000 })]}
      className="w-full max-w-full h-96 content-center rounded-xl bg-gradient-to-b from-destructive/30 to-transparent"
    >
      <CarouselContent>
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/6">
            {index + 1}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
