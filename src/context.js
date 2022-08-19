import React, { useState, useEffect } from "react";

const lURL = "https://geolocation-db.com/json/";
const wURL = "https://api.openweathermap.org/data/2.5/weather?lat=";
const wKEY = "706c875644ce262a11af9eaf5a62df90";
const nURL = "https://api.currentsapi.services/v1/search?language=en&country=";
const nKEY = "oa9AFhpH80Xey9PNXgPTwZWkQUfBP4yY5iaHKaD6klhgkK9_";

const MAPS_KEY = "AIzaSyAobzmD0pf_jnvXCycI0bUYsBRJlL4ZEvw";
export const context = React.createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({});
  const [timezone, setTimezone] = useState(null);
  const [weather, setWeather] = useState(null);
  const [news, setNews] = useState(null);
  const [error, setError] = useState(false);

  // const fetchLocation = async () => {
  //   const resp = await fetch(lURL);
  //   const result = await resp.json();
  //   setLocation({
  //     ...location,
  //     city: result.city,
  //     lat: result.latitude,
  //     lon: result.longitude,
  //     country: result.country_code,
  //   });

  //   console.log("Geo :", result);
  // };

  const fetchLocation = () => {
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    if (navigator.geolocation) {
      console.log("navigator.geolocation is available");
      navigator.geolocation.getCurrentPosition(function (position) {
        console.log("current position acquired");
        var lat = position.coords.latitude;
        var lon = position.coords.longitude;
        console.log(lat, lon);
        fetch(
          `https://fcc-weather-api.glitch.me/api/current?lon=${lon}&lat=${lat}`
        )
          .then((res) => res.json())
          .then((result) =>
            setLocation({
              lat,
              lon,
              city: result.name,
              country: result.sys.country,
            })
          );
      }, error);
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  const getCoords = (addr) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=${MAPS_KEY}
  `)
      .then((response) => response.json())
      .then((result) => {
        console.log("Coords :", result);
        if (
          result.results[0].address_components.some((x) =>
            x.types.includes("locality")
          )
        ) {
          setLocation({
            ...location,
            city: result.results[0].address_components.filter((x) =>
              x.types.includes("locality")
            )[0].long_name,
            lat: result.results[0].geometry.location.lat,
            lon: result.results[0].geometry.location.lng,
            country: result.results[0].address_components.filter((x) =>
              x.types.includes("country")
            )[0].short_name,
          });
          //   setError(false);
        } else {
          setError(true);
          console.log("error: ", error);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(async () => {
    fetchLocation();
  }, [lURL]);

  useEffect(() => {
    setLoading(true);
    location.lat &&
      fetch(
        `https://maps.googleapis.com/maps/api/timezone/json?location=${
          location.lat
        },${location.lon}&timestamp=${Math.floor(
          Date.now() / 1000
        )}&key=${MAPS_KEY}`
      )
        .then((response) => response.json())
        .then((result) => {
          console.log("Timezone :", result);
          setTimezone(result.timeZoneId);
        });

    location.lat &&
      fetch(
        `${wURL}${location.lat}&lon=${location.lon}&appid=${wKEY}&units=metric`
      )
        .then((response) => response.json())
        .then((result) => {
          console.log("Weather :", result);
          const {
            dt,
            weather,
            main: { temp, feels_like, temp_min, temp_max, pressure, humidity },
            wind: { speed: wind },
            clouds: { all: clouds },
            sys: { country, sunrise, sunset },
            id,
          } = result;
          setWeather({
            dt,
            weatherc: weather[0],
            temp,
            feels_like,
            temp_min,
            temp_max,
            pressure,
            humidity,
            wind,
            clouds,
            country,
            sunrise,
            sunset,
            id,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    setLoading(false);
  }, [location]);
  console.log(weather && weather);
  console.log(timezone);

  useEffect(() => {
    setTheme(weather && weather.weatherc.icon.slice(-1));
  }, [weather]);

  useEffect(() => {
    location.country &&
      fetch(`${nURL}${location.country}&apiKey=${nKEY}`)
        .then((response) => response.json())
        .then((result) => {
          console.log("News :", result);
          setNews(
            result.news.filter(
              (x) =>
                x.language === "en" &&
                x.language !== "zh-hant" &&
                x.image !== "None" &&
                x.author !== ""
            )
          );
        })
        .catch((err) => {
          console.error(err);
        });
  }, [location]);

  return (
    <context.Provider
      value={{
        theme,
        loading,
        location,
        fetchLocation,
        getCoords,
        weather,
        timezone,
        news,
      }}
    >
      {children}
    </context.Provider>
  );
};
