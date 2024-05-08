import { Button } from "@/components/primitives/button";
import { CardContent, CardDescription, CardTitle } from "@/components/primitives/card";
import { Link } from "@/components/primitives/link";
import { Book } from "@/components/visuals/book";
import { IconImage } from "@/components/visuals/icon/icon-image";
import { IconNumber } from "@/components/visuals/icon/icon-number";
import { convertRankings } from "@/utils/convertRankings";

export function RankingListItem({ item, idx }) {
  return (
    <CardContent key={idx} className="flex items-center space-x-6 px-8 py-0">
      {idx < 3 ? (
        <IconImage src={convertRankings(idx + 1)} alt={`Top ${idx + 1}`} width={40} height={40} />
      ) : (
        <IconNumber number={idx < 9 ? `0${idx + 1}` : idx + 1} size={18} width={40} height={40} />
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
      <div className="inline-flex flex-col">
        <Link href={"/book/76347153"} target="_blank" variant="outline" size="lg" className="border-dashed">
          Chi tiết sách
        </Link>
        <Button size="sm" className="text-xs text-muted-foreground font-normal hover:text-destructive">
          Thêm vào giá sách
        </Button>
      </div>
    </CardContent>
  );
}
