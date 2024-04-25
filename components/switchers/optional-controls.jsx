import { BookDetails } from "@/components/controls/book-details";
import { Settings } from "@/components/controls/settings";
import { Icons } from "@/components/icons";
import { Button } from "@/components/primitives/button";
import { controls } from "@/configs/app";
import { cls } from "@/utils";

export function OptionalControls({ handleOptionChange }) {
  return (
    <>
      {/* <aside className={cls("absolute top-20 right-full")}>
        <div className="fixed right-full mr-2">
          <div className="space-y-2">
            <Button variant="outline" className="py-0.5 px-2">
              Hoang Thai Ninh
            </Button>
            <Button variant="outline" className="py-0.5 px-2">
              Mai Ty
            </Button>
            <Button variant="outline" className="py-0.5 px-2">
              Do An To Nghiep 2024
            </Button>
          </div>
        </div>
      </aside> */}
      <aside className={cls("absolute top-20 left-full ml-2")}>
        <div className="fixed ml-2">
          <div className="flex flex-col space-y-2">
            {controls.settingsEnabled && (
              <Settings handleOptionChange={handleOptionChange}>
                <Button variant="outline" size="icon">
                  <Icons.penTool size={16} />
                </Button>
              </Settings>
            )}
            {controls.bookDetailsEnabled && <BookDetails />}
          </div>
        </div>
      </aside>
    </>
  );
}
