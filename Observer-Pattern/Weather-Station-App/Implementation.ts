import { WeatherDisplay } from "./WeatherDisplay";
import { WeatherData } from "./WeatherData";

const iphoneWeatherDisplay = new WeatherDisplay(); 
const weatherData = new WeatherData(); 
weatherData.registerObserver(iphoneWeatherDisplay); 
weatherData.notifyObserver(iphoneWeatherDisplay); 
iphoneWeatherDisplay.update(); 
