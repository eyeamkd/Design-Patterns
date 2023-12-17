package ObserverPattern;

public interface Publisher<T> {
    boolean subscribe(Subscriber<T> subscriber);
    boolean unsubscribe(Subscriber<T> subscriber);
    boolean broadcast(Publication<T> publication);
}
