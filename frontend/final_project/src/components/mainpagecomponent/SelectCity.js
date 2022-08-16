import { Autocomplete, TextField } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { debounce } from "lodash";

const SelectCity = (props) => {
  const { update, id, label } = props;

  const [jsonResults, setJsonResults] = useState([]);
  const [viewValue, setViewValue] = useState(""); //검색창에 보여주는 텍스트 state값
  const [arrival, setArrial] = useState("");
  const [inputArrival, setInputArrial] = useState("");
  const [iataCode, setIataCode] = useState("");

  const handleOnchangeArrival = (e, value) => {
    setArrial(value);
  };

  const handleOnchangeInputArrival = useCallback(
    debounce((value) => {
      setInputArrial(value);
    }, 200),
    []
  );

  const handleOnchangeInputView = (e, value) => {
    setViewValue(value);
    handleOnchangeInputArrival(value);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const slice = useCallback((string) => {
    if (string != null) {
      return string.slice(string.length - 5, string.length - 2);
    }
  }, []);

  const autoList = useCallback(async (input) => {
    try {
      let url = `http://localhost:8090/apisearch`;
      const res = await axios.get(url, { params: { str: input } });
      if (Array.isArray(res.data)) {
        setJsonResults(res.data);
      } else {
        setJsonResults([]);
      }
      console.log("호츨확인");
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    autoList(inputArrival);
  }, [autoList, inputArrival]);

  useEffect(() => {
    setIataCode(slice(arrival));
  }, [arrival]);

  useEffect(() => {
    if (label === "출발지") {
      update((prev) => ({ ...prev, origin: iataCode }));
    } else if (label === "도착지") {
      update((prev) => ({ ...prev, destination: iataCode }));
    }
  }, [label, iataCode]);

  return (
    <Autocomplete
      id={id}
      value={arrival}
      onChange={handleOnchangeArrival}
      inputValue={viewValue}
      onInputChange={handleOnchangeInputView}
      options={jsonResults.map(
        (info, idx) =>
          `${info.address.cityName}  ${capitalizeFirstLetter(info.name)}(${
            info.iataCode
          }) `
      )}
      noOptionsText={"값을 입력하시오"}
      sx={{ flex: 1 }}
      renderInput={(params) => <TextField {...params} label={label} />}
      renderOption={(props, option, { inputValue }) => {
        const matches = match(option, inputValue);
        const parts = parse(option, matches);

        return (
          <li {...props}>
            <div>
              {parts.map((data, index) => (
                <span
                  key={index}
                  style={{
                    fontWeight: data.highlight ? 800 : 400,
                  }}
                >
                  {data.text}
                </span>
              ))}
            </div>
          </li>
        );
      }}
    />
  );
};

export default SelectCity;
