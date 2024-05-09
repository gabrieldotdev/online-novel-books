import { Label } from "@/components/primitives/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/primitives/select";
import { ITEMS_PER_PAGE_OPTIONS } from "@/configs/app";
import { buttonVariants } from "@/themes/twv";

export function ItemsPerPageSelect({ itemsPerPage, onItemsPerPageChange }) {
  return (
    <div className="inline-flex items-center space-x-2">
      <Label htmlFor="items-per-page" className="shrink-0 text-xs">
        Số lượng
      </Label>
      <Select value={`${itemsPerPage}`} onValueChange={onItemsPerPageChange}>
        <SelectTrigger className={buttonVariants({ size: "sm" })}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent side="top">
          {ITEMS_PER_PAGE_OPTIONS.map((pageSize) => (
            <SelectItem key={pageSize} value={`${pageSize}`}>
              {pageSize} / trang
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
