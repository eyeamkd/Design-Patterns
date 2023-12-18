import {Duck, Flyable, Quakable} from './Duck';  
import { FastFly } from './FlyBehaviours';
import { Squeakable } from './QuackBehaviours';

export class MallardDuck extends Duck{  
    
    constructor(){ 
        super("Mallard Duck"); 
        this.flyable = new FastFly();   
        this.quackable = new Squeakable(); 
    }  
} 

