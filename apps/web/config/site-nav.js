import { BadgeDollarSign } from "lucide-react";

export const siteNavigation = {
	mainNav: [
		{
			title: "About Us",
			href: "/about-us",
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
			icon: <BadgeDollarSign size={16} />,
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
			external: true,
		},
		{
			title: "Changelog",
			href: "/changelog",
			icon: <BadgeDollarSign size={16} />,
			items: [],
			external: true,
		},
	],
	dashNav: [
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
