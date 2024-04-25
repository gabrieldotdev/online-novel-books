/**
 * [app.js] App Configuration
 * ==========================
 *
 * To reduce the number of config files, we aim to
 * combine as much as possible into a single file.
 */

import { Icons } from "@/components/icons";
import { fontGochiHand, fontMono, fontRoboto } from "@/styles/fonts";

import { bookDetails } from "./other";

export const REPOSITORY_OWNER = "lilwxs";
export const REPOSITORY_NAME = "__graduationThesis_VibeVerse";
export const REPOSITORY_URL = `https://github.com/${REPOSITORY_OWNER}/${REPOSITORY_NAME}`;
export const DISCORD_URL = "";

export const settings = {
  themeToggleEnabled: true,
};

export const controls = {
  settingsEnabled: true,
  bookDetailsEnabled: true,
};

export const optionalControls = {
  themeColor: [
    { class: "#111111", label: "Dark" },
    { class: "#f0f0f0", label: "Light" },
    { class: "#f472b6", label: "Pink" },
    { class: "#90cdf4", label: "Blue" },
  ],
  maxWidth: [
    { class: "680px", label: "680" },
    { class: "800px", label: "800" },
    { class: "1000px", label: "1000" },
    { class: "1200px", label: "1200" },
  ],
  fontFamily: [
    { class: fontRoboto.className, label: "Roboto" },
    { class: fontMono.className, label: "Mono" },
    { class: fontGochiHand.className, label: "Gochi Hand" },
  ],
  fontSize: [
    { class: "text-sm", label: "Small" },
    { class: "text-base", label: "Normal" },
    { class: "text-lg", label: "Large" },
    { class: "text-xl", label: "Larger" },
  ],
  lineHeight: [
    { class: "leading-5", label: "Normal" },
    { class: "leading-6", label: "Tall" },
    { class: "leading-7", label: "Taller" },
  ],
  fontWeight: [
    { class: "font-normal", label: "Normal" },
    { class: "font-medium", label: "Medium" },
    { class: "font-semibold", label: "Semibold" },
    { class: "font-bold", label: "Bold" },
  ],
  letterSpacing: [
    { class: "tracking-light", label: "Light" },
    { class: "tracking-normal", label: "Normal" },
  ],
};

export const siteConfig = {
  name: "Novels",
  shortName: "Novels",
  author: "lilwxs",
  description: "Novels",
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
  extendNav: [
    {
      label: "Thông điệp",
      href: "/message",
      icon: <Icons.bell size={16} />,
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
      label: "Lịch sử",
      href: "/history",
      icon: <Icons.clock size={16} />,
      items: [],
    },
    {
      label: "Kệ sách",
      href: "/bookshelf",
      icon: <Icons.bookMarked size={16} />,
      items: [],
    },
  ],
};
