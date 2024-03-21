// import { SiteHeader } from "@/components/header/site-header";

import { ThemeToggle } from "@/themes/theme-toggle";

export default function MainLayout({ children }) {
	return (
		<section className="min-h-screen">
			{/* <SiteHeader /> */}
      <ThemeToggle />
			<main className="flex min-h-screen flex-col items-center justify-between p-24">
				{children}
			</main>
		</section>
	);
}
