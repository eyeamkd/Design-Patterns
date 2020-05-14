"use strict";
exports.__esModule = true;
var Duck = /** @class */ (function () {
    function Duck(species) {
        this.species = species;
    }
    Duck.prototype.performQuack = function () {
        this.quackable.Quack();
    };
    Duck.prototype.performFly = function () {
        this.flyable.fly();
    };
    Duck.prototype.swim = function () {
    };
    Duck.prototype.display = function () {
        console.log("Looks like a ", this.species);
    };
    Duck.prototype.flyBehaviourSetter = function (flyBehaviour) {
        this.flyable = flyBehaviour;
    };
    Duck.prototype.quackBehaviourSetter = function (quackBehaviour) {
        this.quackable = quackBehaviour;
    };
    return Duck;
}());
exports.Duck = Duck;
