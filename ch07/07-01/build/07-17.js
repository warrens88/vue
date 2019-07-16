'use strict';

var _utility = require('./utils/utility1');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log((0, _utility.add)(4, 5));
console.log(_utility.var1);

console.log((0, _utility.add2)(4, 5));
console.log(_utility.var2);

console.log(_utility2.default.add(4, 5));
console.log(_utility2.default.multiply(4, 5));