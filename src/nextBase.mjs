import js from '@eslint/js';


import eslintConfigPrettier from 'eslint-config-prettier';
import turboPlugin from "eslint-plugin-turbo";
import onlyWarn from 'eslint-plugin-only-warn';
import tseslint from 'typescript-eslint';
import ignoresConfig from './lib/ignores.config.mjs';
/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default [
  ignoresConfig,
  js.configs.recommended,

  ...tseslint.configs.recommended,
  {
    plugins: {
      turbo: turboPlugin,
    },
    rules: {
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
  {
    plugins: {
      onlyWarn,
    },
  },
  eslintConfigPrettier,
];
