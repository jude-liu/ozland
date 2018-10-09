'use strict';

const config = require('config');
const thrift = require('thrift');
const IndexService = require('../lib/gen-nodejs/IndexService');
const OwnerService = require('../lib/gen-nodejs/OwnerService');

// 多服务方法调用
let multi = new thrift.Multiplexer();

let conn = thrift.createConnection(config.host, config.port, {
  transport: thrift.TBufferedTransport,
  protocol: thrift.TBinaryProtocol,
});
let clientIndex = multi.createClient('indexCtrl', IndexService, conn);
let clientOwner = multi.createClient('ownerCtrl', OwnerService, conn);

async function test() {
  // test index service
  try {
    let res = await clientIndex.getVersion();
    console.log('getVersion:', res);
  } catch (err) {
    console.error(err);
  }

  // test owner service
  try {
    let res = await clientOwner.getOwner();
    console.log('getOwner:', res);
  } catch (err) {
    console.error(err);
  }
}

test();
