import { Button } from "@/islands/primitives/button";
import { cls } from "@/utils";

export function Thumb({ selected, thumbName, onClick }) {
  return (
    <div className={cls("min-w-0 space-x-2", selected ? "text-destructive" : "")}>
      <Button variant="outline" onClick={onClick}>
        {thumbName}
      </Button>
    </div>
  );
}
