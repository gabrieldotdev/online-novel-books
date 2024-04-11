import { cls } from "@/utils";
import { tv } from "tailwind-variants";

const asVariants = tv({
  slots: {
    header: "z-50 relative mx-auto w-full",
    navbar: "absolute flex px-6 w-full h-[3rem] items-center top-0 z-[1000]",
    navbarContent: "flex items-center justify-between h-full space-x-2 md:justify-end",
  },
  variants: {
    isSticky: {
      true: "fixed bg-background text-foreground inset-0",
      false: "text-white",
    },
  },
});

function ShellAs({ as: Comp = "header", children, className, isSticky }) {
  if (Comp === "navbar")
    return (
      <Comp className={cls(asVariants.slots.navbar, isSticky && asVariants.variants.isSticky.true, className)}>
        {children}
      </Comp>
    );
  if (Comp === "navbarContent")
    return <Comp className={cls(asVariants.slots.navbarContent, className)}>{children}</Comp>;
  return <Comp className={cls(asVariants.slots.header, className)}>{children}</Comp>;
}

export { ShellAs, asVariants };
