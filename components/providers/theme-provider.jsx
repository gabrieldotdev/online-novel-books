"use client";

import { ThemeProvider } from "next-themes";
import * as React from "react";

export function NextThemesProvider({ children, ...props }) {
	return <ThemeProvider {...props}>{children}</ThemeProvider>;
}

/**
 * Currently we need to specify suppressHydrationWarning in
 * <html> tag to disable the warning in the browser console.
 *
 * @see https://github.com/pacocoursey/next-themes/issues/152
 * @see https://github.com/vercel/next.js/discussions/22388
 * @see https://michaelangelo.io/blog/darkmode-rsc#important-nextjs-caveat
 */
