/**
 * [app.js] App Configuration
 * ==========================
 *
 * To reduce the number of config files, we aim to
 * combine as much as possible into a single file.
 */

// todo: parse this from clerk's dashboard instead of hardcoding it
export const oauthProvidersClerk = [
  { name: "Google", strategy: "oauth_google", icon: "google" },
  { name: "Discord", strategy: "oauth_discord", icon: "discord" },
  // { name: "Microsoft", strategy: "oauth_microsoft", icon: "microsoft" },
  // { name: "Facebook", strategy: "oauth_facebook", icon: "facebook" },
  // { name: "Github", strategy: "oauth_github", icon: "gitHub" },
];

const links = {
  twitter: "",
  github: "",
  discord: "",
  facebook: "",
};

export const contactConfig = {
  email: "hoangthaininh.hgn@gmail.com",
};

export const REPOSITORY_OWNER = "lilwxs";
export const REPOSITORY_NAME = "lilwxs";
export const REPOSITORY_URL = `https://github.com/${REPOSITORY_OWNER}/${REPOSITORY_NAME}`;
export const DISCORD_URL = "";
// export const baseUrl = new URL(
// 	env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
// );

// export const BASE_URL =
// 	process.env.NODE_ENV === "production" ? baseUrl : "http://localhost:3000";

export const settings = {
  themeToggleEnabled: true,
  loop: true,
};
