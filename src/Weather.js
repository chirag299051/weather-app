import React, { useContext } from "react";
import { context } from "./context";
import Clock from "react-live-clock";
import Card from "./Card";

const Weather = () => {
  const { theme, weather, location, timezone } = useContext(context);
  return (
    weather && (
      <Card className={theme + " weather"}>
        <div>
          <h1>
            {location.city}, {location.country}
          </h1>
          <Clock format={"DD MMMM YYYY"} ticking={true} timezone={timezone} />
        </div>
        <div>
          <Clock format={"HH:mm:ss"} ticking={true} timezone={timezone} />
          <p>
            {weather.temp}, {weather.country}
          </p>
        </div>
      </Card>
    )
  );
};

export default Weather;
