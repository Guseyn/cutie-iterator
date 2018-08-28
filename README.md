# cutie-iterator

[![NPM Version][npm-image]][npm-url]

[Cutie](https://github.com/Guseyn/cutie) extension for work with </b>iterable protocol</b> in JavaScript. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).


# Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-iterator/tree/master/test).

# Usage

```js
const {
  // Needed async objects here from the table below
} = require('@cuties/iterator');
```
For more information about parameters in the async objects visit [MDN docs for Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols).

| Async Object | Async/sync call | Parameters(default value/description) | Representation result |
| ------------- | ----------------| ---------- | --------------------- |
| `IteratorProtocol` | `iterator[Symbol.iterator]` | `iterator` | `object` |
| `Next` | `iterator.next` | `iterator.next` | `object` |

[npm-image]: https://img.shields.io/npm/v/@cuties/iterator.svg
[npm-url]: https://npmjs.org/package/@cuties/iterator


