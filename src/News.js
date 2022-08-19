import React, { useContext } from "react";
import { context } from "./context";
import NewsItem from "./NewsItem";
import Card from "./Card";

const News = () => {
  const { news } = useContext(context);
  return (
    <>
      <div className={"news"}>
        <h1>Current News</h1>

        <div className="news-items">
          {news &&
            news.map((item, index) => <NewsItem key={index} item={item} />)}
        </div>
      </div>
    </>
  );
};

export default News;
