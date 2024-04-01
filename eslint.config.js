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

export default antfu(
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
      "react": reactPlugin,
      "jsx-a11y": jsxA11yPlugin,
      "react-hooks": reactHooksPlugin,
      "tailwindcss": tailwindcssPlugin,
    },
    rules: {
      ...importedRules,
      /**
       * @see @stylistic
       */
      "@stylistic/arrow-parens": "off", // @stylistic
      "@stylistic/brace-style": "off", // @stylistic
      "@stylistic/comma-dangle": "off",
      "@stylistic/eol-last": "off",
      "@stylistic/indent-binary-ops": "off",
      "@stylistic/indent": "off",
      "@stylistic/jsx-closing-tag-location": "off",
      "@stylistic/jsx-curly-newline": "off",
      "@stylistic/jsx-indent-props": "off",
      "@stylistic/jsx-indent": "off",
      "@stylistic/jsx-one-expression-per-line": "off",
      "@stylistic/jsx-wrap-multilines": "off",
      "@stylistic/keyword-spacing": ["off", { before: true, after: true }],
      "@stylistic/max-statements-per-line": ["off", { max: 1 }],
      "@stylistic/member-delimiter-style": "off",
      "@stylistic/multiline-ternary": "off",
      "@stylistic/no-multi-spaces": "off",
      "@stylistic/no-multiple-empty-lines": "off",
      "@stylistic/no-tabs": "off",
      "@stylistic/no-trailing-spaces": "off",
      "@stylistic/operator-linebreak": "off",
      "@stylistic/padded-blocks": "off",
      "@stylistic/quote-props": "off",
      "@stylistic/quotes": "off",
      "@stylistic/semi-spacing": "off",
      "@stylistic/semi": "off",
      "@stylistic/spaced-comment": "off",
      /**
       * @see antfu
       */
      "antfu/consistent-list-newline": "off",
      "antfu/if-newline": "off",
      "antfu/top-level-function": "off",
      /**
       * @see import
       */
      "import/no-absolute-path": "off",
      "import/no-cycle": "off",
      "import/no-duplicates": "off",
      "import/no-dynamic-require": "off",
      "import/no-extraneous-dependencies": "off",
      "import/no-mutable-exports": "off",
      "import/no-named-as-default": "off",
      "import/order": ["off"],
      "import/prefer-default-export": "off",
      "indent": ["off", 2],
      /**
       * @see jsx-a11y
       */
      "jsx-a11y/anchor-has-content": "off",
      "jsx-a11y/anchor-is-valid": "off",
      "jsx-a11y/heading-has-content": "off",
      "jsx-a11y/no-autofocus": "off",
      /**
       * @see react-hooks
       */
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/rules-of-hooks": "off",
      /**
       * @see react
       */
      "react/button-has-type": "off",
      "react/destructuring-assignment": "off",
      "react/display-name": "off",
      "react/function-component-definition": "off",
      "react/jsx-boolean-value": "off",
      "react/jsx-curly-brace-presence": "off",
      "react/jsx-fragments": "off",
      "react/jsx-max-depth": ["off", { max: 7 }],
      "react/jsx-no-bind": "off",
      "react/jsx-no-constructed-context-values": "off",
      "react/jsx-no-leaked-render": ["off", { validStrategies: ["ternary"] }],
      "react/jsx-no-script-url": "off",
      "react/jsx-no-useless-fragment": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-pascal-case": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-sort-props": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "off",
      "react/no-array-index-key": "off",
      "react/no-children-prop": "off",
      "react/no-danger-with-children": "off",
      "react/no-danger": "off",
      "react/no-typos": "off",
      "react/no-unescaped-entities": "off",
      "react/no-unknown-property": "off",
      "react/no-unstable-nested-components": "off",
      "react/no-unused-prop-types": "off",
      "react/prefer-stateless-function": "off",
      "react/prop-types": "off",
      "react/react-in-jsx-scope": "off",
      "react/require-default-props": "off",
      "react/self-closing-comp": "off",

      "rest-spread-spacing": ["off", "never"],
      "rules/anchor-is-valid": "off",
      "semi-spacing": "off",
      "semi-style": ["off", "last"],
      "semi": "off",
      /**
       * @see sonarjs
       */
      "sonarjs/cognitive-complexity": "off",
      "sonarjs/no-all-duplicated-branches": "off",
      "sonarjs/no-duplicate-string": "off",
      "sonarjs/no-nested-template-literals": "off",
      "sonarjs/prefer-immediate-return": "off",
      /**
       * @see tailwindcss
       */
      "style/arrow-parens": "off",
      "style/brace-style": "off",
      "style/comma-dangle": "off",
      "style/eol-last": "off",
      "style/indent-binary-ops": "off",
      "style/indent": "off",
      "style/jsx-closing-tag-location": "off",
      "style/jsx-curly-newline": "off",
      "style/jsx-indent-props": "off",
      "style/jsx-indent": "off",
      "style/jsx-one-expression-per-line": "off",
      "style/jsx-wrap-multilines": "off",
      "style/member-delimiter-style": "off",
      "style/multiline-ternary": "off",
      "style/no-multi-spaces": "off",
      "style/no-multiple-empty-lines": "off",
      "style/no-tabs": "off",
      "style/no-trailing-spaces": "off",
      "style/operator-linebreak": "off",
      "style/padded-blocks": "off",
      "style/quote-props": "off",
      "style/quotes": "off",
      "style/semi-spacing": "off",
      "style/semi": "off",
      "style/spaced-comment": "off",
      "switch-colon-spacing": "off",
      "tailwindcss/no-custom-classname": "off",
      /**
       * @see eslint
       * @see https://eslint.org/docs/rules/
       * @see https://eslint.org/docs/user-guide/configuring/rules
       */
      "array-bracket-newline": ["off", "consistent"],
      "array-bracket-spacing": ["off", "never"],
      "arrow-body-style": ["off", "always"],
      "arrow-parens": "off",
      "arrow-spacing": "off",
      "block-scoped-var": "off",
      "block-spacing": ["off", "always"],
      "brace-style": ["off", "1tbs", { "allowSingleLine": true }],
      "camelcase": "off",
      "comma-dangle": ["off", "only-multiline"],
      "comma-spacing": ["off", { "before": false, "after": true }],
      "comma-style": ["off", "last"],
      "complexity": ["off", 63],
      "consistent-return": "off",
      "curly": "off",
      "default-case-last": "off",
      "default-case": "off",
      "default-param-last": ["off"],
      "dot-location": ["off", "property"],
      "dot-notation": "off",
      "eol-last": ["off", "always"],
      "eqeqeq": ["off", "always"],
      "eslint-plugin-jsx-a11y/blob": "off",
      "func-call-spacing": ["off", "never"],
      "func-names": "off",
      "func-style": ["off", "declaration"],
      "function-call-argument-newline": ["off", "consistent"],
      "function-paren-newline": ["off", "consistent"],
      "global-require": "off",
      "implicit-arrow-linebreak": "off",
      "@stylistic/max-len": [
        "off",
        {
          code: 1000,
          ignoreComments: true,
          ignoreTrailingComments: true,
        },
      ],
      "computed-property-spacing": ["off", "never", { enforceForClassMembers: true }],
      "sort-imports": ["off", { ignoreCase: true, ignoreDeclarationSort: false }],
      "space-before-function-paren": ["off", { anonymous: "always", named: "never", asyncArrow: "always" }],
      "react/jsx-key": [
        "off",
        {
          checkFragmentShorthand: true,
          checkKeyMustBeforeSpread: true,
          warnOnDuplicates: true,
        },
      ],
      "no-multiple-empty-lines": ["off", { max: 1, maxBOF: 0, maxEOF: 1 }],
    },
  },
  ...compat.config({
    plugins: ["eslint:recommended", "@limegrass/import-alias", "jsx-a11y", "sonarjs", "react-refresh"],
    extends: ["plugin:jsx-a11y/recommended", "plugin:sonarjs/recommended"],
    rules: {
      "@limegrass/import-alias/import-alias": "off", // @limegrass
      "deprecation/deprecation": "off", // sonarjs
      "react-refresh/only-export-components": "off", // react-refresh
    },
  }),
);

/**
 * Resources and Inspirations
 * ==========================
 * @see https://eslint.org/docs/latest/rules eslint
 */
