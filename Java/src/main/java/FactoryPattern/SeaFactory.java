package FactoryPattern;

public class SeaFactory implements  TransportFactory{
    @Override
    public SeaTransport createTransport() {
        return new SeaTransport();
    }
}
