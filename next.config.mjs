/**
 * The whitelist list of domains,
 * that are allowed to show media.
 */

const hostnames = ["plus.unsplash.com", "images.unsplash.com"];

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		formats: ["image/avif", "image/webp"],
		remotePatterns: hostnames.map((hostname) => ({
			protocol: "https",
			hostname,
		})),
	},
};

export default nextConfig;
