import { MallardDuck} from  './MallardDuck';  
import { RubberDuck} from  './RubberDuck'; 

class Implementation { 
    mallardDuck : MallardDuck;  
    rubberDuck : RubberDuck;
    constructor(){ 
        this.mallardDuck = new MallardDuck("mallard");  

        this.mallardDuck.display(); 
        this.rubberDuck.display();
        // this.mallardDuck.fly(); 
        // this.rubberDuck.fly(); 
    } 

    
} 
