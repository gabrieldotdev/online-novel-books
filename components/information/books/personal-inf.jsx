import { UserAvatar } from "@/components/account/user-avatar";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/primitives/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/primitives/card";
import { Link } from "@/components/primitives/link";
import { Separator } from "@/components/primitives/separator";
import { cls } from "@/utils";

export function PersonalInf() {
  return (
    <Card
      className={cls(
        "hidden lg:flex flex-col items-center space-y-4 w-72 p-4",
        "border-none shadow-none bg-gradient-to-b from-[#fffbf8] via-white to-white",
      )}
    >
      <CardHeader className="p-0 space-y-4">
        <figure className="relative">
          <UserAvatar src="/assets/images/600.webp" alt="Wxs Dev" fallback="N" className="w-24 h-24" />
          <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2" size="large">
            <span className="font-bold">Lv.5</span>
          </Badge>
        </figure>
        <CardTitle className="flex items-center justify-center space-x-2">
          <Link href="#" className="text-foreground/90">
            Wxs Dev
          </Link>
          <Icons.star size="16" />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-center">Đạt Lv.5 danh hiệu "Tác giả nổi tiếng"</CardDescription>
      </CardContent>
      <CardFooter className="p-0 flex">
        <span className="text-center">
          <CardDescription className="text-foreground/80">Tổng số tác phẩm</CardDescription>
          <CardTitle className="text-md text-foreground/90">20</CardTitle>
        </span>
        <Separator orientation="vertical" className="mx-2 h-8" />
        <span className="text-center">
          <CardDescription className="text-foreground/80">Tổng số tác phẩm</CardDescription>
          <CardTitle className="text-md text-foreground/90">20</CardTitle>
        </span>
        <Separator orientation="vertical" className="mx-2 h-8" />
        <span className="text-center">
          <CardDescription className="text-foreground/80">Tổng số tác phẩm</CardDescription>
          <CardTitle className="text-md text-foreground/90">20</CardTitle>
        </span>
      </CardFooter>
    </Card>
  );
}
