import { Link } from "react-router-dom";
import { X, House, Sunrise, CalendarClock, Clock } from "lucide-react";

const navItems = [
    {label: "Home", path:"/", icon: House},
    {label: "Now", path: "/now",icon: Sunrise},
    {label: "Hourly",path:"/hourly",icon: Clock},
    {label: "5Days",path:"/5days",icon: CalendarClock},
]

function Navbar ({isOpenMenu,setIsOpenMenu}) {

    return <nav className={`mt-10 ${isOpenMenu && "w-1/5 lg:w-1/6 min-h-screen"}`}>
        
            <div className="h-full border-r border-slate-500/60 bg-slate-500/30 relative animate-in slide-in-from-left duration-300">
                    <button onClick={() => setIsOpenMenu(!isOpenMenu)}>
                        <X className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-slate-800 absolute right-0 top-1 hover:cursor-pointer"/>
                    </button>
                <div className="flex flex-col mt-10 py-10 md:py-14 lg:py-16  px-1 sm:px-2 md:px-4 lg:px-8 space-y-4 md:space-y-6 lg:space-y-10">
                    {navItems.map((item,key)=>
                        <div key={key} className="flex items-center space-x-1 md:space-x-2 lg:space-x-4">
                            <item.icon className="w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8"/>
                            <Link to={item.path} className="font-medium text-underline text-cyan-950 hover:font-bold hover:text-cyan-800 hover:underline underline-cyan-800 text-sm sm:text-base md:text-md lg:text-xl">{item.label}</Link>
                        </div>
                    )}
                </div>
            </div>
    </nav>
};

export default Navbar;