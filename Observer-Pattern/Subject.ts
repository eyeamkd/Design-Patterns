import { Subject } from "./Interfaces";

class ConcreteSubject implements Subject{ 
    registerObserver(): Boolean{ 
        return true;
    } 

    notifyObserver(){ 

    } 

    removeObserver(): Boolean{ 
        return true;
    }

}