import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}
export const cls = cn;

export const getTopImage = (first3Tops) => {
	switch (first3Tops) {
		case 1:
			return "https://revo.zongheng.com/www/2024/images/56e1ee1.png";
		case 2:
			return "https://revo.zongheng.com/www/2024/images/85a0c35.png";
		case 3:
			return "https://revo.zongheng.com/www/2024/images/718e8c9.png";
		default:
			return "";
	}
};
