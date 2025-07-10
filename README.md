# Eslint Settings by Mike Connor

I've spent way too much time on this.

Linting configs for

- Astro
- Typescript
- next/react
- vue
- svelte
- markdown
- solid

They can be imported into your package and combined like so:

```js
import markdownConfig from '@repo/eslint-config/md-config';
import tsLint from '@repo/eslint-config/ts-lint';

/** @type {import("eslint").Linter.Config} */
const config = [...tsLint, ...markdownConfig];

export default config;
```

[github](https://github.com/mconnor/eslint-config-mconnor)
