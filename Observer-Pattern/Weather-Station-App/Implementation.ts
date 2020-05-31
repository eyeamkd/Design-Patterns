import { WeatherDisplay } from "./WeatherDisplay";
import { WeatherData } from "./WeatherData"; 
import {CurrentConditionsDisplay} from './CurrentConditionsDisplay';
import { StatisticsDisplay } from "./StatisticsDisplay";

const weatherData = new WeatherData();  
const currentConditionsDisplay = new CurrentConditionsDisplay(weatherData); 
const statisticsDisplay = new StatisticsDisplay(weatherData);  

weatherData.setMeasurements(42,72,108);
weatherData.setMeasurements(46,70,100); 
weatherData.setMeasurements(40,70,102); 







