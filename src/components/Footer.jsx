const Footer = () => {
    return <footer className={`border-t border-cyan-600/40 shadow-lg bg-cyan-900/30 h-7 md:h-8 lg:h-10`}>
        <div className="flex justify-center text-xs sm:text-base md:text-lg lg:text-xl m-1 text-sky-200/80">
            <span >Data provided by</span>
            <a href="https://openweathermap.org/" target="_blank" rel="noopener noreferrer" className="px-1.5 italic underline decoration-blue-300/80">OpenWeatherMap</a>
            <span>@2026</span>
        </div>
        
    </footer>
};

export default Footer;