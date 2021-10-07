import React from "react";
import Covid from "./Covid";
import News from "./News";

const Main = () => {
  return (
    <section
      style={{ color: "#4f4f4f", backgroundColor: "#1D272D", height: "100vh" }}
    >
      <News />
      {/* <Covid /> */}
    </section>
  );
};

export default Main;
