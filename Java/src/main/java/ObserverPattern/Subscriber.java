package ObserverPattern;

public interface Subscriber<T> {
    void update(Publication<T> message);
}
