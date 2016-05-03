'use strict';
var parser = require('./../lib/parser');
var parserutil = require('./../lib/parserutils');

var data = {};

var bulkEntitiesExp = {};

var result = parserutil.bulkEvaluate(bulkEntitiesExp, data);

console.log('result is ' + result);