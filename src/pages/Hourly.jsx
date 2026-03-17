import { Clock } from "lucide-react";
import { CardHourly } from "../components/Cards";


export default function Hourly ({hourlyWeather,location,isOpenMenu,isCelsius}){

    return <div>
        <div className={`border-b border-b-2 pb-1 w-25  lg:w-30 xl:w-35 border-sky-700/30 flex ${isOpenMenu? "mt-15": "mt-5"} mx-15`}>
            <Clock className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 lg:h-8 ml-2"/>
            <span className="text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold mx-2">Hourly</span>
        </div>
        <div className="px-auto mt-14 md:mt-16 lg:mt-20 mb-12 mb:mt-15 lg:mb-20">
            <div className="grid justify-self-center grid-cols-4 md:grid-cols-6 gap-8 md:gap-10 lg:gap-12 max-w-3xl">
                {hourlyWeather.map((hourData,key)=>
                    <CardHourly key={key} location={location} isCelsius={isCelsius} hourData={hourData}/>
                )}
            </div>
        </div>
    </div>
};