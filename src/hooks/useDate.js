import { useState, useEffect } from "react";
import { getDate } from "../utils/dateTime";

export function useDate() {
  const [date, setDate] = useState(getDate());

  useEffect(() => {
    const now = new Date();

    const msUntilMidnight =
      new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1) - now;

    let interval;

    const timeout = setTimeout(() => {
      setDate(getDate());

      interval = setInterval(() => {
        setDate(getDate());
      }, 24 * 60 * 60 * 1000);
    }, msUntilMidnight);

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return date;
}
