package AbstractFactoryPattern;

public interface AbstractFactory {
     Burger createBurger();

     Drink createDrink();

     Side createSide();
}
