"use strict";
exports.__esModule = true;
var SmoothFly = /** @class */ (function () {
    function SmoothFly() {
    }
    SmoothFly.prototype.fly = function () {
        console.log("Fly smoothly");
    };
    return SmoothFly;
}());
exports.SmoothFly = SmoothFly;
var FlapFly = /** @class */ (function () {
    function FlapFly() {
    }
    FlapFly.prototype.fly = function () {
        console.log("Flap and Fly");
    };
    return FlapFly;
}());
exports.FlapFly = FlapFly;
var FastFly = /** @class */ (function () {
    function FastFly() {
    }
    FastFly.prototype.fly = function () {
        console.log("Fly very fast");
    };
    return FastFly;
}());
exports.FastFly = FastFly;
