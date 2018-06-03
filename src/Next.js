'use strict'

const AsyncObject = require('@guseyn/cutie').AsyncObject;

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
