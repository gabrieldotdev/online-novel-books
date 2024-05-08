import { Icons } from "@/components/icons";
import { TestPaginate } from "@/components/navigation/paginations/test-paginate";
import { Card, CardFooter } from "@/components/primitives/card";
import { Link } from "@/components/primitives/link";

import { RankingListItem } from "../_comps/ranking-list-item";

export function Bestseller({ data, type }) {
  return (
    <Card
      className="cursor-pointer shrink-0 border-none shadow-none w-full pt-32"
      style={{
        backgroundImage: `url('/assets/ranks/i1896x310/${type}.png')`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
      }}
    >
      <section className="space-y-8">
        {data.slice(0, 20).map((item, idx) => (
          <RankingListItem key={item.id} item={item} idx={idx} />
        ))}
      </section>
      <CardFooter className="justify-center mt-10">
        <TestPaginate />
        {/* <Link href="/rank" className="group space-x-0.5 text-xs font-normal text-muted-foreground">
          <span>Nhiều hơn</span>
          <Icons.chevronRight size={14} className="group-hover:animate-jumpR" />
        </Link> */}
      </CardFooter>
    </Card>
  );
}
