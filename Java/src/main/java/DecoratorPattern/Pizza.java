package DecoratorPattern;

import java.util.ArrayList;

public class Pizza {
    private double price;
    private PizzeBase base;
    private ArrayList<Topping> toppings;

    Pizza(double price, PizzeBase base){
        this.toppings = new ArrayList<Topping>();
        this.price = price;
        this.base = base;
    }

    double getPrice(){
        return this.price;
    }

    void AddTopping(Topping topping){
        this.toppings.add(topping);
    }

    void removeTopping(Topping topping){
        this.toppings.remove(topping);
    }
}
