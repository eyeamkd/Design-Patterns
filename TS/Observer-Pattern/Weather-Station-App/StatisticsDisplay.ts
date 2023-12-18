import { WeatherDisplayElement, Observer } from "../Interfaces";
import { WeatherData } from "./WeatherData";

export class StatisticsDisplay implements WeatherDisplayElement, Observer { 
    private temperature; 
    private humidity; 
    private pressure;  
    private minTemperature; 
    private maxTemperature; 
    private temperatureAverage; 
    private humidityAverage; 
    private pressureAverage;  

    private temperatureRecords : number[] = [];
    private pressureRecords : number[] = [];
    private humidityRecords : number[] = [];

    private weatherData; 


    constructor(weatherData : WeatherData) {
        this.weatherData = weatherData; 
        weatherData.registerObserver(this);
    }  

    update( temperature:number, humidity:number, pressure:number ){ 
        this.temperature = temperature;
        this.humidity = humidity; 
        this.pressure = pressure;  

        this.temperatureRecords.push(this.temperature); 
        this.pressureRecords.push(this.pressure);
        this.humidityRecords.push(this.humidity);  

        this.calculateAverages(); 
        this.display();
    } 

    display(){   
            console.log("---- STATISTICS DISPLAY ------");
            console.log("Average Temperature is:  ", this.calculateTemperatureAverage()) 
            console.log("Average Pressure is:  ", this.calculatePressureAverage()) 
            console.log("Average Humidity is:  ", this.calculateHumidityAverage())
    } 

    calculateMaxMinTemperature(){ 
        if(this.temperature > this.maxTemperature){ 
            this.maxTemperature = this.temperature;
        }
        if(this.temperature < this.minTemperature){ 
            this.minTemperature = this.temperature;
        }
    } 

    calculateAverages(){ 
        this.temperatureAverage = this.calculateTemperatureAverage(); 
        this.pressureAverage = this.calculatePressureAverage();
        this.humidityAverage = this.calculateHumidityAverage();
    }

    calculateTemperatureAverage(){ 
        
        let totalVal = this.temperatureRecords.reduce((accumulator, temperature)=> accumulator+temperature); 
        return totalVal/this.temperatureRecords.length;
    } 

    calculatePressureAverage(){ 
        
        let totalVal = this.pressureRecords.reduce((accumulator, temperature)=> accumulator+temperature); 
        return totalVal/this.pressureRecords.length;
    } 

    calculateHumidityAverage(){ 
        let totalVal = this.humidityRecords.reduce((accumulator, temperature)=> accumulator+temperature); 
        return totalVal/this.humidityRecords.length;
    }

}