import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  {
    // Ignore certain files and directories from linting
    ignores: [
      '**/*.md', // Markdown files
      '**/tmp/**/*', // Temporary files
      '**/*.html', // HTML files
      '**/*.py', // Python files
      '**/*.txt', // Text files
      '**/app/**/*', // Application-specific files
      '**/dist/**/*', // Distribution/build files
      '**/node_modules/**/*' // Node.js dependencies
    ]
  },

  // Extend recommended ESLint rules, TypeScript plugin rules, and Prettier plugin rules
  ...compat.extends(
    'eslint:recommended', // Base ESLint recommended rules
    'plugin:@typescript-eslint/eslint-recommended', // TypeScript-specific recommended rules
    'plugin:@typescript-eslint/recommended', // Additional TypeScript rules
    'plugin:prettier/recommended' // Integrate Prettier for code formatting
  ),

  {
    linterOptions: {
      reportUnusedDisableDirectives: true // Report unused ESLint disable comments
    },

    languageOptions: {
      globals: {
        ...globals.browser, // Browser global variables
        ...globals.amd, // AMD module globals
        ...globals.node, // Node.js global variables
        $: 'readonly', // jQuery object
        jQuery: 'readonly', // jQuery object
        adsbygoogle: 'writable', // Google Ads
        hexo: 'readonly' // Hexo static site generator object
      },

      parser: tsParser, // Use TypeScript parser
      ecmaVersion: 2020, // Specify ECMAScript version 2020
      sourceType: 'module' // Enable ES6 modules
    },

    rules: {
      // Prettier formatting rules
      'prettier/prettier': [
        'error',
        {
          printWidth: 120, // Max line length
          tabWidth: 2, // Use 2 spaces for indentation
          useTabs: false, // Use spaces instead of tabs
          bracketSameLine: true, // Keep opening/closing tags on the same line for JSX
          bracketSpacing: true, // Add space inside object literal brackets
          semi: true, // Add semicolons at the end of statements
          singleQuote: true, // Use single quotes for strings
          trailingComma: 'none', // No trailing commas
          endOfLine: 'lf', // Use linefeed (\n) as the end-of-line character
          quoteProps: 'as-needed', // Only quote object properties when necessary

          // Override settings for specific file types
          overrides: [
            {
              excludeFiles: ['*.min.js', '*.min.cjs', '*.min.css', '*.min.html', '*.min.scss'], // Skip minified files
              files: ['*.js', '*.css', '*.sass', '*.html', '*.md', '*.ts'], // Target specific file types
              options: { semi: true } // Always use semicolons
            },
            {
              files: ['*.ejs', '*.njk', '*.html'], // Specific parser for templating and HTML files
              options: { parser: 'html' }
            }
          ]
        }
      ],

      // TypeScript-specific rules
      '@typescript-eslint/explicit-function-return-type': 'off', // Disable enforcing return type on functions
      'no-unused-vars': 'off', // Disable base rule (TypeScript has its own)

      // Allow unused variables starting with _ (common convention for ignored variables)
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_', // Ignore unused arguments starting with _
          varsIgnorePattern: '^_', // Ignore unused variables starting with _
          caughtErrorsIgnorePattern: '^_' // Ignore unused caught errors starting with _
        }
      ],

      '@typescript-eslint/no-explicit-any': 'off', // Allow usage of 'any' type
      '@typescript-eslint/no-this-alias': [
        'error',
        {
          allowDestructuring: false, // Disallow destructuring with aliasing
          allowedNames: ['self', 'hexo'] // Allow specific aliases like 'self' and 'hexo'
        }
      ],

      // JavaScript arrow function rules
      'arrow-body-style': 'off', // Disable forcing arrow function bodies
      'prefer-arrow-callback': 'off' // Disable enforcing arrow functions for callbacks
    }
  },

  {
    // Specific rules for JavaScript and CommonJS files
    files: ['**/*.js', '**/*.cjs'],

    rules: {
      '@typescript-eslint/no-var-requires': 'off', // Allow require() in CommonJS files
      '@typescript-eslint/no-require-imports': 'off' // Allow require imports
    }
  }
];
