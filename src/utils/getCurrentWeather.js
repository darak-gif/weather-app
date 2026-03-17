import { formatTime } from "../helpers";
import { getWeatherIconData } from "../data/weather_data";

export function getCurrentWeather(weather,timezoneOffset){

    const type = weather.weather[0]?.main;
    const iconData = getWeatherIconData(type);

    return {
        city: weather.name,
        temp: weather.main.temp,
        minTemp: weather.main.temp_min,
        maxTemp: weather.main.temp_max,
        feels_like: weather.main.feels_like,
        humidity: weather.main.humidity,
        wind: weather.wind.speed,
        pressure: weather.main.pressure,
        visibility: weather.visibility,
        description: weather.weather[0]?.description,
        icon: iconData.icon,
        iconColor: iconData.color,
        sunrise: formatTime(weather.sys.sunrise,timezoneOffset),
        sunset: formatTime(weather.sys.sunset,timezoneOffset)

    };
}