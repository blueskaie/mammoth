// eslint-disable-next-line
const { readGitignoreFiles } = require("eslint-gitignore");

module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      // Allows for the parsing of JSX
      jsx: true,
    },
  },
  ignorePatterns: readGitignoreFiles({ cwd: __dirname }),
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: [
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    // "plugin:prettier/recommended",
  ],
  rules: {
    "react/jsx-key": "off",
    "react/display-name": "off",
    "react/prop-types": "off",
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-redeclare": "off",
    "@typescript-eslint/no-redeclare": "off",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react-hooks/exhaustive-deps": "off",
    // "prettier/prettier": [
    //   "error",
    //   {
    //     endOfLine: "auto",
    //   },
    // ],
  },
};
