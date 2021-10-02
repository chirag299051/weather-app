import React, { useState, useEffect } from "react";

const lURL = "https://geolocation-db.com/json/";
const cURL = "https://api.openweathermap.org/geo/1.0/direct?q=";
const cKEY = "706c875644ce262a11af9eaf5a62df90";
const wURL = "https://api.openweathermap.org/data/2.5/onecall?lat=";
const wKEY = "706c875644ce262a11af9eaf5a62df90";

export const context = React.createContext();

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState("day");
  const [isLoading, setIsLoading] = useState(false);
  const [location, setLocation] = useState({});
  const [options, setOptions] = useState([]);
  const [weather, setWeather] = useState();
  const [news, setNews] = useState();
  const [covid, setCovid] = useState();

  useEffect(async () => {
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
  }, []);

  //   useEffect(() => {
  //     user &&
  //       fetch(`${wURL}${user.lat}&lon=${user.lon}&units=metric&appid=${wKEY}`)
  //         .then((response) => response.json())
  //         .then((result) => {
  //           console.log("Weather :", result);
  //         })
  //         .catch((err) => {
  //           console.error(err);
  //         });
  //   }, [user]);

  const handleSearch = (query) => {
    setIsLoading(true);
    try {
      fetch(`${cURL}${query}&limit=3&appid=${cKEY}`)
        .then((resp) => resp.json())
        .then((items) => {
          console.log("items :", items);
          if (Array.isArray(items)) {
            const options = items.map((i) => ({
              city: i.name,
              lat: i.lat,
              lon: i.lon,
              country: i.country,
            }));
            console.log(items, options);
            setIsLoading(false);
            setOptions(options);
          }
        });
    } catch (error) {
      console.log("Error ;", error);
      setOptions([]);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <context.Provider
      value={{
        theme,
        isLoading,
        location,
        options,
        handleSearch,
        weather,
        news,
        covid,
      }}
    >
      {children}
    </context.Provider>
  );
};
