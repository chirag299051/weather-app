import React, { useState, useEffect } from "react";

const URL =
  "https://coronavirus-monitor-v2.p.rapidapi.com/coronavirus/cases_by_country.php";
const APIKey = "b74faec440mshb8fdb8ea26ffea9p1aaf6bjsn50000fc429ce";
const host = "coronavirus-monitor-v2.p.rapidapi.com";

const Covid = () => {
  useEffect(() => {
    fetch(URL, {
      method: "GET",
      headers: {
        "x-rapidapi-host": host,
        "x-rapidapi-key": APIKey,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Covid :", result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <div></div>;
};

export default Covid;
