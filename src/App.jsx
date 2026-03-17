import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { useWeatherData } from "../src/hooks/useWeatherData"; // custom hook to fetch the data
import { getCurrentWeather } from "./utils/getCurrentWeather";
import { getMoonData } from "./utils/getMoonData";
import { getHourlyForecast } from "./utils/getHourlyForecast";
import { get5DaysForecast } from "./utils/get5DaysForecast";
import { emptyCurrentWeather, emptyForecastWeather ,emptyMoonData } from "../src/constants/AppDefaultObjects";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Now from "./pages/Now";
import Page5Days from "./pages/5Days";
import LoadingPage from "./pages/Loading";
import Hourly from "./pages/Hourly";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";

// for bad weather bg-gradient-to-b from-white to-gray-700

function App() {

  const [isCelsius, setIsCelsius] = useState (true);
  const [isOpenMenu,setIsOpenMenu] = useState(false);
  const [query, setQuery] = useState("");        // the input
  const [suggestions, setSuggestions] = useState([]); // dropdown suggestions
  const [location, setLocation] = useState(null);    // chosen city, country and its' coordinates
  const [showLoading, setShowLoading] = useState(false);
  const { data: weatherData, isLoading, error } = useWeatherData(location); // custom hook to fetch the data for the chosen location

  useEffect (()=>{
    let timer;

     if(isLoading){
        timer = setTimeout(()=>{
        setShowLoading(true);
    
      },5000) // wait 5 seconds and then show isloading page
     }else{
      setShowLoading(false);
     }

     return ()=> clearTimeout(timer);
  },[showLoading]);

  if (showLoading) return <LoadingPage />;
  if (error) return <ErrorPage />


  const safeCurrentWeather = weatherData?.current ?? emptyCurrentWeather;
  const timezoneOffset = weatherData?.current?.timezone;
  const currentWeather = getCurrentWeather(safeCurrentWeather,timezoneOffset);
  const safeForecastWeather = weatherData?.forecast ?? emptyForecastWeather;
  const hourlyWeather = getHourlyForecast(safeForecastWeather,timezoneOffset)
  const daysWeather = get5DaysForecast(safeForecastWeather);
  const safeMoonData = weatherData?.moon ?? emptyMoonData;
  const moonData = getMoonData(safeMoonData,timezoneOffset);

  console.log(daysWeather);

  // ---------- DATA IS SAFE HERE ----------

  return <Router>
      <div className={`min-h-screen flex flex-col bg-gradient-to-b from-white to-sky-700/60`}>
        <Header isCelsius={isCelsius} setIsCelsius={setIsCelsius}  query={query} setQuery={setQuery} suggestions={suggestions} setSuggestions={setSuggestions} location={location} setLocation={setLocation}/>
        <div className="flex-grow">
            {!isOpenMenu && 
                <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
                  <Menu className="mt-12 sm:mt-13 md:mt-14 mx-2 sm:mx-4 lg:mx-6 w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-slate-800 hover:cursor-pointer"/>
                </button>}
            <div className="flex">
                {isOpenMenu && <Navbar isOpenMenu={isOpenMenu} setIsOpenMenu={setIsOpenMenu}/>}
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Home currentWeather = {currentWeather} isCelsius={isCelsius} query={query} setQuery={setQuery} suggestions={suggestions} setSuggestions={setSuggestions} location={location} setLocation={setLocation}/>}/>
                  <Route path="/now" element={<Now currentWeather = {currentWeather} moonData={moonData} location={location} isCelsius={isCelsius} isOpenMenu={isOpenMenu}/>}/>
                  <Route path="/hourly" element={<Hourly hourlyWeather={hourlyWeather} location={location} isCelsius={isCelsius}/>}/>
                  <Route path="/5days" element={<Page5Days daysWeather={daysWeather} location={location} isOpenMenu={isOpenMenu} isCelsius={isCelsius}/>}/>
                  <Route path="*" element={<ErrorPage/>}/>
                </Routes>
              </div>
            </div>
        </div>
      <Footer/>
      </div>
  </Router>
  
   
}

export default App;