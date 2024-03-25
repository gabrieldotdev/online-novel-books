/** @type {import("stylelint").Config} */
export default {
  plugins: ["stylelint-scss"],
  extends: ["stylelint-config-standard-scss", "stylelint-config-css-modules"],
  rules: {
    "rule-empty-line-before": "off",
    "custom-property-empty-line-before": "off",
    "at-rule-no-unknown": "off",
  },
  overrides: [{ files: ["**/*.scss"], customSyntax: "postcss-scss" }],
};
