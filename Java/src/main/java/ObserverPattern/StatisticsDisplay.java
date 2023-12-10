package ObserverPattern;

public class StatisticsDisplay extends WeatherStationDisplay{
    private int temperature;
    private int pressure;
    private  int humidity;

    @Override
    public void update(int temperature, int pressure, int humidity) {
        this.temperature = temperature;
        this.pressure = pressure;
        this.humidity = humidity;
    }

    public void showStatisticsDisplay(){
        //some random value calculation to showcase statistics
        System.out.println("Statistics Display is :" + this.temperature+this.humidity*this.pressure);
    }
}
