package FactoryPattern;

public class RoadFactory implements  TransportFactory{
    @Override
    public RoadTransport createTransport() {
        return new RoadTransport();
    }
}
