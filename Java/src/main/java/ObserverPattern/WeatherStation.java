package ObserverPattern;

import java.util.ArrayList;

public class WeatherStation implements Subscriber {
    private ArrayList<Observable> subscribers;
    public int temperature = 123;
    public int humidity = 234;
    public int pressure = 567;

    public int getTemperature(){
        return this.temperature;
    }

    public int getHumidity(){
        return this.humidity;
    }

    public int getPressure(){
        return this.pressure;
    }

    public void measurementsChanged(){
        this.temperature+=1;
        this.humidity+=1;
        this.pressure+=1;

    }

    @Override
    public boolean subscribe(Observable observer) {
        if(!subscribers.contains(observer)){
            subscribers.add(observer);
            return true;
        }
        return false;
    }

    @Override
    public boolean unsubscribe(Observable observer) {
        if(subscribers.contains(observer)){
            subscribers.remove(observer);
            return true;
        }
        return false;
    }

    @Override
    public void notifyObservers() {
        for (Observable subscriber : this.subscribers) {
            subscriber.update(this.temperature, this.pressure, this.humidity);
        }
    }
}
