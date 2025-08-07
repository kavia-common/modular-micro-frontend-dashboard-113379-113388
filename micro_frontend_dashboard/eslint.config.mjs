import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginImport from "eslint-plugin-import";
import pluginA11y from "eslint-plugin-jsx-a11y";

/**
 * Enhanced ESLint configuration for React apps:
 * - Based on eslint:recommended + react/recommended
 * - Adds a11y, hooks, and strict import order checks
 * - Encourages Airbnb-style linting (with required custom rules)
 * - Stricter unused vars, prop-types, overall code quality
 */
export default [
  // General React + JS/JSX files target
  {
    files: ["**/*.{js,jsx,mjs,cjs}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true }
      },
      globals: {
        document: true,
        window: true,
        test: true,
        expect: true,
        JSX: true
      }
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      import: pluginImport,
      "jsx-a11y": pluginA11y
    },

    rules: {
      // Core best practice (JS + React)
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      // Accessibility/a11y linting
      ...pluginA11y.configs.recommended.rules,

      // React best practice
      "react/react-in-jsx-scope": "off", // Not needed in React 17+
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "error",
      "react/prop-types": "off", // Using TypeScript is preferable, else on if using JS only
      "react/function-component-definition": [
        "error",
        { namedComponents: "arrow-function" }
      ],

      // React Hooks rules
      ...pluginReactHooks.configs.recommended.rules,

      // Import style strictness
      "import/no-unresolved": "error",
      "import/order": [
        "warn",
        {
          "groups": [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"],
            "object",
            "type"
          ],
          "alphabetize": { "order": "asc", "caseInsensitive": true }
        }
      ],

      // Accessibility (a11y)
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/no-access-key": "error",

      // General strictness / quality
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "no-debugger": "error",
      "no-unused-vars": [
        "error",
        { varsIgnorePattern: 'React|App', args: "none", ignoreRestSiblings: true }
      ],
      "no-undef": "error",
    }
  }
];
