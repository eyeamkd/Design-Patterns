"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Duck_1 = require("./Duck");
var FlyBehaviours_1 = require("./FlyBehaviours");
var QuackBehaviours_1 = require("./QuackBehaviours");
var MallardDuck = /** @class */ (function (_super) {
    __extends(MallardDuck, _super);
    function MallardDuck() {
        var _this = _super.call(this, "Mallard Duck") || this;
        _this.flyable = new FlyBehaviours_1.FastFly();
        _this.quackable = new QuackBehaviours_1.Squeakable();
        return _this;
    }
    return MallardDuck;
}(Duck_1.Duck));
exports.MallardDuck = MallardDuck;
