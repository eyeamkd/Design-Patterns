import { MallardDuck} from  './MallardDuck';  
import { RubberDuck} from  './RubberDuck'; 
import { SmoothFly } from './FlyBehaviours';

let mallardDuck  = new MallardDuck();  
console.log("----INITIAL FLY BEHAVIOUR-----"); 
mallardDuck.performFly();  
console.log("----FLY BEHAVIOUR AFTER RUNNING SETTER-----");   
mallardDuck.flyBehaviourSetter(new SmoothFly()); 
mallardDuck.performFly();  
mallardDuck.performQuack();
