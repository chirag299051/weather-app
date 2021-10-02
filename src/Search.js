import React, { useState, useContext, useEffect, useRef } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import ReactDOM from "react-dom";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { context } from "./context";

const Search = () => {
  const myRef = useRef();
  console.log(myRef);
  const [key, setKey] = useState(0);
  const { theme, isLoading, location, options, handleSearch } =
    useContext(context);

  useEffect(() => {
    handleSearch(location.city);
  }, [location]);

  const filterBy = () => true;
  return (
    <div
      key={Math.random()}
      style={{ padding: "50px 10px", width: "21%", margin: "auto" }}
    >
      <AsyncTypeahead
        ref={myRef}
        filterBy={filterBy}
        id="async-TA"
        // onBlur={(e) => {
        //   // setValue("some value");
        //   setKey(key + 1);
        // }}
        isLoading={isLoading}
        labelKey="city"
        minLength={2}
        defaultInputValue={location.city || ""}
        onSearch={handleSearch}
        options={options}
        placeholder="City"
        renderMenuItemChildren={(option) =>
          option && (
            <>
              <span>{option.city}</span>
              <span style={{ float: "right" }}>{option.country}</span>
            </>
          )
        }
      />
      <MDBBtn
        gradient="aqua"
        rounded
        size="md"
        type="submit"
        className="mr-auto"
      >
        Search
      </MDBBtn>
    </div>
  );
};
export default Search;
