import { defineConfig } from 'eslint/config';
import css from '@eslint/css';
import { tailwind4 } from 'tailwind-csstree';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default defineConfig([
  {
    files: ['**/*.css'],
    plugins: {
      css,
    },
    language: 'css/css',
    languageOptions: {
      customSyntax: tailwind4,
      // tolerant: true,
    },
    rules: {
      'css/no-empty-blocks': 'error',
      'no-irregular-whitespace': 'off', // <-- disable for CSS
    },
  },
]);
