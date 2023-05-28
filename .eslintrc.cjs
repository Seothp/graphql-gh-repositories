// eslint-disable-next-line no-undef
module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["react-refresh", "import"],
  rules: {
    "react-refresh/only-export-components": "warn",
    // Export default is an antipattern
    // Reasons why named exports is better - https://gitlab.com/gitlab-org/frontend/rfcs/-/issues/20
    // Google StyleGuide - https://google.github.io/styleguide/jsguide.html#es-module-exports
    "import/no-default-export": "error",
  },
};
