import { Subject, Observer } from "../Interfaces";

export class WeatherData implements Subject {
    private observers: Observer[];
    private temperature: number;
    private humidity: number;
    private pressure: number; 

    constructor(){ 
        this.observers =  new Array();
    }

    registerObserver(observer: Observer) {
        this.observers.push(observer);
    }

    removeObserver(observer: Observer) {  
            this.observers =  this.observers.filter(_ => _ === observer ); 
    }

    notifyObservers(){
        this.observers.forEach((observer) =>
        observer.update(this.temperature, this.humidity, this.pressure)
        );
    }

    getTemperature() {
        return this.temperature;
    }

    getHumidity() {
        return this.humidity;
    }

    getPressure() {
        return this.pressure;
    }

    measurementsChanged() {
        // this function is called whenever the measurements are changed;
        this.notifyObservers();
    } 

    setMeasurements(temperature:number, humidity:number, pressure:number ){ 
        this.temperature = temperature; 
        this.pressure =  pressure; 
        this.humidity = humidity;  
        this.measurementsChanged(); 
    }
}
