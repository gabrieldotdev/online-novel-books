/**
 * The whitelist list of domains,
 * that are allowed to show media.
 */

const hostnames = [
  "plus.unsplash.com",
  "images.unsplash.com",
  "revo.zongheng.com",
  "static.zongheng.com",
  "qdfepccdn.qidian.com",
  "bossaudioandcomic-1252317822.image.myqcloud.com",
  "img2.qidian.com",
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: hostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

export default nextConfig;
