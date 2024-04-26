import Image from "next/image";
import { UserAvatar } from "@/components/account/user-avatar";
import { Icons } from "@/components/icons";
import { HonorImage, HonorItem } from "@/components/information/books/_comps/honor-item";
import { AspectRatio } from "@/components/primitives/aspect-ratio";
import { Button } from "@/components/primitives/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/primitives/card";
import { Separator } from "@/components/primitives/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/primitives/tabs";
import { Shell } from "@/components/wrappers/shell-variants";
import { buttonVariants } from "@/themes/twv";
import { cls } from "@/utils";

export default function ProfilePage({ params }) {
  const { profileId } = params;
  console.log(params);

  return (
    <Shell as="div" variant="none" className="max-w-[1200px] mx-auto">
      <Card
        className={cls(
          "group flex overflow-hidden border-none shadow-none bg-transparent",
          "md:h-[212px] h-[150px] p-6",
        )}
        style={{
          backgroundImage: "url('https://revo.zongheng.com/home/2024/shen_bg.a3e33d75.jpg')",
          backgroundSize: "100% 100%",
        }}
      >
        <figure className="flex flex-col items-center justify-between">
          <UserAvatar src="/assets/images/600.webp" alt="Wxs Dev" fallback="N" className="w-24 h-24" />
          <Button size="sm" className="rounded-2xl bg-background hidden group-hover:block">
            Theo dõi
          </Button>
        </figure>
        <CardHeader className="flex-grow justify-start py-0 space-y-3">
          <div className="flex justify-between items-center">
            <CardTitle className="text-brown text-2xl">Hoang Thai Ninh</CardTitle>
            <CardDescription className="text-brown opacity-80">Joined Vibeverse.com on July 16, 2014</CardDescription>
          </div>
          {/* Honor // Danh hiệu */}
          <div className="flex items-center space-x-2">
            <span
              className="flex items-center h-[22px] rounded-full space-x-1 pl-2 pr-2"
              style={{ background: "rgba(28, 28, 28, 0.05)" }}
            >
              <em className="p-0.5 rounded-full bg-background">
                <HonorImage
                  src="https://qdfepccdn.qidian.com/www.qidian.com/images/book/badges/rongyao_2_v3.png"
                  width={15}
                  height={15}
                />
              </em>
              <CardDescription className="text-xs text-brown font-medium">Kí giả vương</CardDescription>
            </span>
            <span
              className="flex items-center h-[22px] rounded-full space-x-1 pl-2 pr-2"
              style={{ background: "rgba(28, 28, 28, 0.05)" }}
            >
              <em className="p-0.5 rounded-full bg-background">
                <HonorImage
                  src="https://qdfepccdn.qidian.com/www.qidian.com/images/book/badges/rongyao_2_v3.png"
                  width={14}
                  height={14}
                />
              </em>
              <CardDescription className="text-xs text-brown font-medium">HLV Đại Thần</CardDescription>
            </span>
          </div>
          {/* ???? */}
          <div className="flex flex-grow">???????</div>
          {/* Introduction // Giới thiệu */}
          <div className="flex items-center space-x-2">
            <CardTitle className="shrink-0 text-sm text-brown">Giới thiệu</CardTitle>
            <CardDescription className="text-brown line-clamp-1">
              Hiện tại đang làm việc tại công ty FPT Software. Tôi là một người yêu thích công nghệ và muốn chia sẻ kiến
              thức của mình với mọi người. Hiện tại đang làm việc tại công ty FPT Software. Tôi là một người yêu thích
              công nghệ và muốn chia sẻ kiến thức của mình với mọi người.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
      <Card className="border-none shadow-none bg-white w-full">
        <Tabs defaultValue="account" className="w-[400px]">
          <CardHeader className="flex flex-row items-center space-y-0">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
          </CardHeader>
          <Separator />
          <CardContent>
            <TabsContent value="account">Make changes to your account here.</TabsContent>
            <TabsContent value="password">Change your password here.</TabsContent>
          </CardContent>
        </Tabs>
      </Card>
    </Shell>
  );
}
