import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";
import autofix from "eslint-plugin-autofix";
import jsxA11y from "eslint-plugin-jsx-a11y";

import reactHooks from "eslint-plugin-react-hooks";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import { fixupConfigRules } from "@eslint/compat";
import unusedImports from "eslint-plugin-unused-imports";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2021,
        sourceType: "module",
      },
      globals: globals.browser,
    },
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...fixupConfigRules(pluginReactConfig),

  {
    settings: {
      react: { version: "detect" },
    },
  },
  {
    plugins: {
      "unused-imports": unusedImports,
      prettier: prettier,
      autofix: autofix,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
  },
  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": "error",
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": ["error"],
      "unused-imports/no-unused-imports": "error",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [
        1,
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],
      "prettier/prettier": [
        "error",
        {
          tabWidth: 2,
          semi: true,
          singleQuote: false,
          trailingComma: "all",
          printWidth: 80,
          useTabs: false,
          endOfLine: "auto",
        },
      ],
    },
  },
];
