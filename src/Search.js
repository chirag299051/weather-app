import React, { useState, useContext, useEffect, useRef } from "react";
import { context } from "./context";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const Search = () => {
  const places = useRef();
  const { location, getCoords } = useContext(context);
  const [value, setValue] = useState("");

  useEffect(() => {
    console.log("places", places);
    console.log(location);
    setValue(location.city);
    return () => {
      setValue("");
    };
  }, [location]);
  return (
    <div className="search">
      <GooglePlacesAutocomplete
        ref={places}
        apiKey="AIzaSyChD_ozQm2jhcWsqNgX3iSW1kMZjdGIbx4"
        selectProps={{
          defaultInputValue: value,
          placeholder: "City",
          onChange: (val) => {
            console.log(val);
            setValue(val.value.structured_formatting.main_text);
            getCoords(val.value.description);
            console.log(location);
            console.log("getCoords: ", val.value.description);
          },
        }}
      />
    </div>
  );
};
export default Search;
