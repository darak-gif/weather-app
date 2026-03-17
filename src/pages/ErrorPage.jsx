import { Frown } from "lucide-react";

export default function ErrorPage(){
    
    return<div className="bg-slate-600/80 shadow-xl/30 mt-40 lg:mt-30 h-50 lg:h-60 xl:h-70 2xl:h-80 mx-auto w-1/2 md:w-1/4 border border-slate-800/30 rounded-lg mb-20 lg:mb-42">
            
        <div className="flex flex-col justify-around items-center h-50 lg:h-60 xl:h-70 2xl:h-80">
            <span className="font-bold text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl text-slate-900">OOPS!</span>
            <Frown className="w-6 h-6 lg:w-8 lg:h-8 xl:w-12 xl:h-12 text-indigo-950/70"/>
            <span className="font-medium text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-sky-900 via-indigo-700 to-slate-800 animate-gradient">404</span>
            <span className="font-semibold text-xl md:text-2xl xl:text-3xl 2xl:text-4xl text-slate-950/40 line-through">Page not found!</span>
        </div>

    </div>
    

};