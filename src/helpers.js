export function fahrenheitToCelsius(f) {
  return ((f - 32) * 5 / 9).toFixed(1);
}

export function formatTime(timestamp, timezoneOffset){

  if (!timestamp) return "--:--";

  const date = new Date((timestamp + timezoneOffset) * 1000);

  return date.toISOString().slice(11,16);
}

