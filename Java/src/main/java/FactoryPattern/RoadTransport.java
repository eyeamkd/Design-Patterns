package FactoryPattern;

public class RoadTransport extends Transport {
    public RoadTransport(){
        this.transportType = "Road";
    }
    @Override
    public void deliver() {
        System.out.println("Delivering Through Road");
    }
}
