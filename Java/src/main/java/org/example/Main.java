package org.example;

import AbstractFactoryPattern.*;
import DecoratorPattern.*;
import FactoryPattern.*;
import SimUDuck.*;

import java.io.FileInputStream;

// Press Shift twice to open the Search Everywhere dialog and type `show whitespaces`,
// then press Enter. You can now see whitespace characters in your code.
public class Main {
    public static void main(String[] args) {
        Beverage espresso = new Espresso();
        espresso = new WhipDecorator(espresso);
        espresso = new IceDecorator(espresso);
        espresso.getDescription();
        System.out.println("; Total Cost: "+ espresso.getCost());

        SeaFactory seaFactory = new SeaFactory();
        RoadFactory roadFactory = new RoadFactory();
        SeaTransport seaTransport = seaFactory.createTransport();
        RoadTransport roadTransport = roadFactory.createTransport();

        KidsMealFactory kidsMealFactory = new KidsMealFactory();
        Burger burger = kidsMealFactory.createBurger();
        Drink drink = kidsMealFactory.createDrink();
        Side side = kidsMealFactory.createSide();

        TeenMealFactory teenMealFactory = new TeenMealFactory();
        Burger teenBurger = teenMealFactory.createBurger();
        Drink teenDrink = teenMealFactory.createDrink();
        Side teenSide = teenMealFactory.createSide();




    }
}