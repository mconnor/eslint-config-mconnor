
import * as svelteParser from 'svelte-eslint-parser';
import svelte from 'eslint-plugin-svelte';
// import globals from 'globals';
// import ignoresConfig from '#lib/ignores.config.mjs';
import tseslint from 'typescript-eslint';

import extensionInstanceObj from '#lib/fileExtensions.mjs';
const extraFileExtensions = extensionInstanceObj.getExtensions();


/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default tseslint.config({
  extends: [...svelte.configs.recommended, ...svelte.configs.prettier],
  files: ['**/*.svelte'],

  languageOptions: {
    parser: svelteParser,
    parserOptions: {
      parser: tseslint.parser,
      extraFileExtensions,
    },
  },
  rules: { 'no-undef': 'off' },
});
