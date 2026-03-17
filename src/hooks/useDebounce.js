import { useState, useEffect } from "react"

export default function useDebounce(value,delay){

    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(()=>{
        const handler = setTimeout(() => setDebouncedValue(value), delay); // here we have timer and after delay we setDebouncedValue(value)

        return () => clearTimeout(handler); // !! remove the timer
        
    },[value,delay]) // it depends on value and delay 

    return debouncedValue; // is value after delay 
}