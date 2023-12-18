import { Observer, WeatherDisplayElement } from "../Interfaces";

export class ForecastDisplay implements Observer, WeatherDisplayElement{  
    private temperature; 
    private humidity; 
    private pressure; 
    update(temperature:number, humidity: number, pressure: number){ 
        this.temperature = temperature;
        this.pressure = pressure; 
        this.humidity = humidity; 
    } 
        display(){  
            console.log("-----FORECAST DISPLAY-----");
            console.log("Temperature is:",this.temperature);  
            console.log("Humidity is:",this.humidity);  
            console.log("Pressure is:",this.pressure); 
        }   
}