import { Toolbar } from "@/app/_islands/categories/menu-bar/toolbar";
import { TabWrapper } from "@/app/_islands/categories/tab-wrapper";
import CardDirectory from "@/app/_islands/categories/view-mode/card-directory";
import TableDirectory from "@/app/_islands/categories/view-mode/table-directory";
import { Link } from "@/core/link";
import { Separator } from "@/islands/primitives/separator";
import { TabsContent, TabsList, TabsTrigger } from "@/islands/primitives/tabs";
import { BaseShell, Shell } from "@/islands/wrappers/shell-variants";
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
    description: "Thế giới bí ẩn phần hai. N8, vào cuối tháng bảy, màu đỏ sẽ rơi từ trời xuống.",
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

// async function getData() {
//   const res = await fetch(`${env.DATABASE_URL}/novels`);
//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }
//   return res.json();
// }

export default async function All() {
  // const data = await getData();
  const valTable = "table";
  const valCard = "card";

  return (
    <BaseShell as="div" className="flex py-0 lg:py-0">
      <Shell variant="compact" className={cls("hidden lg:block flex-none min-w-60 w-60")}>
        <Link href="/about">
          <h3>山海提灯</h3>
        </Link>
      </Shell>
      <Shell variant="compact">
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
      </Shell>
    </BaseShell>
  );
}
