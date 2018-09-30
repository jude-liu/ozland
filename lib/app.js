'use strict'

const config = require('config');
const thrift = require('thrift');
const pkg = require('../package.json');
const IndexCtrl = require('./controller/index');
const OwnerCtrl = require('./controller/owner');
const IndexService = require('./gen-nodejs/IndexService');
const OwnerService = require('./gen-nodejs/OwnerService');


let multiplexedProcessor = new thrift.MultiplexedProcessor();
multiplexedProcessor.registerProcessor('indexCtrl', new IndexService.Processor(new IndexCtrl()));
multiplexedProcessor.registerProcessor('ownerCtrl', new OwnerService.Processor(new OwnerCtrl()));

let server = thrift.createMultiplexServer(multiplexedProcessor)

server.listen(8800)

server.on('error', (err) => {
  console.error(err)
})

server.on('listening', () => {
  console.log('Server bound.')
})
