import { formatTime } from "../helpers";
import { getMoonPhase, findMoonData } from "../data/weather_data";

export function getMoonData(moonData,timezoneOffset){

    const moon = findMoonData(getMoonPhase(moonData.moon_phase));

    return {
        phase: moon?.phase,
        icon: moon?.icon,
        moonrise: formatTime(moonData.moonrise,timezoneOffset),
        moonset: formatTime(moonData.moonset,timezoneOffset)
    }
    
}