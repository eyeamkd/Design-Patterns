package ObserverPattern;

import java.util.ArrayList;

public class Newspaper implements Publisher<String> {
    private ArrayList<Subscriber<String>> subscribers;
    @Override
    public boolean subscribe(Subscriber<String> subscriber) {
        if(!this.subscribers.contains(subscriber)){
            this.subscribers.add(subscriber);
            return true;
        }
        return false;
    }

    @Override
    public boolean unsubscribe(Subscriber<String> subscriber) {
        if(!this.subscribers.contains(subscriber)){
            this.subscribers.remove(subscriber);
            return true;
        }
        return false;
    }

    @Override
    public boolean broadcast(Publication<String> publication) {
        if(this.subscribers.isEmpty()){
            return false;
        }
       this.subscribers.forEach(subscriber -> subscriber.update(publication));
        return true;
    }
}
