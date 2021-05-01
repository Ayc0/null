## How to use

`Null` is a proxy that always returns itself when you try to access its value.

It avoids having the error `cannot read property "..." of undefined`

```js
import { Null } from "null";

Null.foo.bar.baz; // returns Null
```

## Install

### NPM

```bash
npm install --save git+https://github.com/Ayc0/null.git
```

### Yarn

```bash
yarn add null@https://github.com/Ayc0/null
```
