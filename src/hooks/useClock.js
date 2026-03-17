import { useState, useEffect } from "react";
import { getTime } from "../utils/dateTime";

export function useClock() {
  const [time, setTime] = useState(getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(getTime());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return time;
}
