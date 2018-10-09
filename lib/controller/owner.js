'use strict';

const ownerJSON = require('../config/owner.json');

class OwnerController {
  getOwner(cb) {
    cb(null, JSON.stringify(ownerJSON));
  }
}

module.exports = OwnerController;
