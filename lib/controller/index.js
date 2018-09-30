'use strict';

const pkg = require('../../package.json');


class IndexController {
  getVersion(cb) {
    cb(null, pkg.version);
  }
}


module.exports = IndexController;
