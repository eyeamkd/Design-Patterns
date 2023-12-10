package ObserverPattern;

public class ForecastDisplay extends WeatherStationDisplay{
    public int temperature;
    public int pressure;
    public int humidity;

    ForecastDisplay(){
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

    public void showForecast(){
        System.out.println("Forecast is: " + this.temperature*this.humidity*this.pressure
        );
    }
}
