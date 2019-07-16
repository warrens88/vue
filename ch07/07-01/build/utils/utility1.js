"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.add = add;
// 개별 export
var var1 = exports.var1 = 1000;
function add(a, b) {
    return a + b;
}

// 묶음 export
var var2 = 1000;
function add2(a, b) {
    return a + b;
}

exports.var2 = var2;
exports.add2 = add2;

// 단일 export 일 경우 default 키워드를 이용

var calc = {
    add: function add(x, y) {
        return x + y;
    },
    multiply: function multiply(x, y) {
        return x * y;
    }
};

exports.default = calc;