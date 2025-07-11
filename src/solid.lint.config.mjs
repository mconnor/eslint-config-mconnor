import js from '@eslint/js';
import solid from 'eslint-plugin-solid/configs/recommended';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default [
  js.configs.recommended, // replaces eslint:recommended
  solid,
];
