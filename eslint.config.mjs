import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: ["node_modules/**", "dist/**", ".astro/**", "public/**", "coverage/**"],
  },
  js.configs.recommended,
  {
    files: ["**/*.ts", "**/*.svelte"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        extraFileExtensions: [".svelte"],
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
    },
  },
];
