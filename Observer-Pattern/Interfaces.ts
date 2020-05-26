export interface Subject{ 
    registerObserver(): Boolean; 
    removeObserver(): Boolean; 
    notifyObserver(): void; 
} 

export interface Observer{ 
    update(): void; 
} 

