import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/primitives/card";
import { Link } from "@/components/primitives/link";
import { labelVariants } from "@/themes/twv";

// Đề xuất tương tự khác
export function SimilarRecommendations() {
  return (
    <Card className="border-none shadow-none bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-x-2 space-y-0">
        <CardTitle className="text-2xl shrink-0">Đề xuất tương tự</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Link key={item.id} variant="outline" href={item.href} size="sm" className={labelVariants()}>
            {item.name}
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}

const items = [
  {
    id: 1,
    name: "Mọt sách",
    href: "/",
  },
  {
    id: 2,
    name: "Hệ thống",
    href: "/",
  },
  {
    id: 3,
    name: "Ma quỷ",
    href: "/",
  },
  {
    id: 4,
    name: "Ma đạo tổ sư",
    href: "/",
  },
  {
    id: 5,
    name: "Nhân sinh nếu như lần đầu gặp gỡ",
    href: "/",
  },
  {
    id: 6,
    name: "Chuyển sinh",
    href: "/",
  },
  {
    id: 7,
    name: "Tiên hiệp",
    href: "/",
  },
  {
    id: 8,
    name: "Huyền huyễn",
    href: "/",
  },
  {
    id: 9,
    name: "Tưởng tượng khoa học",
    href: "/",
  },
  {
    id: 10,
    name: "Hài hước",
    href: "/",
  },
  {
    id: 11,
    name: "Kỳ ảo",
    href: "/",
  },
  {
    id: 12,
    name: "Ngôn tình",
    href: "/",
  },
  {
    id: 13,
    name: "Đam mỹ",
    href: "/",
  },
  {
    id: 14,
    name: "Ngược",
    href: "/",
  },
  {
    id: 15,
    name: "Trọng sinh",
    href: "/",
  },
  {
    id: 16,
    name: "Cổ đại",
    href: "/",
  },
  {
    id: 17,
    name: "Hiện đại",
    href: "/",
  },
  {
    id: 18,
    name: "Xuyên không",
    href: "/",
  },
  {
    id: 19,
    name: "Võng du",
    href: "/",
  },
  {
    id: 20,
    name: "Đô thị",
    href: "/",
  },
  {
    id: 21,
    name: "Trinh thám",
    href: "/",
  },
  {
    id: 22,
    name: "Hành động",
    href: "/",
  },
  {
    id: 23,
    name: "Khoa học viễn tưởng",
    href: "/",
  },
  {
    id: 24,
    name: "Tâm lý",
    href: "/",
  },
  {
    id: 25,
    name: "Huyền bí",
    href: "/",
  },
  {
    id: 26,
    name: "Thần thoại",
    href: "/",
  },
  {
    id: 27,
    name: "Lịch sử",
    href: "/",
  },
  {
    id: 28,
    name: "Thể thao",
    href: "/",
  },
  {
    id: 29,
    name: "Văn học",
    href: "/",
  },
  {
    id: 30,
    name: "Kinh dị",
    href: "/",
  },
];
