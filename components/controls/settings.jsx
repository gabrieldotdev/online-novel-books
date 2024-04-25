import { optionalControls } from "@/configs/app";
import { cls } from "@/utils";

import { Icons } from "../icons";
import { Button } from "../primitives/button";
import { Input } from "../primitives/input";
import { Label } from "../primitives/label";
import { Popover, PopoverContent, PopoverTrigger } from "../primitives/popover";
import { ThemesGeneralSwitcher } from "../switchers/themes-general-switcher";

export function Settings({ children, handleOptionChange }) {
  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent align="end" className="w-96">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Cài đặt</h4>
            <p className="text-sm text-muted-foreground">Thay đổi tuỳ theo ý bạn</p>
          </div>
          <div className="grid gap-3">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Màu sắc</Label>
              <div className="flex items-center gap-x-2 col-span-2">
                {optionalControls.themeColor.map((item) => (
                  <Button
                    key={item.label}
                    variant="outline"
                    size="chip"
                    style={{ backgroundColor: item.class }}
                    className={cls("shrink-0 rounded-full")}
                    onClick={() => handleOptionChange("themeColor", item.class)}
                  />
                ))}
                <ThemesGeneralSwitcher />
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Kiểu chữ</Label>
              <div className="flex items-center gap-x-2 col-span-2">
                {optionalControls.fontFamily.map((item) => (
                  <Button
                    key={item.label}
                    variant="outline"
                    className="h-8 px-2 w-full rounded-lg"
                    onClick={() => handleOptionChange("fontFamily", item.class)}
                  >
                    {item.label}
                  </Button>
                ))}
                {/* <Button variant="outline" className="h-8 px-2 w-full rounded-lg">
                  Roboto
                </Button>
                <Button variant="outline" className="h-8 px-2 w-full rounded-lg">
                  Mono
                </Button>
                <Button variant="outline" className="h-8 px-2 w-full rounded-lg">
                  Gochi Hand
                </Button> */}
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Cỡ chữ</Label>
              <div className="flex items-center gap-x-2 col-span-2">
                <Button variant="outline" size="chip" className="shrink-0">
                  <Icons.plus size={16} />
                </Button>
                <Input id="maxWidth" defaultValue="300px" className="h-8 text-center" disabled />
                <Button variant="outline" size="chip" className="shrink-0">
                  <Icons.minus size={16} />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Chiều rộng</Label>
              <div className="flex items-center gap-x-2 col-span-2">
                {optionalControls.maxWidth.map((item) => (
                  <Button
                    key={item.label}
                    variant="outline"
                    className="h-8 px-2 w-full rounded-lg"
                    onClick={() => handleOptionChange("maxWidth", item.class)}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label>Kiểu đọc</Label>
              <div className="flex items-center gap-x-2 col-span-2">
                <Input defaultValue="Chương" className="h-8" />
                <Input defaultValue="Dải dài" className="h-8" />
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
