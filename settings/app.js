/**
 * [app.js] App Configuration
 * ==========================
 *
 * To reduce the number of config files, we aim to
 * combine as much as possible into a single file.
 */

import { Coins, CompassIcon, Github } from "lucide-react";

export const REPOSITORY_OWNER = "lilwxs";
export const REPOSITORY_NAME = "__graduationThesis_VibeVerse";
export const REPOSITORY_URL = `https://github.com/${REPOSITORY_OWNER}/${REPOSITORY_NAME}`;
export const DISCORD_URL = "";

export const settings = {
  themeToggleEnabled: true,
};

export const contactConfig = {
  email: "hoangthaininh.hgn@gmail.com",
  phone: "0865647xxx",
  address: "China is Vietnam's",
};

export const socialLinks = {
  twitter: "",
  facebook: "",
  instagram: "",
  linkedin: "",
  github: "",
};

export const siteConfig = {
  name: "Novels",
  shortName: "Novels",
  author: "",
  description: "",
  keywords: "",
  url: {
    // base: env.NEXT_PUBLIC_APP_URL,
    author: REPOSITORY_OWNER,
  },
  // ogImage: `${env.NEXT_PUBLIC_APP_URL}/og-image.png`,
  mainNav: [
    {
      label: "Bảng xếp hạng",
      href: "about",
      items: [
        {
          label: "Wxs",
          href: "wxs",
          description: "Wxs is the best",
        },
        {
          label: "Wxs",
          href: "wxs",
          description: "Wxs is the best",
        },
        {
          label: "Wxs",
          href: "wxs",
          description: "Wxs is the best",
        },
      ],
    },
    {
      label: "Tải ứng dụng",
      href: "download",
      items: [
        {
          label: "Coming soon",
          href: "#",
          description: "Coming soon",
        },
      ],
    },
    {
      label: "gì",
      href: "",
      external: true,
      items: [],
    },
  ],
  extraNav: [
    {
      label: "Github",
      href: "github",
      icon: <Github size={16} />,
      items: [
        {
          label: "test",
          href: "test",
          description: "test",
        },
        {
          label: "test",
          href: "test",
          description: "test",
        },
        {
          label: "test",
          href: "test",
          description: "test",
        },
      ],
    },
    {
      label: "Coins",
      href: "coins",
      icon: <Coins size={16} />,
      items: [],
    },
    {
      label: "Explore",
      href: "explore",
      icon: <CompassIcon size={16} />,
      items: [],
    },
  ],
  footerNav: [
    {
      label: "",
      href: "",
      items: [],
    },
  ],
};
