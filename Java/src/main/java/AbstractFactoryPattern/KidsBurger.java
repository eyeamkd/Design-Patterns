package AbstractFactoryPattern;

public class KidsBurger implements Burger{
    private final String burgerType;

    public KidsBurger(){
        System.out.println("This is a Kids Burger");
        this.burgerType = "Kids";
    }

}
