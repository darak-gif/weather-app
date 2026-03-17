import { Card } from "../components/Cards";
import SearchEngine from "../components/SearchEngine";

export default function Home({currentWeather,isCelsius, query, setQuery, suggestions, setSuggestions, location, setLocation }){

    return <div className="mt-20">
        <SearchEngine query={query} setQuery={setQuery} 
            suggestions={suggestions} setSuggestions={setSuggestions} setLocation={setLocation}/>
        <Card currentWeather={currentWeather} location={location} isCelsius={isCelsius}/>
    </div>

};