import React, { useState, useEffect } from "react";

const lURL = "https://geolocation-db.com/json/";
// const cURL = "https://api.openweathermap.org/geo/1.0/direct?q=";
// const cKEY = "706c875644ce262a11af9eaf5a62df90";
const wURL = "https://api.openweathermap.org/data/2.5/weather?lat=";
const wKEY = "706c875644ce262a11af9eaf5a62df90";
const nURL = "http://api.mediastack.com/v1/news?access_key=";
const nKEY = "b6f8eca54e7df812ef635a9a3b5c649a";
const covidURL =
  "https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/cases_by_country.php";
const covidKEY = "b74faec440mshb8fdb8ea26ffea9p1aaf6bjsn50000fc429ce";
const covidHOST = "coronavirus-monitor-v2.p.rapidapi.com";

export const context = React.createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(null);
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState({});
  const [timezone, setTimezone] = useState(null);
  const [weather, setWeather] = useState(null);
  const [news, setNews] = useState(null);
  const [covid, setCovid] = useState(null);
  const [error, setError] = useState(false);

  const fetchLocation = async () => {
    const resp = await fetch(lURL);
    const result = await resp.json();
    setLocation({
      ...location,
      city: result.city,
      lat: result.latitude,
      lon: result.longitude,
      country: result.country_code,
    });

    console.log("Geo :", result);
  };
  const getCoords = (addr) => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${addr}&key=AIzaSyChD_ozQm2jhcWsqNgX3iSW1kMZjdGIbx4
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

  //   useEffect(() => {
  //     const date = new Date(Date.now());
  //     setDate(date.toString("MM/dd/yy").split(" ").slice(0, 4));
  //   }, [location]);

  useEffect(() => {
    setLoading(true);
    location.lat &&
      fetch(
        `https://maps.googleapis.com/maps/api/timezone/json?location=${
          location.lat
        },${location.lon}&timestamp=${Math.floor(
          Date.now() / 1000
        )}&key=AIzaSyChD_ozQm2jhcWsqNgX3iSW1kMZjdGIbx4`
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

  console.log("Theme:", theme);

  useEffect(() => {
    location.country &&
      fetch(
        `${nURL}${nKEY}&countries=${location.country}&limit=100&sort=popularity`
      )
        .then((response) => response.json())
        .then((result) => {
          console.log("News :", result);
          setNews(result.data.filter((x) => x.image !== null));
        })
        .catch((err) => {
          console.error(err);
        });
  }, [location]);

  useEffect(() => {
    fetch(covidURL, {
      method: "GET",
      headers: {
        "x-rapidapi-host": covidHOST,
        "x-rapidapi-key": covidKEY,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Covid :", result);
        const { statistic_taken_at, countries_stat } = result;
        setCovid({
          countries: countries_stat.map((x) => {
            const obj = {
              name: x.country_name,
              cases: x.cases,
              deaths: x.deaths,
              new_cases: x.new_cases,
              new_deaths: x.new_deaths,
              active_cases: x.active_cases,
            };
            return obj;
          }),
          sources: statistic_taken_at.split(" ")[0],
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  console.log(covid);

  const mapDate = () => {
    const birthday = new Date(1633323393 * 1000);
    // const date1 = birthday.toString("MM/dd/yy HH:mm:ss");
    const date1 = birthday.toString("MM/dd/yy").split(" ");

    console.log(date1, Date.now());
  };
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
        covid,
      }}
    >
      {children}
    </context.Provider>
  );
};
