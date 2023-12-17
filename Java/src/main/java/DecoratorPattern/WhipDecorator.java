package DecoratorPattern;

public class WhipDecorator extends  BeverageDecorator{
    public WhipDecorator(Beverage beverage) {
        this.beverage = beverage;
    }

    @Override
    public double getCost() {
        return 50.00 + this.beverage.getCost();
    }

    @Override
    public void getDescription() {
        this.beverage.getDescription();
        System.out.print(" + Whip");

    }
}
