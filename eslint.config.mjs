import pluginJs from "@eslint/js";
import solid from "eslint-plugin-solid";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: [
      "dist",
      "docs",
      "regtest",
      "coverage",
      "build/dist",
      "node_modules",
      "dnssec-prover",
      "vite.config.mjs",
      "src/utils/dnssec/dnssec_prover*",
      "playwright-report/*",
    ],
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  solid.configs["flat/typescript"],
  {
    languageOptions: {
      parserOptions: {
        projectService: {
          defaultProject: "tsconfig.json",
          allowDefaultProject: ["public/*.js", "*.mjs", "*.js"],
        },
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    rules: {
      "no-async-promise-executor": "off",
      "no-console": 1,
    },
  },
  {
    files: ["*/lazy/**"],
    rules: {
      "no-restricted-imports": "off",
    },
  },
  {
    rules: {
      "require-await": "error",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/consistent-type-imports": "warn",

      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/only-throw-error": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-enum-comparison": "off",
      "@typescript-eslint/prefer-promise-reject-errors": "off",
      "@typescript-eslint/no-unnecessary-type-assertion": "off",
    },
  },
  {
    files: ["tests/**/*.ts", "e2e/**/*.ts"],
    rules: {
      "no-console": "off",
    },
  },
];
