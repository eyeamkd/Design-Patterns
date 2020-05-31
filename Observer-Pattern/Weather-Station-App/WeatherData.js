"use strict";
exports.__esModule = true;
var WeatherData = /** @class */ (function () {
    function WeatherData() {
        this.observers = new Array();
    }
    WeatherData.prototype.registerObserver = function (observer) {
        this.observers.push(observer);
    };
    WeatherData.prototype.removeObserver = function (observer) {
        this.observers = this.observers.filter(function (_) { return _ === observer; });
    };
    WeatherData.prototype.notifyObservers = function () {
        var _this = this;
        this.observers.forEach(function (observer) {
            return observer.update(_this.temperature, _this.humidity, _this.pressure);
        });
    };
    WeatherData.prototype.getTemperature = function () {
        return this.temperature;
    };
    WeatherData.prototype.getHumidity = function () {
        return this.humidity;
    };
    WeatherData.prototype.getPressure = function () {
        return this.pressure;
    };
    WeatherData.prototype.measurementsChanged = function () {
        // this function is called whenever the measurements are changed;
        this.notifyObservers();
    };
    WeatherData.prototype.setMeasurements = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
        this.measurementsChanged();
    };
    return WeatherData;
}());
exports.WeatherData = WeatherData;
