import { Subject, Observer } from "../Interfaces";

export class WeatherData implements Subject{  
    registerObserver(observer : Observer){

    } 
    
    removeObserver(observer : Observer){ 

    } 

    notifyObserver(observer: Observer){ 
        observer.update();
    } 

    newDataReceived(){ 
        // this.notifyObserver()
    }
}