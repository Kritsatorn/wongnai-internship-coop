import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";

const SearchContext = React.createContext();
const APIpath = "http://localhost:3001/api/trips";

const SearchContextProvider = (props) => {
  const location = useLocation();
  const history = useHistory();
  // bug translate from url link in Thai
  // location.search ? location.search.substr(9) : ""
  // use This "" instead
  const [textSearch, setTextSearch] = useState("");

  const [tripData, setTripData] = useState(null);
  const inputRef = useRef(null);

  const addText = (text) => {
    setTextSearch((prevText) => (prevText ? prevText + " " + text : text));
    inputRef.current.focus();
  };

  const searchSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }

    history.push({
      pathname: "/",
      search: `?keyword=${textSearch}`,
    });
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchData = async () => {
      try {
        const res = await axios.get(`${APIpath}${location.search}`, {
          cancelToken: source.token,
        });
        return res ? res : null;
      } catch (error) {
        if (axios.isCancel(error)) {
        } else {
          throw error;
        }
      }
    };

    fetchData().then((res) => setTripData(res.data.data));
  }, [location]);

  return (
    <SearchContext.Provider
      value={{
        tripData,
        inputRef,
        addText,
        textSearch,
        setTextSearch,
        searchSubmit,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export { SearchContextProvider, SearchContext };
