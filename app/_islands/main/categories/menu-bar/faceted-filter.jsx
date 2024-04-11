import { Badge } from "@/islands/primitives/badge";
import { Button } from "@/islands/primitives/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/islands/primitives/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/islands/primitives/popover";
import { Separator } from "@/islands/primitives/separator";
import { ArrowDown10 } from "lucide-react";

export function FacetedFilter({ title, options }) {
  const selectedValues = new Set();
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" className="h-8 border-dashed">
          <ArrowDown10 className="mr-2 h-4 w-4" />
          {title}
          {selectedValues?.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge variant="secondary" className="rounded-sm px-1 font-normal lg:hidden">
                {selectedValues.size}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.size > 2 ? (
                  <Badge variant="secondary" className="rounded-sm px-1 font-normal">
                    {selectedValues.size} selected
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.has(option.value))
                    .map((option) => (
                      <Badge variant="secondary" key={option.value} className="rounded-sm px-1 font-normal">
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )}
          {/* <Separator orientation="vertical" className="mx-2 h-4" /> */}
          {/* <Badge variant="secondary" className="rounded-sm px-1 font-normal lg:hidden">
            0
          </Badge> */}

          {/* <div className="hidden space-x-1 lg:flex">
            {Array.isArray(options) && options.length > 2 ? (
              <Badge variant="secondary" className="rounded-sm px-1 font-normal">
                0 selected
              </Badge>
            ) : (
              options.map((option) => (
                <Badge variant="secondary" key={option.value} className="rounded-sm px-1 font-normal">
                  {option.label}
                </Badge>
              ))
            )}
            <Badge variant="secondary" className="rounded-sm px-1 font-normal">
              Option
            </Badge>
          </div> */}

          {/* {selectedValues?.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge variant="secondary" className="rounded-sm px-1 font-normal lg:hidden">
                {selectedValues.size}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.size > 2 ? (
                  <Badge variant="secondary" className="rounded-sm px-1 font-normal">
                    {selectedValues.size} selected
                  </Badge>
                ) : (
                  options
                    .filter((option) => selectedValues.has(option.value))
                    .map((option) => (
                      <Badge variant="secondary" key={option.value} className="rounded-sm px-1 font-normal">
                        {option.label}
                      </Badge>
                    ))
                )}
              </div>
            </>
          )} */}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        <Command>
          <CommandInput placeholder={title} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {/* {options.map((option) => {
                const isSelected = selectedValues.has(option.value);
                return (
                  <CommandItem
                    key={option.value}
                    onSelect={() => {
                      if (isSelected) {
                        selectedValues.delete(option.value);
                      } else {
                        selectedValues.add(option.value);
                      }
                    }}
                  >
                    <div
                      className={cls(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        isSelected ? "bg-primary text-primary-foreground" : "opacity-50 [&_svg]:invisible",
                      )}
                    >
                      <CheckIcon className={cls("h-4 w-4")} />
                    </div>
                    {option.icon && <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />}
                    <span>{option.label}</span>
                  </CommandItem>
                );
              })} */}
            </CommandGroup>
            {selectedValues.size > 0 && (
              <>
                <CommandSeparator />
                <CommandGroup>
                  <CommandItem onSelect={() => selectedValues.clear()} className="justify-center text-center">
                    Clear filters
                  </CommandItem>
                </CommandGroup>
              </>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
