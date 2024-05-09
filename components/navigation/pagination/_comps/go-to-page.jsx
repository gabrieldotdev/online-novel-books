import { Input } from "@/components/primitives/input";
import { Label } from "@/components/primitives/label";
import { buttonVariants } from "@/themes/twv";
import { cls } from "@/utils/cnClasses";

export function GoToPage({ currentPage, onJump, maxPage }) {
  const handlePageInput = (event) => {
    if (event.key === "Enter") {
      const page = Number(event.target.value);
      onJump(page);
    }
  };
  return (
    <div className="inline-flex items-center space-x-2">
      <Label htmlFor="page-input" className="shrink-0 text-xs">
        Đến trang
      </Label>
      <Input
        id="page-input"
        type="number"
        className={cls("w-[3rem] text-center", buttonVariants({ size: "sm" }))}
        defaultValue={currentPage}
        onKeyPress={handlePageInput}
      />
      <Label htmlFor="page-input" className="shrink-0 text-xs">
        / {maxPage}
      </Label>
    </div>
  );
}
