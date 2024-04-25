import Link from "next/link";
import { Icons } from "@/components/icons";
import { Button } from "@/components/primitives/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/primitives/card";
import { Book } from "@/components/visuals/book";

export function NovelItem() {
  return (
    <Card className="group relative border-none shadow-none hover:bg-gray-100 p-0">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 space-x-2 p-2">
        <Book src="/assets/images/600.webp" size="zs" />
        <div className="space-y-1.5 overflow-hidden">
          <CardTitle className="truncate">Huyết quỷ ma đa chuyển sinh</CardTitle>
          <CardDescription className="leading-4 line-clamp-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut magnam placeat amet facere itaque ex velit id,
            laboriosam rem delectus aspernatur optio similique, excepturi illo dolor ipsam deserunt cupiditate ea.
          </CardDescription>
        </div>
        <div className="hidden group-hover:block">
          <Button size="chip" className="absolute top-2 right-2 bg-gray-100 hover:shadow-md">
            <Icons.bookMarked size={16} className="text-gray-500" />
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}
