/**
 * _Wxsdev ESLint Configuration for _hoagnthaininh 0.1.0
 * =====================================================
 *
 * Remember to run `>ESLint: Restart ESLint Server`
 * command after making changes and the file saving.
 * Tip: Open `>Keyboard Shortcuts` and bind restart.
 *
 * When using ESLint VSCode extension, make sure you
 * have `Use Flat Config` option enabled in settings.
 * Bonus tip: When using Relivator, use `pnpm appts`.
 *
 * Go to `export default antfu` to see actual config.
 *
 * @see https://github.com/antfu/eslint-config#antfueslint-config
 * @see https://eslint.org/docs/latest/use/configure/configuration-files-new
 */

import antfu from "@antfu/eslint-config";
import { FlatCompat } from "@eslint/eslintrc";
import eslintJsPlugin from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import stylisticPlugin from "@stylistic/eslint-plugin";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import reactPluginConfigsRecommended from "eslint-plugin-react/configs/recommended";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";

const compat = new FlatCompat();

const importedRules = {
	...eslintJsPlugin.rules,
	...stylisticPlugin.rules,
	...jsxA11yPlugin.rules,
	...reactPlugin.rules,
	...reactHooksPlugin.rules,
	...tailwindcssPlugin.rules,
	...reactPluginConfigsRecommended.rules,
};

/** @type {import("eslint").Linter.Config} */
const config = antfu(
	{
		ignores: [".next", "build"],
		stylistic: { quotes: "double", semi: true },
		settings: { react: { version: "detect" } },
		formatters: { css: true },
		react: true,
		vue: false,
		plugins: {
			"@next/next": nextPlugin,
			"@stylistic": stylisticPlugin,
			react: reactPlugin,
			"jsx-a11y": jsxA11yPlugin,
			"react-hooks": reactHooksPlugin,
			tailwindcss: tailwindcssPlugin,
		},
		rules: {
			...importedRules,
			/**
			 * Custom rules go here.
			 * @see https://eslint.org/docs/rules/
			 */
		},
	},
	...compat.config({
		plugins: [
			"eslint:recommended",
			"@limegrass/import-alias",
			"jsx-a11y",
			"sonarjs",
			"react-refresh",
		],
		extends: ["plugin:jsx-a11y/recommended", "plugin:sonarjs/recommended"],
		rules: {
			"@limegrass/import-alias/import-alias": "off", // @limegrass
			"deprecation/deprecation": "off", // sonarjs
			"react-refresh/only-export-components": "off", // react-refresh
		},
	}),
);
module.exports = config;
