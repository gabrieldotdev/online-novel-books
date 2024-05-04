import { cls } from "@/utils";

export const Navbar = ({ children, isSticky, className }) => (
	<nav
		className={cls(
			"absolute flex w-full px-6 h-[3.5rem] items-center top-0 z-[1000] space-x-3 transition-all duration-300 ease-in-out",
			isSticky ? "fixed inset-x-0 bg-white shadow-md" : "bg-transparent",
			className,
		)}
	>
		{children}
	</nav>
);
