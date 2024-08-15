// @ts-check

import ESLintPluginStylistic from "@stylistic/eslint-plugin";
import tseslint from "typescript-eslint";

export default tseslint.config({
  plugins: {
    "@stylistic": ESLintPluginStylistic, // Type error on this line
  },
});
