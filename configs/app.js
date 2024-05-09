/**
 * [app.js] App Configuration
 * ==========================
 *
 * To reduce the number of config files, we aim to
 * combine as much as possible into a single file.
 */

import { Icons } from "@/components/icons";
import { fontMono, fontRoboto, fontSans } from "@/styles/fonts";

// Repository settings
export const REPOSITORY_OWNER = "lilwxs";
export const REPOSITORY_NAME = "__graduationThesis_VibeVerse";
export const REPOSITORY_URL = `https://github.com/${REPOSITORY_OWNER}/${REPOSITORY_NAME}`;
export const DISCORD_URL = "";

// Pagination settings
export const ITEMS_PER_PAGE_OPTIONS = [10, 20, 30, 40, 50];
export const MAX_DISPLAY_PAGES = 5;
export const ELLIPSIS_OFFSET = 2;

// Image types for ranking lists
export const IMAGE_TYPE = {
  popular: "test",
  bestseller: "test",
  newBook: "test",
  access: "test",
  propose: "test",
  ratingBoard: "test",
  bookEnded: "test",
  registerNewBook: "test",
  bookUpdate: "test",
  famousAuthor: "test",
};

// export const accessTokenExpiresIn = 60 * 60 * 24 * 3; // 3 days
// export const refreshTokenExpiresIn = 60 * 60 * 24 * 7; // 7 days

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
    { class: fontSans.className, label: "Sans" },
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
  categories: [
    {
      id: 1,
      label: "Tất cả tác phẩm",
      href: "/all",
    },
    {
      id: 2,
      label: "Bảng xếp hạng",
      href: "/rankings/all",
    },
    {
      id: 3,
      label: "Tác phẩm mới trong tuần",
      href: "/books/week",
    },
    {
      id: 4,
      label: "Miễn phí",
      href: "/books/free",
    },
    {
      id: 5,
      label: "Upgrade thành viên",
    },
    {
      id: 6,
      label: "Tác phẩm hot",
      href: "/books/hot",
    },
  ],
  menu: [
    {
      label: "Phổ biến",
      href: "popular",
      icon: <Icons.crown size={15} />,
    },
    {
      label: "Hot",
      href: "hot",
      icon: <Icons.flame size={15} />,
    },
  ],
  events: [
    {
      id: 1,
      label: "Cuộc thi viết truyện ngắn《Người đầu tiên》của tháng 4 đã chính thức khởi động!",
      startDate: "2024-04-01",
      endDate: "2024-04-30",
    },
    {
      id: 2,
      href: "/",
      label: "Sự kiện của những độc giả đỉnh phong 《Siêu cấp độc giả》",
      startDate: "2024-04-01",
      endDate: "2024-04-30",
    },
    {
      id: 3,
      href: "/",
      label: "Ngôi sao mới của bảng phiếu tháng 4《Siêu phẩm phong thủy tướng sư》",
      startDate: "2024-04-01",
      endDate: "2024-04-30",
    },
    {
      id: 4,
      href: "/",
      label: "Lịch nghỉ lễ 30/4-1/5 năm 2024 của Việt Nam【Sự kiện mừng lễ ngày giải phóng miền Nam】",
      startDate: "2024-04-30",
      endDate: "2024-05-01",
    },
    {
      id: 5,
      href: "/",
      label: "Lần đầu tiên《Đô thị đại y tiên》 sách mới ra mắt!",
      startDate: "2024-04-01",
      endDate: "2024-04-30",
    },
  ],
  rankTheWorkTabs: [
    {
      id: 1,
      value: "popular",
      label: "Danh sách phổ biến",
    },
    {
      id: 2,
      value: "bestseller_24h",
      label: "Danh sách bán chạy nhất 24h",
    },
    {
      id: 3,
      value: "coming_soon",
      label: "Danh sách sắp ra mắt",
    },
    {
      id: 4,
      value: "click_ranking",
      label: "Nhấp vào bảng xếp hạng",
    },
    {
      id: 5,
      value: "recommend",
      label: "Danh sách đề xuất",
    },
    {
      id: 6,
      value: "ranking",
      label: "Bảng xếp hạng",
    },
    {
      id: 7,
      value: "end",
      label: "Danh sách kết thúc",
    },
    {
      id: 8,
      value: "new",
      label: "Danh sách đăng ký sách mới",
    },
    {
      id: 9,
      value: "update_24h",
      label: "Danh sách cập nhật 24h",
    },
  ],
  authorRankingTabs: [
    {
      id: 10,
      value: "famous_author",
      label: "Danh sách nổi tiếng của tác giả",
    },
  ],
};
