package DecoratorPattern;

public class Espresso implements Beverage{
    @Override
    public double getCost() {
        return 100.00;
    }

    @Override
    public void getDescription() {
        System.out.print("Espresso ");
    }
}
