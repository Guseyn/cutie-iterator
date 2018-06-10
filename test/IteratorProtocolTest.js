'use strict'

const {
  DeepStrictEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  IteratorProtocol
} = require('./../index');

const str = "string";

new DeepStrictEqualAssertion(
  new IteratorProtocol(
    str
  ), str[Symbol.iterator]()
).call();
