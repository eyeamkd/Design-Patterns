package ObserverPattern;

public interface Subscriber {
    boolean subscribe(Observable observer);
    boolean unsubscribe(Observable observer);
    void notifyObservers();
}
