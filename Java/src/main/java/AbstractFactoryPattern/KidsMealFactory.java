package AbstractFactoryPattern;

public class KidsMealFactory implements  AbstractFactory{
    @Override
    public KidsBurger createBurger() {
        return new KidsBurger();
    }

    @Override
    public KidsDrink createDrink() {
        return new KidsDrink();
    }

    @Override
    public KidsSide createSide() {
        return new KidsSide();
    }
}
