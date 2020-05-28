export interface Subject{ 
    registerObserver(observer : Observer); 
    removeObserver(observer : Observer); 
    notifyObserver(observer : Observer); 
} 

export interface Observer{ 
    update(): void; 
} 

