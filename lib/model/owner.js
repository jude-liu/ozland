'use strict';

const Model = require('./model');

class Owner extends Model {
  constructor(parmas) {
    if (typeof parmas !== 'object') throw TypeError(`Parameter ${parmas} is not object type.`);
    
    super(); 
    
    this.modelName = 'owner';
    this.schemaName ='owner';

    let result = super.validate(this.schemaName, parmas);

    if (!result.pass) {
      throw Error(result.msg);
    }

    Object.assign(this, parmas);
  }

  toString() {
    return `'${this.modelName}' model instance.`
  }
}

module.exports = Owner;
