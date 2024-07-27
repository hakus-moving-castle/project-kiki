const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
  globals: {
    React: true,
    JSX: true,
  },
  env: {
    node: true,
    browser: true,
  },
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  plugins: ["only-warn"],
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        endOfLine: "auto",
      },
    ],
  },
  settings: {
    "import/resolver": { typescript: { project } },
  },
  overrides: [
    {
      files: ["**/*.ts", "**/*.mts"],
      plugins: ["@typescript-eslint", "unused-imports", "simple-import-sort"],
      extends: ["airbnb-typescript", "plugin:prettier/recommended"],
      parser: "@typescript-eslint/parser",
      parserOptions: { project },
      rules: {
        "prettier/prettier": [
          "error",
          {
            singleQuote: true,
            endOfLine: "auto",
          },
        ],
        "@typescript-eslint/comma-dangle": "off",
        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/no-unused-vars": "off",
        "import/order": "off",
        "import/extensions": "off",
        "import/prefer-default-export": "off",
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
        "no-restricted-syntax": ["error", "ForInStatement", "LabeledStatement", "WithStatement"],
      },
    },
  ],
};
