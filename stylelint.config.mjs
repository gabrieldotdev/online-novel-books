/** @type {import('stylelint').Config} */
export default {
  plugins: ["stylelint-scss"],
  extends: ["stylelint-config-standard-scss", "stylelint-config-css-modules"],
  ignoreFiles: ["node_modules/**"],
  rules: {
    "rule-empty-line-before": "off",
    "custom-property-empty-line-before": "off",
    "declaration-block-trailing-semicolon": "off",
    "no-descending-specificity": "off",
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
  },
  overrides: [{ files: ["**/*.scss"], customSyntax: "postcss-scss" }],
};
