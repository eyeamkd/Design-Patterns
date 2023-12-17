package ObserverPattern;

public class Customer implements Subscriber<String> {
    @Override
    public void update(Publication<String> publication) {
        System.out.println("New Message Received: " + publication.message);
    }
}
