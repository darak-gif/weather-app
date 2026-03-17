import { Sunrise,Sunset, Snowflake} from "lucide-react";
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Haze, CloudFog} from "lucide-react";
import { getWeatherDetails } from "../../src/data/weather_data"
import { fahrenheitToCelsius } from "../helpers";
import { useIsMobile } from "../hooks/isMobile";
import { useDate } from "../hooks/useDate";
import { useClock } from "../hooks/useClock";



export function Card ({currentWeather,location,isCelsius}) {

  const date = useDate();
  const time = useClock();

  const description = currentWeather?.description;
  const temp = currentWeather?.temp;
  const feels_like = currentWeather?.feels_like;
  

  const temp_C=fahrenheitToCelsius(temp);
  const feels_like_C=fahrenheitToCelsius(feels_like);
  
    return <div className="bg-slate-400/40 shadow-xl/30 mt-14 md:mt-18 lg:mt-30 h-60 lg:h-70 xl:h-80 2xl:h-90 mx-auto w-3/4 md:w-1/2 border border-slate-500/30 rounded-lg mb-20 lg:mb-42">
        <div className="flex justify-center">
            <div className={`w-1/2 h-60 md:h-70 lg:h-80 xl:h-90 2xl:h-100 p-4 md:p-6 2xl:p-12 flex flex-col ${location ? "justify-around" : "justify-center"}`}>
                <span className={`${location? "text-base md:text-lg lg:text-2xl" : "text-lg md:text-xl lg:text-4xl"} italic font-light text-gray-700`}>{location?location.name:"No Location"}</span>
                {location?<div className="flex flex-col">
                    <span className="text-base md:text-lg lg:text-3xl font-semibold italic text-cyan-950">Now</span>
                    <div className="text-sm sm:text-base md:text-lg lg:text-2xl font-medium text-sky-950">
                        <span className="pr-1">{isCelsius?temp_C:temp}</span>
                        <span>{isCelsius? "°C" : "°F"}</span>
                    </div> 
                </div>:
                <div className="ml-12 mt-12 md:mt-16 xl:mt-20 text-slate-800/80">
                    <span className="pr-3 font-medium text-2xl lg:text-4xl 2xl:text-5xl">-- --</span>
                    <span className="italic font-medium lg:font-semibold text-xl lg:text-2xl 2xl:text-3xl">{isCelsius? "°C" : "°F"}</span>
                </div>}
                {location && <div className="text-sm sm:text-base md:text-lg lg:text-2xl italic md:mb-14 lg:mb-14">
                    <span>Feels like</span>
                    <span className="px-1.5 text-blue-950 font-medium">{isCelsius?feels_like_C:feels_like}</span>
                    <span>{isCelsius? "°C" : "°F"}</span>
                </div>}
            </div>
            <div className="w-1/2 flex flex-col justify-between items-end p-4">
                <div className="text-right flex flex-col  text-slate-800 text-xs lg:text-md xl:text-lg ">
                    <span>{date}</span>
                    <span>{time}</span>
                </div>
                {location && <div>
                    <currentWeather.icon className={` ${currentWeather.iconColor} w-5 h-5 lg:w-6 lg:h-6 xl:w-10 xl:h-10`}/>
                    <p className="pb-12 md:pb-18 lg:pb-22 pr-1 sm:pr-4 lg:pr-10 xl:pr-20 2xl:pr-28 lg:pl-3 xl:pl-6 text-base lg:text-lg xl:text-xl 2xl:text-2xl">{location ? description : "weather description"}</p>
                </div>}
            </div>
        </div>
    </div>
};

export function CardNow({currentWeather,moonData,location,isCelsius,isOpenMenu}){

  console.log(currentWeather);
  const isMobile = useIsMobile();
  const date = useDate();
  const time = useClock();

  const temp = currentWeather.temp;
  const feels_like = currentWeather.feels_like;
  const minTemp = currentWeather.minTemp;
  const maxTemp = currentWeather.maxTemp;
  const humidity = currentWeather.humidity;
  const wind = currentWeather.wind;
  const visibility = currentWeather.visibility;
  const pressure = currentWeather.pressure;
  const description = currentWeather.description;
  const sunrise = currentWeather.sunrise;
  const sunset = currentWeather.sunset;
  const details = getWeatherDetails(isCelsius,minTemp,maxTemp,humidity,wind,visibility,pressure);

  const temp_C = fahrenheitToCelsius(temp);
  const feels_like_C = fahrenheitToCelsius(feels_like);

  return <div className={`pt-5 bg-blue-200 shadow-xl/30 mt-14 md:mt-18 lg:mt-30 ${isOpenMenu && isMobile ? "h-126 md:h-134 " : "h-74 md:h-80 lg:h-85 xl:h-100 2xl:h-105"} mx-auto w-3/4 md:w-1/2 border border-slate-500/30 rounded-lg ${isOpenMenu&&isMobile ? "lg:mb-32": "lg:mb-42"} mb-24`}>
    <div className="flex items-center">
      <div className={`ml-2 mr-4 lg:mr-6 md:mx-6 lg:md-8 xl:md-12 text-base md:text-lg xl:text-2xl italic font-light text-gray-700 whitespace-nowrap`}>{location? location.name : "No location"}</div>
      <div className="px-4 xl:px-8 text-sm sm:text-base md:text-lg xl:text-2xl italic">
        <span>Feels like</span>
        <span className="px-1.5 text-blue-950 font-medium">{location? (isCelsius? feels_like_C : feels_like): "--"}</span>
        <span>{isCelsius? "°C" : "°F"}</span>
      </div>
      <div className="flex-1 px-2 xl:px-4 text-right flex flex-col items-end text-slate-800 text-xs lg:text-md xl:text-lg mr-1">
          <span>{date}</span>
          <span>{time}</span>
      </div>
    </div>
    <div className="flex">
      <div className="flex flex-col ml-4 mr-8">
        <span className="text-base md:text-lg lg:text-3xl font-semibold italic text-cyan-950">Now</span>
        <div className="text-sm sm:text-base md:text-lg lg:text-2xl font-medium text-sky-950">
            <span className="pr-1">{location? (isCelsius? temp_C: temp) : "--"}</span>
            <span>{isCelsius? "°C" : "°F"}</span>
        </div> 
      </div>
      <div className="position-bottom">
        <currentWeather.icon className={`${currentWeather.iconColor} w-5 h-5 lg:w-6 lg:h-6 xl:w-10 xl:h-10 mt-1`}/>
        <p className="lg:pl-3 xl:pl-6 text-base lg:text-lg xl:text-xl 2xl:text-2xl">{description}</p>
      </div>
    </div>
    <div className={`${isOpenMenu && isMobile? "flex flex-col":"flex"} mt-2 lg:mt-3`}>
      <div className="">
        {details.map((detail,key)=>
          <div key={key} className={`${isOpenMenu&&isMobile && "w-45"} flex m-2 2xl:m-3 px-1 lg:px-2 ${key!== details.length-1 && "border-b-2 xl:border-b-3 border-blue-100"}`}>
          <span>{detail.icon}</span>
          <div className="font-bold w-21  xl:w-28 text-sm lg:text-md 2xl:text-lg pl-2">{detail.label}</div>
          <div className="text-sm  lg:text-md 2xl:text-lg text-right w-12 xl:w-20">{location? detail.value: "-- --"}</div>
        </div>
        )}
      </div>
      <div className="flex-1 mr-1">
        <div className="relative inline-block text-base xl:text-md 2xl:text-lg group mr-2">
          <span className="px-2">{location? moonData.icon:"🌑"}</span>
          <span className="font-semibold italic mr-2 sm:mr-3 xl:mr-6">Moon phase</span>
          <span className="absolute top-[-15px] left-0 text-xs xl:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">{location? moonData.moonrise : "-- --"}</span>
          <span className="absolute top-[-15px] right-0 text-xs xl:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">{location? moonData.moonset : "-- --"}</span>
          <span className="whitespace-nowrap mr-1">{location? moonData.phase : "---- -----"}</span>
        </div>
        <div className={`flex justify-center ${isOpenMenu&& isMobile && "mt-2"}`}>
          <div className="flex flex-col items-end mt-18 xl:mt-27 mr-0.5 sm:mt-20  text-xs sm:text-sm xl:text-md 2xl:text-lg">
            <Sunrise className="w-5 h-5 xl:w-6 xl:h-6 text-yellow-600" />
            <span>Sunrise</span>
            <span>{location? sunrise : "-- --"}</span>
          </div>
          <div className="mt-2 sm:mt-3 xl:mt-4 w-20 h-20 sm:w-27 sm:h-27 xl:w-36 xl:h-36 bg-yellow-600/70 rounded-full flex justify-center overflow-hidden">
            <div className="w-20.5 h-20.5 sm:w-27.5 sm:h-27.5 xl:w-38 xl:h-38 border border-blue-200 bg-blue-200 rounded-full mt-[8px] md:mt-[9px] xl-[10px]"></div>
          </div>
          <div className="flex flex-col items-start mt-18  sm:mt-20 xl:mt-27 ml-0.5 text-xs sm:text-sm xl:text-md 2xl:text-lg">
            <Sunset className="w-5 h-5 xl:w-6 xl:h-6 text-orange-700"/>
            <span>Sunset</span>
            <span>{location? sunset : "-- --"}</span>
          </div>
        </div>
      </div>
    </div>

  </div>
};

export function Card5Days({dayData,location,isCelsius}){

  const minTemp_C = fahrenheitToCelsius(dayData.minTemp);
  const maxTemp_C = fahrenheitToCelsius(dayData.maxTemp);

  return <div className="relative text-slate-900 group bg-slate-400/40 shadow-xl/30 h-15 lg:h-20 xl:h-25 2xl:h-30 mx-auto w-3/4 md:w-1/2 border border-slate-500/30 rounded-full">
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-0 -translate-y-0 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-full" />
      <div className="flex justify-around items-center text-xs sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl m-1">
        <div className="flex flex-col mx-2 my-2 xl:my-5">
          <span className="font-semibold">{location? dayData.day : "Today"}</span>
          <span className="text-center">{location? (isCelsius? minTemp_C + "° / " + maxTemp_C + "°": dayData.minTemp + "° /" +  dayData.maxTemp + "°" ) : "--°/--°" }</span>
        </div>
        <div className="flex items-center">
          <dayData.icon className={`${dayData.iconColor} w-5 h-5 lg:w-6 lg:h-6 xl:w-10 xl:h-10 mt-1 mr-2`}/>
          <span>{location? dayData.description : " -----"}</span>
        </div>
        <div className="flex">
          <span>{location? dayData.humidity : "--"}%</span>
        </div>
      </div>
  </div>
};

export function CardHourly({location,isCelsius,hourData}){

  const temp_C = fahrenheitToCelsius(hourData.temp);

  return <div className="relative inline-block text-slate-900 group bg-slate-400/40 shadow-xl/30 w-15 lg:w-20 xl:w-25 2xl:w-30 mx-auto h-70 sm:h-80 md:h-90 xl:h-130 border border-slate-500/30 rounded-full">
    <div className="absolute top-[70px] lg:top-[80px] left-[-100px] lg:left-[-80px] text-xs xl:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
      <CardHourlyInfo isCelsius={isCelsius} hourData={hourData}/>
    </div>
    <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-0 -translate-y-0 group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-full" />
    <div className="flex flex-col h-5/6 justify-between items-center text-md md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl my-6 xl:my-8">
      <span className="font-semibold">{location? hourData.time : "-- --"}</span>
      <hourData.icon className={`${hourData.iconColor} w-8 h-8 lg:w-10 lg:h-10 xl:w-15 xl:h-15 fill-orange-400`}/>
      <div className="flex flex-col text-center text-sm lg:text-lg">
        <span className="mb-4">{location? (isCelsius? temp_C: hourData.temp) : "--"} {isCelsius? "°C" : "°F"}</span>
        <span>{location? hourData.humidity + "%" : "--%"}</span>
      </div>

    </div>
  </div>
};

export function CardHourlyInfo({isCelsius, hourData}){

  const feels_like_C = fahrenheitToCelsius(hourData.feels_like);

  return <div className={`flex flex-col justify-evenly text-slate-900 bg-slate-400/90 mx-auto  h-[105px]  lg:h-40 text-xs  lg:text-lg w-40 border border-slate-500/30 rounded-lg mb-24`}>
    <div className="flex flex-col text-sm">
      <div className="flex justify-around items-center pb-2 lg:pb-4">
        <hourData.icon className={`${hourData.iconColor} w-5 h-5 lg:w-6 lg:h-6 xl:w-10 xl:h-10 mt-1`}/>
        <span className="font-style: italic font-serif text-bold">{location? hourData.description: "--------"}</span>
      </div>
      <div className="flex justify-around pb-2 lg:pb-4">
        <span className="font-style: italic font-serif text-bold">Feels like:</span>
        <span>{location? (isCelsius? feels_like_C: hourData.feels_like) : "--"} {isCelsius? "°C" : "°F"}</span>
      </div>
      <div className="flex justify-around">
        <span className="font-style: italic font-serif text-bold">💨 wind</span>
        <span>{location? (isCelsius? (hourData.wind* 0.44704).toFixed(1) + "m/s": hourData.wind + "mph"): "-- m/s"}</span>
      </div>
    </div>
     
  </div>
};
