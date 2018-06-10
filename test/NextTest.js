'use strict'

const {
  DeepStrictEqualAssertion
} = require('@guseyn/cutie-assert');
const {
  IteratorProtocol,
  Next
} = require('./../index');

const str = "string";

new DeepStrictEqualAssertion(
  new Next(
    new IteratorProtocol(
      str
    )
  ), { value: 's', done: false }
).call();
