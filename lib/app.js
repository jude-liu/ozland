'use strict';

const config = require('config');
const thrift = require('thrift');
const IndexCtrl = require('./controller/index');
const OwnerCtrl = require('./controller/owner');
const IndexService = require('../thrift/gen-nodejs/IndexService');
const OwnerService = require('../thrift/gen-nodejs/OwnerService');


let multiplexedProcessor = new thrift.MultiplexedProcessor();

multiplexedProcessor.registerProcessor(
    'indexCtrl', new IndexService.Processor(new IndexCtrl()));

multiplexedProcessor.registerProcessor(
    'ownerCtrl', new OwnerService.Processor(new OwnerCtrl()));

let server = thrift.createMultiplexServer(multiplexedProcessor);

server.listen(config.port);

server.on('error', (err) => {
  console.error(err);
});

server.on('listening', () => {
  console.log('Server bound.');
});
