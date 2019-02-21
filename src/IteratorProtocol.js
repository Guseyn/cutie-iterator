'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject

// Represented result is object
class IteratorProtocol extends AsyncObject {
  constructor (iterator) {
    super(iterator)
  }

  syncCall () {
    return (iterator) => {
      return iterator[Symbol.iterator]()
    }
  }
}

module.exports = IteratorProtocol
