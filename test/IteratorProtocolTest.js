'use strict'

const {
  DeepStrictEqualAssertion
} = require('@cuties/assert');
const {
  IteratorProtocol
} = require('./../index');

const str = "string";

new DeepStrictEqualAssertion(
  new IteratorProtocol(
    str
  ), str[Symbol.iterator]()
).call();
