import { REPOSITORY_OWNER } from "./app";

export const siteConfig = {
  name: "Novels",
  shortName: "Novels",
  author: "_wxsdev",
  description:
    "NextJS 14 free starter: Next.js 14, Tailwind CSS, Radix UI, Stripe, Shadcn/UI, Server Components, Parallel Routes, Server Actions, React, App Router",
  keywords: [
    "App Router",
    "Next.js 14",
    "Nextjs",
    "Parallel Routes",
    "Radix Ui",
    "React",
    "Server Actions",
    "Server Components",
    "Shadcn/UI",
    "Tailwind Css",
  ],
  url: {
    base: "https://novels.vercel.app",
    author: REPOSITORY_OWNER,
  },
  // ogImage: `${env.NEXT_PUBLIC_APP_URL}/og-image.png`,
  mainNav: [
    {
      title: "About Us",
      href: "/about",
      items: [],
    },
    {
      title: "Dashboard",
      href: "/dashboard",
      items: [
        {
          title: "Authentication",
          href: "/features/authentication",
        },
        {
          title: "Authorization",
          href: "/features/authorization",
        },
        {
          title: "Database",
          href: "/features/database",
        },
        {
          title: "Storage",
          href: "/features/storage",
        },
        {
          title: "Search",
          href: "/features/search",
        },
        {
          title: "Realtime",
          href: "/features/realtime",
        },
        {
          title: "Analytics",
          href: "/features/analytics",
        },
        {
          title: "Monitoring",
          href: "/features/monitoring",
        },
        {
          title: "Testing",
          href: "/features/testing",
        },
        {
          title: "Deployment",
          href: "/features/deployment",
        },
      ],
    },
    {
      title: "Sign In",
      href: "/auth/login",
      items: [],
    },
    {
      title: "Premium",
      href: "/faq",
      items: [
        {
          title: "General",
          href: "/faq/general",
        },
        {
          title: "Billing",
          href: "/faq/billing",
        },
        {
          title: "Security",
          href: "/faq/security",
        },
        {
          title: "Support",
          href: "/faq/support",
        },
      ],
    },
    {
      title: "Changelog",
      href: "/changelog",
      items: [],
    },
    {
      title: "Github",
      href: "https://github/lilwxs",
      external: true,
      items: [],
    },
  ],
  extraNav: [
    {
      title: "Documentation",
      href: "/docs",
      icon: ":bird:",
      items: [],
    },
    {
      title: "Testimonials",
      href: "/testimonials",
      icon: ":star:",
      items: [
        {
          title: "General",
          href: "/testimonials/general",
        },
        {
          title: "Billing",
          href: "/testimonials/billing",
        },
        {
          title: "Security",
          href: "/testimonials/security",
        },
        {
          title: "Support",
          href: "/testimonials/support",
        },
      ],
    },
  ],
  admNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      items: [
        {
          title: "Overview",
          href: "/dashboard/overview",
        },
        {
          title: "Users",
          href: "/dashboard/users",
        },
        {
          title: "Settings",
          href: "/dashboard/settings",
        },
      ],
    },
    {
      title: "Documentation",
      href: "/docs",
      items: [],
    },
  ],
};
