import { cls } from "@/utils";

import { typographyVariants } from "../primitives/tw/typography";

export default function PageLayout({ title, children }) {
  return (
    <main className="bg-background text-foreground antialiased">
      <article
        className={cls(
          typographyVariants({ size: { lg: "large" } }),
          "container min-h-screen place-content-center text-center duration-700 animate-in fade-in",
        )}
      >
        <h1>{title}</h1>
        {children}
      </article>
    </main>
  );
}
