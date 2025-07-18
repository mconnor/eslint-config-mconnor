import json from '@eslint/json';

/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default [
  // lint JSON files
  {
    files: ['**/*.json'],

    // ignores: ['package-lock.json'],
    language: 'json/json',
    ...json.configs.recommended,
  },

  // lint JSONC files
  {
    files: ['**/*.jsonc'],
    language: 'json/jsonc',
    ...json.configs.recommended,
  },

  // lint JSON5 files
  {
    files: ['**/*.json5'],
    language: 'json/json5',
    ...json.configs.recommended,
  },
];
