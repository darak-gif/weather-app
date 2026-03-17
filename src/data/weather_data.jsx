import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Haze, CloudFog} from "lucide-react";
import { fahrenheitToCelsius } from "../helpers";

export const weatherDescription = [
  {
    type: "Clear",
    icon: Sun,
    color:"text-yellow-500"
  },
  {
    type: "Clouds",
    icon: Cloud,
    color:"text-sky-100"
  },
  {
    type: "Rain",
    icon: CloudRain,
    color:"text-blue-400"
  },
  {
    type: "Drizzle",
    icon: CloudRain,
    color:"text-blue-400"
  },
  {
    type: "Thunderstorm",
    icon: CloudLightning,
    color:"text-slate-500/70"
  },
  {
    type: "Snow",
    icon: CloudSnow,
    color:"text-sky-600/70"
  },
  {
    type: "Mist",
    icon: CloudFog,
    color:"text-slate-500/70"
  },
  {
    type: "Smoke",
    icon: CloudFog,
    color:"text-slate-500/70"
  },
  {
    type: "Haze",
    icon: Haze,
    color:"text-orange-400"
  },
  {
    type: "Dust",
    icon: CloudFog,
    color:"text-slate-500/70",
    label: "Dusty"
  },
  {
    type: "Fog",
    icon: CloudFog,
    color:"text-slate-500/70"
  },
  {
    type: "Sand",
    icon: CloudFog,
    color:"text-slate-500/70"
  },
  {
    type: "Ash",
    icon: CloudFog,
    color:"text-slate-500/70"
  },
  {
    type: "Squall",
    icon: CloudLightning,
    color:"text-slate-500/70"
  },
  {
    type: "Tornado",
    icon: CloudLightning,
    color:"text-slate-500/70"
  }
];

export function getWeatherIconData(type) {
  return weatherDescription.find(item => item.type === type) || weatherDescription[1];
}


export function getWeatherDetails(isCelsius,minTemp,maxTemp,humidity,wind,visibility,pressure){
  const weatherDetails = [
    {
      icon: "🌡️",
      label: "High / Low",
      value: isCelsius?  `${Math.round(fahrenheitToCelsius(maxTemp))}°/${Math.round(fahrenheitToCelsius(minTemp))}°`: `${Math.round(maxTemp)}°/${Math.round(minTemp)}°` //тука ако е в C или в F
    },
    {
      icon: "💧",
      label: "Humidity",
      value: `${humidity}%`
    },
    {
      icon: "💨",
      label: "Wind",
      value: isCelsius? `${(wind* 0.44704).toFixed(1)}m/s`: `${wind}mph`
    },
    {
      icon: "👁️",
      label: "Visibility",
      value: `${visibility >= 10000? "10+ km": `${Math.round(visibility / 1000)} km`}`

    },
    {
      icon: "⏲️",
      label: "Pressure",
      value: `${pressure}hPa`
    },
  ];

  return weatherDetails;
}


export const moonPhases = [
  { 
    phase: "New Moon", 
    icon: "🌑" 
  },
  { 
    phase: "Waxing Crescent", 
    icon: "🌒" 
  },
  { 
    phase: "First Quarter", 
    icon: "🌓" 
  },
  { 
    phase: "Waxing Gibbous", 
    icon: "🌔" 
  },
  { 
    phase: "Full Moon", 
    icon: "🌕" 
  },
  { 
    phase: "Waning Gibbous", 
    icon: "🌖" 
  },
  { 
    phase: "Last Quarter", 
    icon: "🌗" 
  },
  { 
    phase: "Waning Crescent", 
    icon: "🌘" 
  }
];

export function getMoonPhase(phase) {

  if (phase === 0 || phase === 1) return "New Moon";
  if (phase < 0.25) return "Waxing Crescent";
  if (phase === 0.25) return "First Quarter";
  if (phase < 0.5) return "Waxing Gibbous";
  if (phase === 0.5) return "Full Moon";
  if (phase < 0.75) return "Waning Gibbous";
  if (phase === 0.75) return "Last Quarter";

  return "Waning Crescent";
}

export function findMoonData(phase) {
  return moonPhases.find(item => item.phase === phase) || null;
}