import { CardContent, CardDescription, CardTitle } from "@/components/primitives/card";
import { Book } from "@/components/visuals/book";
import { IconImage } from "@/components/visuals/icon/icon-image";
import { IconNumber } from "@/components/visuals/icon/icon-number";
import { cls } from "@/utils";
import { convertRankings } from "@/utils/convertRankings";

export function RankingItem({ item, idx, hovered, handleHover }) {
  return (
    <CardContent key={item.id} className="flex py-0" onMouseEnter={() => handleHover(item.id)}>
      {idx < 3 ? (
        <IconImage src={convertRankings(idx + 1)} alt={`Top ${idx + 1}`} />
      ) : (
        <IconNumber number={idx < 9 ? `0${idx + 1}` : idx + 1} />
      )}

      {hovered !== item.id && (
        // {/* Thông tin cơ bản */}
        <div className={cls("flex flex-1 justify-between", "items-center")}>
          <CardTitle className="leading-8 font-medium line-clamp-1">{item.name}</CardTitle>
          <CardDescription className="text-xs">{item.view}</CardDescription>
        </div>
      )}

      {(hovered === item.id || (idx === 0 && hovered === null)) && (
        // {/* Thông tin đầy đủ */}
        <div className={cls("flex flex-1 justify-between", "items-start")}>
          <div className="flex flex-col space-y-1">
            <CardTitle className="font-medium leading-8 hover:text-destructive line-clamp-1">{item.name}</CardTitle>
            <div className="flex flex-col space-y-0.5">
              <CardDescription className="text-xs hover:text-destructive">{item.category}</CardDescription>
              <CardDescription className="text-xs">{item.view} lượt truy cập</CardDescription>
            </div>
          </div>
          <Book src="/assets/images/600.webp" size="zs" />
        </div>
      )}
    </CardContent>
  );
}
