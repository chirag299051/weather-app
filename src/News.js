import React, { useState, useEffect } from "react";

const URL = "https://newsapi.org/v2/top-headlines?country=";
const key = "07a79a233918493ea5e2dc75ebbf7f3a";

const News = () => {
  useEffect(() => {
    fetch(`${URL}us&apiKey=${key}`)
      .then((response) => response.json())
      .then((result) => {
        console.log("News :", result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return <div></div>;
};

export default News;
