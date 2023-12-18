package AbstractFactoryPattern;

public class KidsDrink implements Drink{
    private final String drinkType;

    public KidsDrink(){
        System.out.println("This is Kids Drink");
        this.drinkType = "Kids Drink";
    }
}
