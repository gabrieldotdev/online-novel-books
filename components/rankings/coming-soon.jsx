import { Card, CardContent } from "@/components/primitives/card";
import { cls } from "@/utils";

export function ComingSoon() {
  return (
    <Card
      className={cls(
        "cursor-pointer border-none shadow-none w-72 pt-20",
        "bg-[url('/assets/tops/tps1.png')] bg-top bg-contain bg-no-repeat",
      )}
    >
      <section className="min-h-[350px] space-y-2 pb-4">
        <CardContent className="flex py-0">Coming soon...</CardContent>
      </section>
    </Card>
  );
}
