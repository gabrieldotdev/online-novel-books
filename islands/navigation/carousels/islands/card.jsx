import { Link } from "@/core/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/islands/primitives/card";
import { SpecialBook } from "@/islands/visuals/books/special-book";
import { cls } from "@/utils";

export function CardCarousel({ name, author, description, image, href, className, ...props }) {
  return (
    <>
      <Link href={href} className="group relative w-full">
        <SpecialBook imageUrl={image} className="w-36" isBackground />
        <div className={cls("absolute inset-0 group-hover:flex items-center justify-center hidden", "mx-auto w-36")}>
          <div className="text-center mt-16 space-y-2">
            <h3 className="text-wrap text-sm text-white font-semibold line-clamp-2">{description}</h3>
            <p className="text-xs text-white/80">{author}</p>
          </div>
        </div>
      </Link>
      <div className="mt-4 text-center">
        <span className="text-md font-semibold">{name}</span>
      </div>
    </>
  );
}
