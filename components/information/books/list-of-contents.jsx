import { Icons } from "@/components/icons";
import { Button } from "@/components/primitives/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/primitives/card";

import { ContentItem } from "./_comps/content-item";

export function ListOfContents() {
  return (
    <Card className="border-none shadow-none bg-white">
      <CardHeader className="flex flex-row items-center justify-between space-x-2 space-y-0">
        <CardTitle className="text-2xl shrink-0">Thư mục</CardTitle>
        <Button size="sm" className="hover:bg-order">
          <Icons.sparkles size={16} className="mr-1" />
          Theo thứ tự ngược lại
        </Button>
      </CardHeader>

      <CardContent>
        <ContentItem />
      </CardContent>
    </Card>
  );
}
