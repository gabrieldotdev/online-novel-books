import { Button } from "@/components/primitives/button";
import { CardContent, CardDescription, CardTitle } from "@/components/primitives/card";
import { Link } from "@/components/primitives/link";
import { Book } from "@/components/visuals/book";
import { IconImage } from "@/components/visuals/icon/icon-image";
import { IconNumber } from "@/components/visuals/icon/icon-number";
import { convertRankings } from "@/utils/convertRankings";

export function RankingListItem({ item, rank }) {
  return (
    <CardContent key={item.id} className="flex items-center space-x-6 px-8 py-0">
      {rank < 4 ? (
        <IconImage src={convertRankings(rank)} alt={`Top ${rank}`} width={40} height={40} />
      ) : (
        <IconNumber number={rank < 10 ? `0${rank}` : rank} size={18} width={40} height={40} />
      )}

      <div key={item.id} className="flex flex-1 items-center space-x-4">
        <Book src="/assets/images/600.webp" size="sm" />
        <div className="flex flex-col flex-grow space-y-1">
          <CardTitle className="leading-6 line-clamp-1">{item.name}</CardTitle>
          <CardDescription className="text-xs hover:text-destructive">
            <span>{item.category}</span>
            &nbsp;&sdot;&nbsp;
            <span>Được đăng nhiều kỳ</span>
          </CardDescription>
          <CardDescription className="font-medium line-clamp-2">
            {item.description ??
              "Một cuốn sách hay, một cuốn sách đáng đọc, một cuốn sách đáng mua, một cuốn sách đáng sở hữu."}
          </CardDescription>
          <CardDescription className="text-xs">
            Chương mới nhất:&nbsp;&quot;Chương 734:&quot;&nbsp;Siêu cấp cơ giáp
          </CardDescription>
        </div>
      </div>
      <div className="inline-flex flex-col items-center">
        <CardDescription className="text-xs text-muted-foreground">
          <span className="font-semibold text-base text-destructive">32752</span> Truy cập
        </CardDescription>
        <Link href={"/book/76347153"} target="_blank" size="lg" className="bg-destructive/10 text-destructive">
          Chi tiết sách
        </Link>
        <Button size="sm" className="text-xs text-muted-foreground font-normal hover:text-destructive">
          Thêm vào giá sách
        </Button>
      </div>
    </CardContent>
  );
}
