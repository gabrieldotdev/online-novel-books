import { FriendsList } from "@/components/information/peoples/friends-list";
import { VemPeople } from "@/components/information/peoples/vem-people";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/primitives/card";
import { Link } from "@/components/primitives/link";
import { Separator } from "@/components/primitives/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/primitives/tabs";
import { Book } from "@/components/visuals/book";
import { Shell } from "@/components/wrappers/shell-variants";

export default function Page({ params }) {
  const { peopleId } = params;
  console.log(params);

  return (
    <Shell as="div" variant="none" className="max-w-[1200px] mx-auto">
      <VemPeople />
      <section className="flex items-start w-[inherit] gap-x-4">
        <div className="flex-grow">
          <Card className="border-none shadow-none bg-white">
            <Tabs defaultValue="booklists">
              <CardHeader className="flex flex-row items-center py-0">
                <TabsList className="space-x-4">
                  <TabsTrigger
                    value="booklists"
                    className="h-16 text-base font-semibold data-[state=active]:text-destructive"
                  >
                    Danh sách tác phẩm
                    <span className="text-xs text-gray-400">（0）</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="bookshelf"
                    className="h-16 text-base font-semibold data-[state=active]:text-destructive"
                  >
                    Đang đọc
                    <span className="text-xs text-gray-400">（0）</span>
                  </TabsTrigger>
                </TabsList>
              </CardHeader>
              <Separator />
              <CardContent>
                <TabsContent value="booklists" className="space-y-6">
                  {Array.from({ length: 9 }).map((_, idx) => (
                    <Card key={idx} className="flex items-center border-none shadow-none bg-transparent">
                      <Book src="/assets/images/600.webp" size="sm" />
                      <CardHeader className="space-y-2.5 py-0">
                        <CardTitle className="line-clamp-1">Người siêng năng cấp thần</CardTitle>
                        <CardDescription className="text-xs">Kết thúc | Tưởng tượng </CardDescription>
                        {/* Description */}
                        <CardDescription className="flex-grow line-clamp-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quisquam repellendus,
                          quidem possimus nam, accusantium quaerat sunt delectus atque natus veniam temporibus. Ipsam
                          voluptate harum eveniet tenetur ea delectus nostrum.
                        </CardDescription>
                        {/* Chapter */}
                        <div className="flex items-center justify-between">
                          <CardDescription className="line-clamp-1 text-xs font-medium">
                            <span>Chương mới nhất: </span>
                            <span className="text-foreground">
                              Chương 2796: Cuốn sách mới "Một mình một kiếm" được phát hành!!
                            </span>
                          </CardDescription>
                          <CardDescription className="shrink-0 text-xs">2024-09-01 12:00:00</CardDescription>
                        </div>
                      </CardHeader>
                      <Link href="/books/1" size="sm" variant="outline" className="flex-grow border-destructive">
                        <CardDescription className="text-xs text-destructive">Đọc ngay bây giờ</CardDescription>
                      </Link>
                    </Card>
                  ))}
                </TabsContent>
                <TabsContent value="bookshelf" className="space-y-6">
                  {Array.from({ length: 2 }).map((_, idx) => (
                    <Card key={idx} className="flex items-center border-none shadow-none bg-transparent">
                      <Book src="/assets/images/600.webp" size="sm" />
                      <CardHeader className="space-y-2.5 py-0">
                        <CardTitle className="line-clamp-1">Người siêng năng cấp thần</CardTitle>
                        <CardDescription className="text-xs">Đang phát hành | Tưởng tượng </CardDescription>
                        {/* Description */}
                        <CardDescription className="flex-grow line-clamp-1">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quisquam repellendus,
                          quidem possimus nam, accusantium quaerat sunt delectus atque natus veniam temporibus. Ipsam
                          voluptate harum eveniet tenetur ea delectus nostrum.
                        </CardDescription>
                        {/* Chapter */}
                        <div className="flex items-center justify-between">
                          <CardDescription className="line-clamp-1 text-xs font-medium">
                            <span>Chương mới nhất: </span>
                            <span className="text-foreground">
                              Chương 2796: Cuốn sách mới "Một mình một kiếm" được phát hành!!
                            </span>
                          </CardDescription>
                          <CardDescription className="shrink-0 text-xs">2024-09-01 12:00:00</CardDescription>
                        </div>
                      </CardHeader>
                      <Link href="/books/1" size="sm" variant="outline" className="flex-grow border-destructive">
                        <CardDescription className="text-xs text-destructive">Đọc ngay bây giờ</CardDescription>
                      </Link>
                    </Card>
                  ))}
                </TabsContent>
              </CardContent>
            </Tabs>
          </Card>
        </div>
        <div className="w-72 shrink-0 space-y-4">
          <FriendsList />
        </div>
      </section>
    </Shell>
  );
}
