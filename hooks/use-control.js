import { fontMono } from "@/styles/fonts";
import * as React from "react";

export const useControl = () => {
	const [options, setOptions] = React.useState({
		themeColor: "#111111",
		maxWidth: "680px",
		fontFamily: fontMono.className,
		fontSize: "text-base",
		lineHeight: "leading-[1.5]",
		fontWeight: "font-normal",
		letterSpacing: "tracking-normal",
	});

	const handleOptionChange = (optionKey, value) => {
		setOptions((prevOptions) => ({
			...prevOptions,
			[optionKey]: value,
		}));
	};

	return {
		options,
		handleOptionChange,
	};
};
