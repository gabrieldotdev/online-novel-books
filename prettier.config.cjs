/** @typedef {import("@ianvs/prettier-plugin-sort-imports").PluginConfig} SortImportsConfig */
/** @typedef {import("prettier").Config} PrettierConfig */
/**
 * Remember to restart VSCode after making
 * any changes here and saving this file.
 */
/** @type {PrettierConfig | { sortImports: SortImportsConfig }} */
module.exports = {
	arrowParens: "always",
	quoteProps: "preserve",
	bracketSameLine: false,
	endOfLine: "lf",
	importOrder: [
		"^~/styles/(.*)$",
		"",
		"^(react/(.*)$)|^(react$)",
		"^(next/(.*)$)|^(next$)",
		"<THIRD_PARTY_MODULES>",
		"",
		"^~/app",
		"^~/app/(.*)$",
		"^~/data/(.*)$",
		"^~/env.mjs",
		"^~/forms/(.*)$",
		"^~/hooks/(.*)$",
		"^~/islands/(.*)$",
		"^~/utils/(.*)$",
		"",
		"^[./]",
		"",
	],
	importOrderParserPlugins: ["javascript", "jsx", "decorators-legacy"],
	plugins: [
		require.resolve("prettier-plugin-tailwindcss"),
		require.resolve("prettier-plugin-packagejson"),
		require.resolve("@ianvs/prettier-plugin-sort-imports"),
	],
	printWidth: 80,
	semi: true,
	singleQuote: false,
	tabWidth: 2,
	trailingComma: "all",
	useTabs: false,
};
