# Goes.CLiCK

The codebase for the website [https://goes.click](https://goes.click)

## 1. Roadmap

1. Jest configured and tests written
1. Convert everything in `.src/legacy` to typescript
1. Get sitemap module working correctly.
1. Consider react
1. Eslint w/ typescript support

## 2. Development

### 2.1 tsconfig `es6` vs. `commonjs`

> ts-loader uses tsc, the TypeScript compiler, and relies on your tsconfig.json configuration. Make sure to avoid setting module to "CommonJS", or webpack won't be able to [tree-shake](http://webpack.js.org/guides/tree-shaking/) your code.

_Webpack docs, Jul 6, 2021 [https://webpack.js.org/guides/typescript/](https://webpack.js.org/guides/typescript/)_

----

© 2021 Patrick Schreiber
