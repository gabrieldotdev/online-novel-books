import Link from "next/link";
import { Icons } from "@/islands/icons";
import { typography } from "@/islands/primitives/tw-typography";
import { siteConfig } from "@/settings/app";
import Balancer from "react-wrap-balancer";
import { cnBase } from "tailwind-variants";

export const metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="grid content-center">
      <main className="container py-10 duration-700 animate-in fade-in slide-in-from-bottom-8">
        <div className="space-y-2">
          <h1 className={cnBase(typography.h1, "lg:text-4xl")}>
            {siteConfig.name} <span className="bg-gradient-to-r from-lime-600 to-green-600 bg-clip-text text-transparent">Website</span>
          </h1>
          <Balancer as="p" className="!max-w-5xl text-base leading-normal text-primary/90 sm:text-lg sm:leading-7">
            {siteConfig.description}
          </Balancer>
          <section aria-labelledby="create-a-store-banner-heading" className="mb-14 mt-10 grid place-items-start gap-6 bg-card pt-6 text-center text-card-foreground" id="create-a-store-banner">
            <Link href="/" className="flex items-center justify-center">
              Learn More on Home Page
              <Icons.arrowRight className="ml-2 h-4 w-4" />
            </Link>
          </section>
        </div>
        <h2 className={cnBase(typography.h2, "mt-8 border-b pb-2")}></h2>
        <p className={typography.p}>
          &copy; 2024{" "}
          <Link className="font-medium underline underline-offset-4" href="https://github.com/lilwxs" rel="noreferrer" target="_blank">
            {siteConfig.author}
          </Link>{" "}
          <Link className="font-medium text-zinc-500 underline underline-offset-4" href="https://github.com/lilwxs" rel="noreferrer" target="_blank">
            ({siteConfig.name}'s GitHub)
          </Link>
        </p>
      </main>
    </div>
  );
}
