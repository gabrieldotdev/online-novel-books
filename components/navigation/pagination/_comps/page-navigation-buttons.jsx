import { Icons } from "@/components/icons";
import { Button } from "@/components/primitives/button";

export function PageNavigationButtons({ onFirst, onPrevious, onNext, onLast, children }) {
  return (
    <div className="inline-flex items-center justify-center space-x-3">
      <Button variant="outline" size="chip" onClick={onFirst}>
        <Icons.doubleChevronLeft size={16} />
      </Button>
      <Button variant="outline" size="chip" onClick={onPrevious}>
        <Icons.chevronLeft size={16} />
      </Button>
      {children}
      <Button variant="outline" size="chip" onClick={onNext}>
        <Icons.chevronRight size={16} />
      </Button>
      <Button variant="outline" size="chip" onClick={onLast}>
        <Icons.doubleChevronRight size={16} />
      </Button>
    </div>
  );
}
