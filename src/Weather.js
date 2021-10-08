import React, { useContext } from "react";
import { context } from "./context";
import Clock from "react-live-clock";
import Card from "./Card";

const Weather = () => {
  const { theme, weather, location, timezone } = useContext(context);
  const getTime = (date, timezone) => {
    return new Date(date * 1000).toLocaleString("en-GB", {
      timeZone: timezone,
      hour: "numeric",
      minute: "numeric",
    });
  };
  return (
    weather &&
    timezone && (
      <Card className={theme + " weather"}>
        <div>
          <h1>
            {location.city}, {location.country}
          </h1>
        </div>
        <div className="clocks">
          <Clock format={"DD MMMM YYYY"} ticking={true} timezone={timezone} />
          <br />
          <Clock
            className="time"
            format={"HH:mm:ss"}
            ticking={true}
            timezone={timezone}
          />
        </div>
        <h3>
          <i>{weather.weatherc.main}</i>
        </h3>
        <div>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weatherc.icon}@2x.png`}
          />
          <b>
            <i>{weather.temp}&deg; C&emsp;&emsp;</i>
          </b>
          <i>feels like {weather.feels_like}&deg; C</i>
          <ul>
            <li>
              <i>
                {weather.temp_max}/{weather.temp_min}
              </i>
            </li>
            <li>
              <i>Sunrise: {getTime(weather.sunrise, timezone)}</i>
            </li>
            <li>
              <i>Sunset: {getTime(weather.sunset, timezone)}</i>
            </li>
            <li>
              <i>Wind: {weather.wind}km/h</i>
            </li>
            {/* <li>
              <i>Pressure: {weather.pressure}</i>
            </li> */}
            <li>
              <i>Humidity: {weather.humidity}%</i>
            </li>
          </ul>
        </div>
      </Card>
    )
  );
};

export default Weather;
