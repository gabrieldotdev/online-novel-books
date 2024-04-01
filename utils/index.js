/**
 * Utility functions
 * =================
 *
 * This file contains utility functions that are used throughout the app.
 *
 * @see https://github.com/sadmann7/skateshop/blob/main/src/lib/utils.ts
 * @see https://github.com/steven-tey/dub/blob/main/packages/utils/src/index.ts
 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
export const cls = cn;
