import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
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
    },
  },
  {
    rules: {
      "no-console": "warn",
      "no-unused-vars": "warn",
      "react/prop-types": "off",
      "@typescript-eslint/no-unused-vars": ["warn"],
      "unused-imports/no-unused-imports": "warn",
      "react/react-in-jsx-scope": "off",
      "react/jsx-filename-extension": [
        1,
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ],
    },
  },
];
