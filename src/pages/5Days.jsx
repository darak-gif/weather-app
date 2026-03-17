import { CalendarClock } from "lucide-react";
import { Card5Days } from "../components/Cards";


export default function Page5Days ({daysWeather,location,isOpenMenu,isCelsius}){

    return <div>
        <div className={`border-b border-b-2 pb-1 w-25 lg:w-30 xl:w-35 border-sky-700/30 flex ${isOpenMenu? "mt-15": "mt-5"} mx-15`}>
            <CalendarClock className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 lg:h-8 ml-2"/>
            <span className="text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold mx-2">5-Days</span>
        </div>
        <div className="mt-14 md:mt-16 lg:mt-20">
                {daysWeather.map((dayData,key)=>
                <div key={key} className="mb-12 mb:mt-15 lg:mb-20">
                    <Card5Days dayData={dayData} location={location} isCelsius={isCelsius}/>
                </div>
                )}
        </div>
    </div>
};