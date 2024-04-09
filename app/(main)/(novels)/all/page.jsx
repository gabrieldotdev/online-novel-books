import { Toolbar } from "@/app/_islands/main/categories/menu-bar/toolbar";
import { TabWrapper } from "@/app/_islands/main/categories/tab-wrapper";
import CardDirectory from "@/app/_islands/main/categories/view-mode/card-directory";
import TableDirectory from "@/app/_islands/main/categories/view-mode/table-directory";
import { Link } from "@/core/link";
import { Separator } from "@/islands/primitives/separator";
import { TabsContent, TabsList, TabsTrigger } from "@/islands/primitives/tabs";
import { Boundary, boundaryVariants } from "@/islands/wrappers/boundary";
import { SegmentBoundary } from "@/islands/wrappers/segment-boundary";
import { Shell } from "@/islands/wrappers/shell-variants";
import { cls } from "@/utils";
import { ListMinus, TableCellsMerge } from "lucide-react";

const allComics = [
  {
    id: 1,
    genre: "Xuyên không",
    novelGenre: "Xuyên không đại lục huyền huyễn",
    imageUrl: "/assets/images/600.webp",
    novelTitle: "Săn lùng những người bất tử và ác quỷ",
    description: "Một câu chuyện về sự sống sót và tìm kiếm ý nghĩa của cuộc sống.",
    latestChapter: "Chapter 1.245: Ý chí của người bất tử",
    wordCount: "1.234.567",
    author: "Wxsdev",
    lastUpdated: "2 giờ trước",
  },
  {
    id: 2,
    genre: "Tưởng tượng",
    novelGenre: "Các lục địa ở thế giới khác",
    imageUrl: "/assets/images/600.webp",
    novelTitle: "Vòng tròn định mệnh",
    description: "Thế giới bí ẩn phần hai. Năm 1368, vào cuối tháng bảy, màu đỏ sẽ rơi từ trời xuống.",
    latestChapter: "Chapter 323: Sinh mệnh và cái chết",
    wordCount: "123,456",
    author: "Hoàng Thái Ninh",
    lastUpdated: "1 tháng trước",
  },
  {
    id: 2,
    genre: "Tưởng tượng",
    novelGenre: "Các lục địa ở thế giới khác",
    imageUrl: "/assets/images/600.webp",
    novelTitle: "Từ lúc bắt đầu, tôi vô địch trong lĩnh vực này",
    description: "Trong lĩnh vực này, tôi là người mạnh nhất.",
    latestChapter: "Chapter 119: Làm sao để trở thành người mạnh nhất?",
    wordCount: "324.532",
    author: "Giang Thần",
    lastUpdated: "15 phút trước",
  },
];

export default function All() {
  const valTable = "table";
  const valCard = "card";

  return (
    <Shell as="div">
      <Boundary className="flex">
        <SegmentBoundary border="solid" className={cls("hidden lg:block flex-none w-36 min-w-52")}>
          <Link href="/about">
            <h3>山海提灯</h3>
          </Link>
        </SegmentBoundary>
        <SegmentBoundary border="none" className="w-full">
          <TabWrapper defaultValue={valTable}>
            <Toolbar>
              <TabsList className="bg-transparent">
                <TabsTrigger value={valTable}>
                  <ListMinus size={16} />
                </TabsTrigger>
                <Separator orientation="vertical" className="h-3" />
                <TabsTrigger value={valCard}>
                  <TableCellsMerge size={15} />
                </TabsTrigger>
              </TabsList>
            </Toolbar>
            <TabsContent value={valTable}>
              <TableDirectory data={allComics} />
            </TabsContent>
            <TabsContent value={valCard}>
              <CardDirectory data={allComics} />
            </TabsContent>
          </TabWrapper>
        </SegmentBoundary>
      </Boundary>
    </Shell>
  );
}
