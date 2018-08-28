'use strict'

const AsyncObject = require('@cuties/cutie').AsyncObject;

// Represented result is object
class Next extends AsyncObject {

  constructor(iterator) {
    super(iterator);
  }

  definedSyncCall() {
    return (iterator) => {
      return iterator.next();
    }
  }

}

module.exports = Next;
