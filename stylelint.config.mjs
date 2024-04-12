/** @type {import('stylelint').Config} */
export default {
  plugins: ["stylelint-scss"],
  extends: ["stylelint-config-standard-scss", "stylelint-config-css-modules"],
  ignoreFiles: ["node_modules/**"],
  rules: {
    "scss/at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: ["tailwind"],
      },
    ],
  },
  overrides: [{ files: ["**/*.scss"], customSyntax: "postcss-scss" }],
};
