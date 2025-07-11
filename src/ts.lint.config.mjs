
import 'eslint-plugin-only-warn';
import eslintPluginAstro from 'eslint-plugin-astro';
import tseslint from 'typescript-eslint';
import astroParser from 'astro-eslint-parser';
import globals from 'globals';
import baseConfig from "./index.mjs";
import extensionInstanceObj from './lib/fileExtensions.mjs';
const extraFileExtensions = extensionInstanceObj.getExtensions();


/**
 * A shared ESLint configuration for the repository.
 *
 * @type {import("eslint").Linter.Config}
 * */
export default tseslint.config(
  baseConfig,
  {
    name: '[*] TS Rules',
    languageOptions: {
      ecmaVersion: 'latest',
      parser: tseslint.parser,
      parserOptions: {
        sourceType: 'module',
        projectService: {
          allowDefaultProject: ['*.js'],
        },
        tsconfigRootDir: import.meta.dirname,
        extraFileExtensions,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'capitalized-comments': 'off',
      '@typescript-eslint/no-unsafe-call': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/consistent-type-definitions': 'warn',
    },
  },

  {
    name: '[*] tseslint: disabled files',
    files: ['**/*.astro'],
    extends: [
      eslintPluginAstro.configs.recommended,
      tseslint.configs.disableTypeChecked,
    ],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tseslint.parser,
        allowDefaultProject: ['*.astro'],
        ecmaFeatures: {
          jsx: false,
        },
        // tsconfigRootDir: import.meta.dirname,
        // project: [
        //   '../apps/*/tsconfig.json',
        //   '../packages/*/tsconfig.json',
        //   '../packages/ui-components/*tsconfig.json',
        // ],
        extraFileExtensions,
      },
    },
  },
  {
    name: '[*] .d.ts files',
    files: ['**/*.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-definitions': 'warn',
    },
  },
  {
    files: ['**/actions/*.ts'],
    rules: {
      '@typescript-eslint/no-misused-promises': 'warn',
    },
  },

  {
    name: '[*] js files',
    files: ['**/*.js'],
    extends: [tseslint.configs.disableTypeChecked],
  }
);

