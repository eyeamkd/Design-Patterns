"use strict";
exports.__esModule = true;
var StatisticsDisplay = /** @class */ (function () {
    function StatisticsDisplay(weatherData) {
        this.temperatureRecords = [];
        this.pressureRecords = [];
        this.humidityRecords = [];
        this.weatherData = weatherData;
        weatherData.registerObserver(this);
    }
    StatisticsDisplay.prototype.update = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.temperatureRecords.push(this.temperature);
        this.pressureRecords.push(this.pressure);
        this.humidityRecords.push(this.humidity);
        this.calculateAverages();
        this.display();
    };
    StatisticsDisplay.prototype.display = function () {
        console.log("---- STATISTICS DISPLAY ------");
        console.log("Average Temperature is:  ", this.calculateTemperatureAverage());
        console.log("Average Pressure is:  ", this.calculatePressureAverage());
        console.log("Average Humidity is:  ", this.calculateHumidityAverage());
    };
    StatisticsDisplay.prototype.calculateMaxMinTemperature = function () {
        if (this.temperature > this.maxTemperature) {
            this.maxTemperature = this.temperature;
        }
        if (this.temperature < this.minTemperature) {
            this.minTemperature = this.temperature;
        }
    };
    StatisticsDisplay.prototype.calculateAverages = function () {
        this.temperatureAverage = this.calculateTemperatureAverage();
        this.pressureAverage = this.calculatePressureAverage();
        this.humidityAverage = this.calculateHumidityAverage();
    };
    StatisticsDisplay.prototype.calculateTemperatureAverage = function () {
        var totalVal = this.temperatureRecords.reduce(function (accumulator, temperature) { return accumulator + temperature; });
        return totalVal / this.temperatureRecords.length;
    };
    StatisticsDisplay.prototype.calculatePressureAverage = function () {
        var totalVal = this.pressureRecords.reduce(function (accumulator, temperature) { return accumulator + temperature; });
        return totalVal / this.pressureRecords.length;
    };
    StatisticsDisplay.prototype.calculateHumidityAverage = function () {
        var totalVal = this.humidityRecords.reduce(function (accumulator, temperature) { return accumulator + temperature; });
        return totalVal / this.humidityRecords.length;
    };
    return StatisticsDisplay;
}());
exports.StatisticsDisplay = StatisticsDisplay;
