'use strict';

const path = require('path');
const ajv = require('../component/validator');

class Model {

  validate(schemaName, params) {
    let schema = null;

    try {
      let modulePath = path.join(process.cwd(), '/lib/schema', schemaName);
      console.log(modulePath);
      schema = require(modulePath);
    } catch (err) {
      throw(err);
    }

    if (!schema) throw(new Error(`module ${modulePath} dose not exist.`));

    return ajv.validate(schema, params);
  }
}

module.exports = Model;
