import { Search } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

function SearchEngine ({ query, setQuery, suggestions, setSuggestions, setLocation }){

    const page = useLocation();
    const isHome= page.pathname === "/";

    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    const debouncedQuery= useDebounce(query,300);

    const [isSelected,setIsSelected] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null);


    useEffect (()=>{
        if(isSelected) return; //because when we select the location from the ul we change again debouncedQuery and this triggers fetching  

        if(debouncedQuery.length<2){
            setSuggestions([]);
            return;
        }

        const abortContr = new AbortController(); 

        const fetchCities = async () => {

            setIsLoading(true);

            try{
                const response = await fetch( `https://api.openweathermap.org/geo/1.0/direct?q=${debouncedQuery}&limit=10&appid=${API_KEY}`,
                    {signal: abortContr.signal}
                )
                const cities = await response.json();
                console.log("CITIES:", cities);
                setSuggestions(cities);
            }catch(e){
                if(e.name === "AbortError"){ // if the user cancel the request by typing more chars in the input  
                    console.log("Aborted");
                    return;
                }

                setError(e);
                setSuggestions([]);

            }finally{
                setIsLoading(false);
            }
            
        }

        fetchCities();

        return () => abortContr.abort(); // cancel the previous request if have

    },[debouncedQuery]) 

    if(error){
        console.log(error);
    }

    return <div className={`relative flex items-center mx-auto w-1/2 ${isHome ? "h-8 md:h-10 lg:h-12": "h-6 md:h-8 lg:h-9"} border border-black bg-slate-500/40 rounded-full mb-1`}>
        <button onClick={()=> setQuery("")}>
            <Search className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-1 md:ml-2 my-2 hover:cursor-pointer"/>
        </button>
        <input placeholder="Search location..." className=" h-6 w-5/6 mx-4 md:mx-6 outline-none" 
        value={query} onChange={(e) => {
            setQuery(e.target.value);
            setIsSelected(false);
        }}/>

        {suggestions.length > 0 && !isLoading &&
            <ul className="absolute top-full left-4 bg-gray-400/90 border mt-1 w-5/6 z-10 max-h-60 overflow-y-auto rounded-lg shadow-lg">
                {suggestions.map((city) => (
                <li key={`${city.lat}-${city.lon}`}
                className="px-4 py-2 hover:bg-sky-100 cursor-pointer"
                onClick={() => {
                    setLocation({name: city.name,
                        country: city.country,
                        lat: city.lat,
                        lon: city.lon});
                    setIsSelected(true);
                    setSuggestions([]);
                    setQuery(`${city.name}, ${city.country}`);
                    }}>
                    {city.name}, {city.state ?? ""} {city.country}</li>
                   
                ))}
            </ul>
        }

    </div>
    
};

export default SearchEngine;