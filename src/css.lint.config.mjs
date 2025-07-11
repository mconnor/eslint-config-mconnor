import { defineConfig } from 'eslint/config';
import css from '@eslint/css';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default defineConfig([
  // lint CSS files
  {
    files: ['**/*.css'],
    language: 'css/css',
    plugins: { css },
    extends: ['css/recommended'],
  },

  // your other configs here
]);
