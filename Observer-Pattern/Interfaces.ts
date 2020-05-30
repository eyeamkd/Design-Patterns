export interface Subject{ 
    registerObserver(observer : Observer); 
    removeObserver(observer : Observer); 
    notifyObservers(); 
} 

export interface Observer{ 
    update(temperature : number, humidity: number, pressure: number): void; 
}  

export interface WeatherDisplayElement{ 
    display(): void;
}

