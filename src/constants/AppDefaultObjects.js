export const emptyCurrentWeather = {
  name: "",
  weather: [
    {
      main: "",
      description: "",
      icon: ""
    }
  ],
  main: {
    temp: null,
    feels_like: null,
    temp_min: null,
    temp_max: null,
    pressure: null,
    humidity: null
  },
  visibility: null,
  wind: {
    speed: null
  },
  sys: {
    sunrise: 0,
    sunset: 0
  }
};

export const emptyForecastWeather = {
  city: {
    name: "",
    country: "",
    sunrise: 0,
    sunset: 0
  },

  list: [
    {
      dt: 0,

      main: {
        temp: null,
        feels_like: null,
        temp_min: null,
        temp_max: null,
        pressure: null,
        humidity: null
      },

      weather: [
        {
          main: "",
          description: "",
          icon: ""
        }
      ],

      wind: {
        speed: null
      },

      visibility: null,

      dt_txt: ""
    }
  ]
};


export const emptyMoonData = {
  phase: "",
  icon: "🌑",
  moonrise: 0,
  moonset: 0
};
