import { typographyVariants } from "@/islands/primitives/tw-variants/typography";

export default function PageLayout({ children, title }) {
  return (
    <main className="bg-background text-foreground antialiased">
      <div className="container grid min-h-screen place-content-center text-center duration-700 animate-in fade-in">
        <h1 className={typographyVariants({ size: "3xl" })}>{title}</h1>
        {children}
      </div>
    </main>
  );
}
