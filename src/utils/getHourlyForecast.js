import { getWeatherIconData } from "../data/weather_data";
import { formatTime } from "../helpers";

export function getHourlyForecast(forecast, timezoneOffset){

  const now = Date.now() / 1000; // current time в секунди

  const next24h = forecast.list
    .filter(item => item.dt > now) // само бъдещи часове
    .slice(0, 8); // следващите 24 часа

  return next24h.map((weather) => {

    const type = weather.weather[0]?.main;
    const iconData = getWeatherIconData(type);

    return {
      time: formatTime(weather.dt, timezoneOffset),
      temp: weather.main.temp,
      feels_like: weather.main.feels_like,
      humidity: weather.main.humidity,
      wind: weather.wind.speed,
      pressure: weather.main.pressure,
      visibility: weather.visibility,
      description: weather.weather[0]?.description,
      type: type,
      icon: iconData?.icon,
      iconColor: iconData?.color
    };

  });

}
