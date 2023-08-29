"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = exports.showMessage = void 0;
var TITLE = 'speed learning TypeScript';
function showMessage() {
    console.log("welcome to ".concat(TITLE, " !!"));
}
exports.showMessage = showMessage;
var Util = /** @class */ (function () {
    function Util() {
    }
    Util.getVer = function () {
        return '1.0.3';
    };
    return Util;
}());
exports.Util = Util;
