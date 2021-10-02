import React, { useState, useEffect, useRef, useContext } from "react";
import * as THREE from "three";
import CLOUDS from "vanta/dist/vanta.clouds.min";
import Search from "./Search";
import { context } from "./context";

// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const Header = (props) => {
  const myRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(0);
  const [vantaObj, setVantaObj] = useState({});
  const { theme } = useContext(context);

  // useEffect(() => {
  //   console.log(theme);
  //   if (theme === "day")
  //     setVantaObj({
  //       THREE: THREE,
  //       el: myRef.current,
  //       mouseControls: true,
  //       touchControls: true,
  //       gyroControls: false,
  //       minHeight: 600.0,
  //       minWidth: 200.0,
  //       // scale: 1.0,
  //       // scaleMobile: 1.0,
  //       backgroundColor: 0x0,
  //     });
  //   else
  //     setVantaObj({
  //       THREE: THREE,
  //       el: myRef.current,
  //       mouseControls: true,
  //       touchControls: true,
  //       gyroControls: false,
  //       minHeight: 600.0,
  //       minWidth: 200.0,
  //       skyColor: 0x2020c,
  //       cloudColor: 0x6a7c9b,
  //       cloudShadowColor: 0x8111b,
  //       sunColor: 0xfafafa,
  //       sunGlareColor: 0xffffff,
  //       sunlightColor: 0xf5f5f5,
  //     });
  // }, [theme]);

  useEffect(() => {
    // if (!vantaEffect) setVantaEffect(CLOUDS(vantaObj));
    if (!vantaEffect) {
      console.log("Vanta :", vantaObj);
      setVantaEffect(
        CLOUDS({
          THREE: THREE,
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 600.0,
          minWidth: 200.0,
          // scale: 1.0,
          // scaleMobile: 1.0,
          backgroundColor: 0x0,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div ref={myRef} style={{ width: "100%", marginTop: "0px" }}>
      <Search />
    </div>
  );
};

export default Header;
