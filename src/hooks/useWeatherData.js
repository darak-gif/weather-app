import { useQuery } from "@tanstack/react-query";


const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export function useWeatherData(location) {
  return useQuery({
    queryKey: ["weatherData", location],

    queryFn: async () => {

      const [currentRes, forecastRes] = await Promise.all([
        fetch(`${BASE_URL}/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=imperial`),
        fetch(`${BASE_URL}/forecast?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=imperial`)
      ]);

      if (!currentRes.ok || !forecastRes.ok) {
        throw new Error("Failed to fetch weather data");
      }

      const current = await currentRes.json();
      const forecast = await forecastRes.json();

      let moon = null;

      try {
        const moonRes = await fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=imperial`
        );

        if (moonRes.ok) {
          const oneCall = await moonRes.json();
          moon = oneCall.daily[0];
        }

      } catch {
        console.warn("Moon data failed");
        moon = null;
      }

      return {
      current,
      forecast,
      moon
      };
    },

    enabled: !!location,
    staleTime: 10 * 60 * 1000,
  });
}
