import { cva } from "class-variance-authority";

export const containerVariants = cva(
	"relative flex flex-col min-h-screen bg-background text-foreground",
	{
		variants: {
			size: {
				default: "max-w-2xl mx-auto",
				sm: "max-w-sm mx-auto",
				md: "max-w-md mx-auto",
				lg: "max-w-lg mx-auto",
				xl: "max-w-xl mx-auto",
				"2xl": "max-w-2xl mx-auto",
				"3xl": "max-w-3xl mx-auto",
				"4xl": "max-w-4xl mx-auto",
				"5xl": "max-w-5xl mx-auto",
				"6xl": "max-w-6xl mx-auto",
				"7xl": "max-w-7xl mx-auto",
				"8xl": "max-w-8xl mx-auto",
				"9xl": "max-w-9xl mx-auto",
			},
		},
		defaultVariants: {
			size: "default",
		},
	},
);

export const gridVariants = cva(
	"grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
	{
		variants: {
			size: {
				default: "gap-4",
				sm: "gap-2",
				md: "gap-4",
				lg: "gap-6",
				xl: "gap-8",
				"2xl": "gap-10",
			},
		},
		defaultVariants: {
			size: "default",
		},
	},
);

export const flexVariants = cva("flex flex-col items-center justify-center", {
	variants: {
		size: {
			default: "gap-4",
			sm: "gap-2",
			md: "gap-4",
			lg: "gap-6",
			xl: "gap-8",
			"2xl": "gap-10",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

export const gridItemVariants = cva("flex flex-col", {
	variants: {
		size: {
			default: "col-span-1",
			sm: "col-span-1",
			md: "col-span-1",
			lg: "col-span-1",
			xl: "col-span-1",
			"2xl": "col-span-1",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

export const flexItemVariants = cva("flex flex-col", {
	variants: {
		size: {
			default: "col-span-1",
			sm: "col-span-1",
			md: "col-span-1",
			lg: "col-span-1",
			xl: "col-span-1",
			"2xl": "col-span-1",
		},
	},
	defaultVariants: {
		size: "default",
	},
});

export const titleVariants = cva("tracking-tight inline font-semibold", {
	variants: {
		color: {
			vol: "from-[#d62828] to-[#e07a5f]",
			idg: "from-[#f77f00] to-[#fcbf49]",
			ylw: "from-[#fcbf49] to-[#eae2b7]",
			foreground: "dark:from-[#FFFFFF] dark:to-[#4B4B4B]",
		},
		size: {
			default: "text-base",
			sm: "text-sm",
			lg: "text-lg",
			xl: "text-xl",
			"2xl": "text-2xl",
			"3xl": "text-3xl",
			"4xl": "text-4xl",
			"5xl": "text-5xl",
		},
	},
	defaultVariants: {
		size: "default",
	},
	compoundVariants: [
		{
			color: ["vol", "idg", "ylw", "foreground"],
			className: "bg-clip-text text-transparent bg-gradient-to-tr",
		},
	],
});

export const textVariants = cva(
	"transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
	{
		variants: {
			variant: {
				default: "text-foreground",
				muted: "text-muted-foreground",
				primary: "text-primary-foreground",
				secondary: "text-secondary-foreground",
				destructive: "text-destructive-foreground",
				accent: "text-accent-foreground",
				popover: "text-popover-foreground",
				card: "text-card-foreground",
			},
			size: {
				default: "text-base",
				sm: "text-sm",
				lg: "text-lg",
				xl: "text-xl",
				"2xl": "text-2xl",
				"3xl": "text-3xl",
				"4xl": "text-4xl",
				"5xl": "text-5xl",
				"6xl": "text-6xl",
				"7xl": "text-7xl",
				"8xl": "text-8xl",
				"9xl": "text-9xl",
			},
			weight: {
				default: "font-normal",
				thin: "font-thin",
				extralight: "font-extralight",
				light: "font-light",
				medium: "font-medium",
				semibold: "font-semibold",
				bold: "font-bold",
				extrabold: "font-extrabold",
				black: "font-black",
			},
			align: {
				left: "text-left",
				center: "text-center",
				right: "text-right",
				justify: "text-justify",
			},
			decoration: {
				underline: "underline",
				"line-through": "line-through",
			},
			transform: {
				uppercase: "uppercase",
				lowercase: "lowercase",
				capitalize: "capitalize",
				"normal-case": "normal-case",
			},
			whitespace: {
				normal: "whitespace-normal",
				nowrap: "whitespace-nowrap",
				pre: "whitespace-pre",
				"pre-line": "whitespace-pre-line",
				"pre-wrap": "whitespace-pre-wrap",
			},
			break: {
				normal: "break-normal",
				words: "break-words",
				all: "break-all",
			},
			truncate: {
				default: "truncate",
				lines: "truncate-lines",
				words: "truncate-words",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
			weight: "default",
			align: "left",
			decoration: "none",
			transform: "none",
			whitespace: "normal",
			break: "normal",
			truncate: "default",
		},
	},
);

export const buttonVariants = cva(
	"inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "bg-primary text-primary-foreground hover:bg-primary/90",
				destructive:
					"bg-destructive text-destructive-foreground hover:bg-destructive/90",
				outline:
					"border border-input bg-background hover:bg-accent text-accent-foreground",
				secondary:
					"bg-secondary text-secondary-foreground hover:bg-secondary/80",
				ghost: "hover:bg-accent hover:text-accent-foreground",
				link: "text-primary underline-offset-4 hover:underline",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-8 rounded-xl px-4",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export const inputVariants = cva(
	"block w-full rounded-md shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
	{
		variants: {
			variant: {
				default: "border border-input bg-input text-foreground",
				outline:
					"border border-input bg-background text-foreground placeholder-input",
				ghost: "bg-transparent text-foreground",
			},
			size: {
				default: "h-10 px-4 py-2",
				sm: "h-8 rounded-xl px-4",
				lg: "h-11 rounded-md px-8",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	},
);

export const cardVariants = cva(
	"relative rounded-lg shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
	{
		variants: {
			variant: {
				default: "bg-card text-card-foreground",
				ghost: "bg-transparent text-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);

export const popoverVariants = cva(
	"absolute z-10 rounded-lg shadow-sm ring-1 ring-black ring-opacity-5",
	{
		variants: {
			variant: {
				default: "bg-popover text-popover-foreground",
				ghost: "bg-transparent text-foreground",
			},
		},
		defaultVariants: {
			variant: "default",
		},
	},
);
