import { Observer, WeatherDisplayElement, Subject } from "../Interfaces";

export class CurrentConditionsDisplay implements Observer, WeatherDisplayElement {
    
    private temperature; 
    private humidity; 
    private pressure; 
    private weatherData : Subject; 
    constructor( weatherData:Subject ) {
        this.weatherData = weatherData; 
        this.weatherData.registerObserver(this);
    } 

    update( temperature:number, humidity:number, pressure:number ){ 
        this.temperature = temperature;
        this.humidity = humidity; 
        this.pressure = pressure;  

        this.display();
    } 

    display(){  
        console.log("----CONDITIONS DISPLAY-----");
        console.log("Temperature is:",this.temperature);  
        console.log("Humidity is:",this.humidity);  
        console.log("Pressure is:",this.pressure); 
    }
    
}