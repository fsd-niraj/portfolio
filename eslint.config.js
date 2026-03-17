// @ts-check
import nextConfig from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import prettierConfig from "eslint-config-prettier/flat";

/** @type {import("eslint").Linter.Config[]} */
const config = [
  // Next.js recommended rules (React, React Hooks, Next.js, a11y, import)
  ...nextConfig,

  // TypeScript-eslint recommended rules
  ...nextTypescript,

  // Prettier — must come last, disables all ESLint formatting rules
  // so Prettier exclusively owns formatting and ESLint owns correctness
  prettierConfig,

  // Project-specific overrides
  {
    rules: {
      // ── TypeScript ──────────────────────────────────────────────────
      // Ignore intentionally unused vars prefixed with _
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // Prefer `import type` for type-only imports (better tree-shaking)
      "@typescript-eslint/consistent-type-imports": [
        "off",
        // { prefer: "type-imports" },
      ],
      // Warn on `any` — too broad to block, but worth seeing
      "@typescript-eslint/no-explicit-any": "off",

      // ── React ───────────────────────────────────────────────────────
      // <Component /> instead of <Component></Component>
      "react/self-closing-comp": "error",
      // Flag pointless fragment wrappers: <> ... </> when unnecessary
      "react/jsx-no-useless-fragment": "warn",

      // ── General ─────────────────────────────────────────────────────
      // Allow console.warn / console.error, block console.log in prod code
      "no-console": ["warn", { allow: ["warn", "error"] }],
      // Always prefer const over let when value never changes
      "prefer-const": "error",
      // No var declarations
      "no-var": "error",
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default config;
