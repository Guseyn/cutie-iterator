# cutie-iterator

[![NPM Version](https://img.shields.io/npm/v/@cuties/iterator.svg)](https://npmjs.org/package/@cuties/iterator)
[![Build Status](https://travis-ci.org/Guseyn/cutie-iterator.svg?branch=master)](https://travis-ci.org/Guseyn/cutie-iterator)
[![codecov](https://codecov.io/gh/Guseyn/cutie-iterator/branch/master/graph/badge.svg)](https://codecov.io/gh/Guseyn/cutie-iterator)

[Cutie](https://github.com/Guseyn/cutie) extension for work with </b>iterable protocol</b> in JavaScript. It's based on the [Async Tree Pattern](https://github.com/Guseyn/async-tree-patern/blob/master/Async_Tree_Patern.pdf).

## Examples

You can find examples of using this library in the [test directory](https://github.com/Guseyn/cutie-iterator/tree/master/test).

## Install

`npm install @cuties/iterator`

## Run test

`npm test`

## Run build

`npm run build`

## Usage

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
