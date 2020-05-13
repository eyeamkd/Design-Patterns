export class Duck{  
    public species:string; 
    constructor(species:string){ 
        this.species = species;
    }

    // public quack(){ 
        //implemented interface
    // } 

    public swim(){ 

    } 

    public display(){  
        console.log("Looks like a ",this.species);
    } 

    // public fly(){ 
    //     console.log("Duck Flying");
    // } 

} 

export interface Flyable{  
        fly() : void;  
} 

export interface Quakable{ 
        Quack():void; 
}

