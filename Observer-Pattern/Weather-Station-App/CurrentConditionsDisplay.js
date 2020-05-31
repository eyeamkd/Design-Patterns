"use strict";
exports.__esModule = true;
var CurrentConditionsDisplay = /** @class */ (function () {
    function CurrentConditionsDisplay(weatherData) {
        this.weatherData = weatherData;
        this.weatherData.registerObserver(this);
    }
    CurrentConditionsDisplay.prototype.update = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    };
    CurrentConditionsDisplay.prototype.display = function () {
        console.log("----CONDITIONS DISPLAY-----");
        console.log("Temperature is:", this.temperature);
        console.log("Humidity is:", this.humidity);
        console.log("Pressure is:", this.pressure);
    };
    return CurrentConditionsDisplay;
}());
exports.CurrentConditionsDisplay = CurrentConditionsDisplay;
