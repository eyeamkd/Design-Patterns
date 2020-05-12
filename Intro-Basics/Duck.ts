export class Duck{  
    public species:string; 
    constructor(species:string){ 
        this.species = species;
    }

    public quack(){ 

    } 

    public swim(){ 

    } 

    public display(){  
        console.log("Looks like a ",this.species);
    } 

    public fly(){ 
        console.log("Duck Flying");
    }
} 

