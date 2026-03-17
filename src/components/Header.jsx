import SearchEngine from "./SearchEngine";
import { Link, useLocation } from "react-router-dom";

function Header ({isCelsius, setIsCelsius, query, setQuery, suggestions, setSuggestions, location, setLocation }) {

    const page=useLocation();
    const isHome = page.pathname === "/";

    return <header className="fixed top-0 h-10 w-full z-50 bg-sky-100 text-slate-800 backdrop-blur-lg border-b border-sky-200 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link to="/" className="flex items-center ml-2 my-2 lg:my-1 space-x-1 group hover:cursor-pointer">
                <span className="sm:text-xl lg:text-2xl">⛅</span>
                <span className="font-serif sm:text-md lg:text-xl">WeatherNow</span>
            </Link>
            {!isHome && <SearchEngine query={query} setQuery={setQuery} 
                                      suggestions={suggestions} setSuggestions={setSuggestions} 
                                      location={location} setLocation={setLocation}/>}
            <div className="flex items-center mr-2 space-x-2 font-semibold text-sm lg:text-xl">
                <span>°C</span>
                <button className={`w-8 h-3 lg:w-12 lg:h-4 rounded-full relative
                    ${isCelsius ? "bg-cyan-700" : "bg-slate-600"}`}
                    onClick={()=> setIsCelsius(!isCelsius)}>
                    <div className={`w-3 h-3 lg:w-4 lg:h-4 mx-0.5 bg-yellow-500 rounded-full shadow-lg hover:cursor-pointer ${!isCelsius && "absolute right-0 top-0"}`}></div>
                </button>
                <span>°F</span>
            </div>
        </div>
    </header>
};

export default Header;