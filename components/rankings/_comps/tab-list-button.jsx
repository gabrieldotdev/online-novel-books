import { Icons } from "@/components/icons";
import { Card, CardHeader, CardTitle } from "@/components/primitives/card";
import { Link } from "@/components/primitives/link";
import { Separator } from "@/components/primitives/separator";
import { TabsList, TabsTrigger } from "@/components/primitives/tabs";

export function TabListButton({ work, author, onClick }) {
  return (
    <Card className="border-none shadow-none bg-white">
      <CardHeader>
        <TabsList className="flex flex-col items-start space-x-0 space-y-6">
          <TabsTrigger
            value={work[0].value}
            className="font-medium data-[state=active]:text-destructive"
            onClick={() => onClick(work[0].value, 0)}
          >
            <Icons.flame size={20} className="mr-1" /> <span>{work[0].label}</span>
          </TabsTrigger>
          <Separator className="w-full" />
          <section className="w-full">
            <CardTitle className="text-lg font-medium">Danh sách tác phẩm</CardTitle>
            {work.slice(1).map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="w-full justify-start text-sm font-medium rounded-md px-6 py-2 data-[state=active]:text-destructive data-[state=active]:bg-destructive/10"
                onClick={() => onClick(tab.value, tab.id)}
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </section>
          <Separator className="w-full" />
          <section className="w-full">
            <CardTitle className="text-lg font-medium">Danh sách tác giả</CardTitle>
            {author.map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="w-full justify-start text-sm font-medium rounded-md px-6 py-2 data-[state=active]:text-destructive data-[state=active]:bg-destructive/10"
                onClick={() => onClick(tab.value, tab.id)}
              >
                {tab.label}
              </TabsTrigger>
            ))}
            <Link href="/rank" className="w-full group justify-start text-foreground/60 text-sm font-medium px-6 py-2">
              <span>Đang phát triển</span>
              <em className="ml-1 group-hover:animate-jump">🛠️</em>
            </Link>
          </section>
        </TabsList>
      </CardHeader>
    </Card>
  );
}
