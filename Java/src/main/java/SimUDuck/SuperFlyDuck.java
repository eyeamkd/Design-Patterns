package SimUDuck;

public class SuperFlyDuck extends Duck  {
    public SuperFlyDuck(){
        flyBehaviour = new SuperFlyMechanism();
        quackBehaviour = new SuperQuackMechanism();
        duckType = "SuperFlyQuackDuck";
    }
}


