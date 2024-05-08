"use client";

import * as React from "react";
import { Icons } from "@/components/icons";
import { Badge } from "@/components/primitives/badge";
import { Button } from "@/components/primitives/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/primitives/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/primitives/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/primitives/popover";
import { Separator } from "@/components/primitives/separator";
import { toast } from "@/hooks/use-toast";
import { cls } from "@/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { Check } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Data for categories
const categories = [
  { label: "Huyền Huyễn", value: "fantasy" },
  { label: "Khoa Học Viễn Tưởng", value: "science-fiction" },
  { label: "Lịch Sử", value: "history" },
  { label: "Ngôn Tình", value: "romance" },
  { label: "Tiên Hiệp", value: "xianxia" },
  { label: "Truyện Ngắn", value: "short-story" },
  { label: "Võng Du", value: "game" },
  { label: "Xuyên Không", value: "transmigration" },
  { label: "Đô Thị", value: "urban" },
  { label: "Đồng Nhân", value: "fan-fiction" },
  { label: "Biến dị", value: "mutation" },
  { label: "Hài Hước", value: "comedy" },
  { label: "Huyền Ảo", value: "mystery" },
  { label: "Kinh Dị", value: "horror" },
  { label: "Ngược", value: "reverse" },
  { label: "Phiêu Lưu", value: "adventure" },
  { label: "Quân Sự", value: "military" },
  { label: "Trọng Sinh", value: "rebirth" },
  { label: "Văn Học", value: "literature" },
  { label: "Xuyên Nhanh", value: "quick-transmigration" },
];

// Form schema(Validations)
const FormSchema = z.object({
  category: z.array(z.string({ required_error: "Please select a lot of categories." })).nonempty(), // Ensure at least one language is selected
});

// Main component
export function NewBook({ data }) {
  const [selectedValues, setSelectedValues] = React.useState(new Set());

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: { category: [] },
  });

  const handleSelect = (category) => {
    const newSelectedValues = new Set(selectedValues);
    if (newSelectedValues.has(category)) {
      newSelectedValues.delete(category);
    } else {
      newSelectedValues.add(category);
    }
    setSelectedValues(newSelectedValues);

    // Update form value with the current selected values
    form.setValue("category", Array.from(newSelectedValues));
  };

  const onSubmit = (data) => {
    toast({
      title: "Thật tuyệt vời!",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="inline-flex flex-col space-y-6">
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="inline-flex flex-col items-start">
              <FormLabel>Thể loại</FormLabel>
              <FormControl>
                <MultipleSelector field={field} selectedValues={selectedValues} handleSelect={handleSelect} />
              </FormControl>
              <FormDescription>This is the category of the book.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="outline" size="sm" type="submit">
          Đăng tải sách mới
        </Button>
      </form>
    </Form>
  );
}

// Generate the title (Bỏ vô file utils -.-)
const generateTitle = (selectedValues, categories) => {
  if (selectedValues.size === 0) return undefined;
  const selectedCategories = Array.from(selectedValues).map(
    (value) => categories.find((option) => option.value === value).label,
  );
  return `Thể loại: ${selectedCategories.join(", ")}`;
};

// MultipleSelector component
export function MultipleSelector({ field, selectedValues, handleSelect }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className={cls("border-dashed", selectedValues?.size > 0 && "border-primary")}
          title={generateTitle(selectedValues, categories)}
        >
          <Icons.sparkles className="h-4 w-4 mr-2" />
          Choose a-lotOf Categories
          {selectedValues?.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge variant="secondary" className="rounded-sm px-1 font-normal lg:hidden">
                {selectedValues.size}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.size > 3 ? (
                  <Badge variant="secondary" className="rounded-sm px-1 font-normal">
                    {selectedValues.size} lựa chọn khác
                  </Badge>
                ) : (
                  Array.from(selectedValues).map((value) => {
                    const category = categories.find((option) => option.value === value);
                    return (
                      <Badge variant="secondary" key={category.value} className="rounded-sm px-1 font-normal">
                        {category.label}
                      </Badge>
                    );
                  })
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search language..." />
          <CommandList>
            <CommandEmpty>Không tìm thấy kết quả nào.</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => {
                const isSelected = selectedValues.has(category.value);
                return (
                  <CommandItem
                    value={category.label}
                    key={category.value}
                    onSelect={() => handleSelect(category.value)}
                  >
                    <Check className={cls("mr-2 h-4 w-4", isSelected ? "opacity-100" : "opacity-0")} />
                    {category.label}
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
