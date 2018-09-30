'use strict';

const Ajv = require('ajv');
const localize = require('ajv-i18n');

let ajv = new Ajv();

function validate (schema, params, schemaName) {
  let res = { pass: true, msg: null }
  let validator = ajv.compile(schema)
  let isValid = validator(params)

  if (!isValid) {
    // debug('ajv validate error:', validator.errors)
    // 错误信息本地化
    localize.zh(validator.errors)
    let msg = ajv.errorsText(validator.errors, { dataVar: schemaName || '请求参数' })
    res.pass = false
    res.msg = msg
  }

  return res
}

module.exports.validate = validate;
