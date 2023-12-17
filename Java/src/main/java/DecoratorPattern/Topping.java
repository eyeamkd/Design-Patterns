package DecoratorPattern;

public class Topping {
    public double price;
    public String name;
    public String toppingType;
    public String description;

    Topping(String name, double price, String description){
        this.name = name;
        this.price = price;
        this.description = description;
    }

    public double getPrice(){
        return price;
    }

    public String getName(){
        return name;
    }
}
