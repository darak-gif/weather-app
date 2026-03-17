import { Sunrise } from "lucide-react";
import { CardNow } from "../components/Cards";

export default function Now ({currentWeather,moonData,location,isCelsius,isOpenMenu}){

    return <div>
        <div className={`border-b border-b-2 pb-1 w-25  lg:w-30 xl:w-35 border-sky-700/30 flex ${isOpenMenu? "mt-15": "mt-5"} mx-15`}>
            <Sunrise className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 lg:h-8 ml-2"/>
            <span className="text-sm md:text-lg lg:text-xl xl:text-2xl font-semibold mx-2">Now</span>
        </div>
        <CardNow currentWeather = {currentWeather} moonData = {moonData} location={location} isCelsius={isCelsius} isOpenMenu={isOpenMenu}/>
    </div>
};