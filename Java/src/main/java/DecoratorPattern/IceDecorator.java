package DecoratorPattern;

public class IceDecorator extends BeverageDecorator{
    public IceDecorator(Beverage baseBeverage){
        this.beverage = baseBeverage;
    }
    @Override
    public double getCost() {
       return 10.00 + this.beverage.getCost();
    }

    @Override
    public void getDescription() {
        this.beverage.getDescription();
        System.out.print(" + Ice");

    }
}
