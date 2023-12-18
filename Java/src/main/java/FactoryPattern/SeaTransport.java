package FactoryPattern;

public class SeaTransport extends Transport {
    public SeaTransport(){
        this.transportType = "Sea";
    }
    @Override
    public void deliver() {
        System.out.print("Delivering Through Sea");
    }
}
