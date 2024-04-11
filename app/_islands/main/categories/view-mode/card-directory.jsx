import { Link } from "@/core/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/islands/account/avatar";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/islands/primitives/card";
import { Separator } from "@/islands/primitives/separator";
import { labelVariants } from "@/islands/primitives/tw-variants/tv";
import { RegularBook } from "@/islands/visuals/books/regular-book";
import { cls } from "@/utils";

export default function CardDirectory({ data, className, ...cardProps }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {data.map((comic) => (
        <Card key={comic.id} className={cls("flex items-center px-4 py-1", className)} {...cardProps}>
          <RegularBook imageUrl={"/assets/images/600.webp"} alt={comic.novelTitle} />
          <div className="flex flex-1 flex-col space-y-2 overflow-y-auto h-full p-4">
            <CardHeader className="p-0">
              <CardTitle className={cls("truncate", labelVariants({ size: "md" }))}>{comic.title}</CardTitle>
              <div className="inline-flex items-center">
                <Avatar className="w-4 h-4">
                  <AvatarImage src="" alt={comic.title} />
                  <AvatarFallback className="font-semibold text-[9px] leading-3">
                    {/* {comic.author.charAt(0).toUpperCase()} */}H
                  </AvatarFallback>
                </Avatar>
                <Link
                  variant="none"
                  size="none"
                  href="/"
                  className="text-xs ml-2 text-muted-foreground hover:text-primary"
                >
                  {/* {comic.author} */}
                  Hoàng Thái Ninh
                </Link>
                <Separator orientation="vertical" className="mx-2 h-3" />
                <p className="inline-block text-muted-foreground text-xs truncate">
                  <Link variant="none" size="none" href="/" className="text-xs hover:text-primary">
                    {/* {comic.genre} */}
                    Tưởng tượng
                  </Link>
                  <em>&nbsp;•&nbsp;</em>
                  <span>
                    {/* {comic.novelGenre} */}
                    Tượng tượng ở các lục địa ở thế giới khác
                  </span>
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-0 flex-grow">
              <CardDescription className="line-clamp-2 font-medium text-foreground/80">
                {comic.description ?? "Không có mô tả cho truyện này."}
              </CardDescription>
            </CardContent>
            <CardFooter className="p-0">
              <CardDescription className="inline-block text-muted-foreground text-xs truncate">
                <span>{comic.wordCount} từ</span>
                <em>&nbsp;•&nbsp;</em>
                <span>{comic.latestChapter}</span>
              </CardDescription>
            </CardFooter>
          </div>
        </Card>
      ))}
    </div>
  );
}
