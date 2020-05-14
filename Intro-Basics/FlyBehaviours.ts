import { Flyable } from "./Duck";

export class SmoothFly implements Flyable{ 
    fly(){ 
        console.log("Fly smoothly");
    }
}  

export class FlapFly implements Flyable{ 
    fly(){ 
        console.log("Flap and Fly");
    }
}  

export class FastFly implements Flyable{ 
    fly(){ 
        console.log("Fly very fast");
    }
} 