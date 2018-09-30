'use strict';

const Owner = require('../model/owner');

class OwnerController {
  getOwner(cb) {
    let params = {
      id: "123123",
      name: "test",
      description: "Hey,man!",
      avatar: "http://123123.jpg"
    };
    let owner = new Owner(params);
    console.log('owner', owner, owner.toString());

    cb(null, JSON.stringify(owner));
  }
}

module.exports = OwnerController;
