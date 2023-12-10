package ObserverPattern;

public class CurrentConditionsDisplay extends WeatherStationDisplay{
    private int temperature;
    private int pressure;
    private int humidity;

    CurrentConditionsDisplay(){
        this.temperature = 0;
        this.pressure = 0;
        this.humidity = 0;
    }
    @Override
    public void update(int temperature, int pressure, int humidity) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
    }

    public void ShowCurrentConditions(){
        System.out.println("Temperature is : " + temperature);
        System.out.println("Pressure is : " + pressure);
        System.out.println("Humidity is : " + humidity);
    }
}
