export const metadata = {
	title: {
		default: "Sign In",
		template: "%s | Sign In",
	},
	description: "Welcome to the www",
};

export default function AuthLayout({ children }) {
	return (
		<main className="flex min-h-screen flex-col items-center bg-[url('/grid.svg')] justify-between px-24">
			{children}
		</main>
	);
}
