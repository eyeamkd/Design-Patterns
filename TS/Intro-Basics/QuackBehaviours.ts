import { Quakable } from "./Duck";

export class Squeakable implements Quakable{ 
    Quack(){ 
        console.log("Squeak!!");
    }
} 

export class Quack implements Quakable{ 
    Quack(){ 
        console.log("Quack!!"); 
    } 
} 

export class Qweak implements Quakable { 
    Quack(){ 
        console.log("Queak Queak!!"); 
    }
}