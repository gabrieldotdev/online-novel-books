import { Icons } from "@/components/icons";
import { Card, CardFooter } from "@/components/primitives/card";
import { Link } from "@/components/primitives/link";
import { cls } from "@/utils";

export function ChiefCategories({ data }) {
  return (
    <Card
      className={cls(
        "relative shrink-0 border-none shadow-none w-72 mt-12",
        "bg-[url('https://revo.zongheng.com/www/2024/images/c4d794c.png')] bg-top bg-cover bg-no-repeat",
      )}
    >
      <div className="absolute -top-12 left-0 w-full h-6">
        <span className="text-lg font-semibold text-foreground">Danh mục</span>
      </div>
      <section className="min-h-[200px] px-6 py-4">
        <div className="flex flex-wrap gap-2">
          {data.slice(0, 20).map((category) => (
            <Link key={category.label} size="sm" href={category.href} className="bg-order hover:bg-border space-x-0.5">
              <Icons.sparkles size={16} />
              <span>{category.label}</span>
            </Link>
          ))}
        </div>
      </section>
      <CardFooter className="justify-end pb-4">
        <Link href="/rankings" size="sm" className="group space-x-0.5 text-xs font-normal text-muted-foreground">
          <span>Nhiều hơn</span>
          <Icons.chevronRight size={14} className="group-hover:animate-jumpR" />
        </Link>
      </CardFooter>
    </Card>
  );
}
