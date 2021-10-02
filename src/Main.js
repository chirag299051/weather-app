import React from "react";
import Covid from "./Covid";
import News from "./News";

const Main = () => {
  return (
    <section style={{ backgroundColor: "#1D272D", height: "100vh" }}>
      <News />
      <Covid />
    </section>
  );
};

export default Main;
