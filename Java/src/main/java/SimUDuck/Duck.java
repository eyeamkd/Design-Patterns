package SimUDuck;

public abstract class Duck {
    public String duckType;
    FlyBehaviour flyBehaviour;
    QuackBehaviour quackBehaviour;

    public void performFly(){
        if(flyBehaviour==null){
            System.out.println("This duck can't fly");
        }else {
            flyBehaviour.fly();
        }
    }

    public void performQuack(){
        if(quackBehaviour==null){
            System.out.println("This Duck can't Quack");
        }else{
            quackBehaviour.quack();
        }
    }

    public void display(){
        System.out.println("This is a Duck of type:  "+ duckType);
    }

    public void setFlyBehaviour(FlyBehaviour flyBehaviour){
        this.flyBehaviour = flyBehaviour;
    }

    public void setQuackBehaviour(QuackBehaviour quackBehaviour){
        this.quackBehaviour = quackBehaviour;
    }
}


