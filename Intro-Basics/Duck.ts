export class Duck{  
    public species:string; 
    constructor(species:string){ 
        this.species = species;
    } 

    flyable : Flyable; 

    quackable : Quakable; 

    public performQuack(){  

        this.quackable.Quack(); 
    } 

    public performFly(){ 
        this.flyable.fly(); 
    }

    public swim(){ 

    } 

    public display(){  
        console.log("Looks like a ",this.species);
    }  

    public flyBehaviourSetter( flyBehaviour : Flyable){ 
        this.flyable = flyBehaviour; 
    } 

    public quackBehaviourSetter(quackBehaviour : Quakable){ 
        this.quackable = quackBehaviour;
    } 

} 

export interface Flyable{  
        fly() : void;   

} 

export interface Quakable{ 
        Quack():void; 
} 

