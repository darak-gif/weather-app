import { getWeatherIconData } from "../data/weather_data";

export function get5DaysForecast(forecast){

  const days = {};

  forecast.list.forEach(item => {

    const date = item.dt_txt.split(" ")[0];

    if (!days[date]) {
      days[date] = [];
    }

    days[date].push(item);

  });

  return Object.keys(days).slice(1,6).map(date => {

    const day = new Date(date).toLocaleDateString("en-US", {weekday: "short"});

    const dayData = days[date];

    const temps = dayData.map(d => d.main.temp);

    const minTemp = Math.min(...temps);
    const maxTemp = Math.max(...temps);

    const noonData = dayData.find(item => item.dt_txt.includes("12:00:00")) || dayData[0];

    const type = noonData.weather[0].main;
    const description = noonData.weather[0].description;
    const humidity = noonData.main.humidity;

    const iconData = getWeatherIconData(type);

    return {
      day,
      date,
      description,
      humidity,
      minTemp,
      maxTemp,
      icon: iconData?.icon,
      iconColor: iconData?.color
    };

  });

}
