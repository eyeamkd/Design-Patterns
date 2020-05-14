## Chapter 1 : Welcome to Design Patterns 

 -  So, the advantage of using inheritance is that, it makes code duplication easy. Like feature passing, suppose if you have a super class of “Chair” and you add extra durability support, then al the other sub classes of  Chairs will have the same extra durability, that’s nice. But at the same time, if you add the ‘color’ property to ‘red’, all the other chair classes that are sub-classes to this would also be ‘red’ in color. 

 - Interface do include the 'strict' behaviour in the code base, but one downside of it is that, there is no scope for code-reuse inside of an interface.  

 - What do you do? When you want a unique feature that is different for different Chairs but you also want to have the benefit of Code-Reuse. 

 - So, It is a Good Practice to separate the parts of the code that are susceptible to change and the parts that aren't. For Example, the structure of the Chair, that attributes to it having Four Legs and Two Hand-Rests, is common across all the chair models and isn't going to change, but the Back-Rest, Color, Material are all Dynamic Properties when observed from a view point of a Chair Class. 

 - Whenever you need to get the best out of the Interfaces and Inheritance, remember the above point. Make each Behaviour as an Interface, for example : *WheelFeature* is another Interface which makes it mandatory for the chair to have wheels, But any even office chair and the chair use to carry patients at the hospital (wheel chair) has wheels. So we create a *RotatableChair* Class that implements the above interface. And Office Chair can Inherit this Class.   

====== 

 ## Code Explanation : Interface -- Inheritance Design Pattern 

 - In our code, the FlyBehaviour and QuackBehaviour are the ones are the supposed to be changed rapidly, therefore we have decoupled it from the duck class.Now, For every new fly-type we can add a class in the FlyBehaviours.ts and same thing with Quack. Every class in these files implements Flyable and Quackable interfaces respectively. 

 - The Duck class has two variables of type Flyable and Quackable, these variables are then initialized in the sub-classes. 

 - flyable variable must support the implementation of fly interface, hence, we can initialize that variable in the sub-class with the particular  FlyBehaviour that we want. Importing it from the FlyBehaviour.ts file. 

====== 

 ## Code Explanation : Composition Pattern 

 - Every Duck sub-class needs to have the properties either one of the FlyBehaviour Classes and QuackBehaviour Classes 

 - But, normally it is expected that a class has only one super class. 

 - So, we couple these behaviour classes (2 of 'em) with the super class, i.e where we have those variables with the type Interfaces. 

 - And then we assign these variables in the sub-classes, to whatever type we want. 

 - Therefore, by having an interface set-up, the variables declared in the super-class, the behvaiour classes are tightly coupled together.  

 - This practice, of using two or more classes without extending them in a single class is called Composting.  

====== 

 ### Conclusion   

 * Encapsulate the dynamic parts 

 * Use Composition over Inheritance 

 * Always Program to Interfaces and not Implementation







