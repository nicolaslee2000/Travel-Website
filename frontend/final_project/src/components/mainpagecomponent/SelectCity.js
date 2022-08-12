import { Autocomplete, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import match from "autosuggest-highlight/match";
import parse from "autosuggest-highlight/parse";

const SelectCity = (props) => {
  const { update } = props;

  const [jsonResults, setJsonResults] = useState([]);

  const [arrival, setArrial] = useState("");
  const [inputArrival, setInputArrial] = useState("");

  const [departure, setDeparture] = useState("");
  const [inputDeparture, setInputDeparture] = useState("");

  const [origin, setOrigin] = useState({
    country: null,
    airport: null,
    code: "ICN",
  });
  const [destination, setDestination] = useState({
    country: null,
    airport: null,
    code: "NRT",
  });
  // const [select, setSelect] = useState(true);
  const [originIataCode, setOriginIataCode] = useState("");
  const [destinationIataCode, setdestinationIataCode] = useState("");
  //api를 통해 자료 받기

  const handleOnchangeArrival = (event, newArrival) => {
    setArrial(newArrival);
    //console.log("arrival :" + arrival);
    //이전값을 가져옴
  };
  const handleOnchangeInputArrival = (event, newInputArrival) => {
    setInputArrial(newInputArrival);
    //console.log("setarrival :" + setInputArrial);
    //이전값을 가져옴
  };
  const handleOnchangeDeparture = (event, newDeparture) => {
    setDeparture(newDeparture);
    //console.log("departure :" + departure);
    //이전값을 가져옴
  };
  const handleOnchangeInputDeparture = (event, newInputDeparture) => {
    setInputDeparture(newInputDeparture);
    //console.log("setDeparture :" + inputDeparture);
    //이전값을 가져옴
  };

  //항공사이름, 도시이름, 공항코드 => 검색 o, 나라이름-> 검색 x
  // 1. 출발지인지 도착지인지 구분 -> cityList에 값이 들어갈때에 값이 걸러서
  // 2. 받은값을 str에 넣으면됌
  // 3. 받은값의 iataCode가 origin과 destination code에 들어가야함

  // const cityList = async (cityList) => {
  //   const url = "http://localhost:8090/apisearch";
  //   await axios
  //     .get(url, {
  //       params: {
  //         str: cityList,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response);
  //       // response.json();
  //     })
  //     .catch();
  // };

  // useEffect(() => {
  //   fetch("http://www.balldontlie.io/api/v1/players")
  //     .then((response) => response.json())
  //     .then((json) => (console.log(json.data), setJsonResults(json.data)));
  // }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const slice = useCallback((string) => {
    if (string != null) {
      return string.slice(string.length - 5, string.length - 2);
    }
  }, []);

  useEffect(() => {
    const url = `http://localhost:8090/apisearch?str=${inputArrival}`;
    fetch(url)
      .then((response) => {
        // console.log("response.json", response);
        return response.json();
      })
      .then((json) =>
        // console.log("json.promise", json),
        setJsonResults(json)
      );
  }, [inputArrival]);

  useEffect(() => {
    const url = `http://localhost:8090/apisearch?str=${inputDeparture}`;
    fetch(url)
      .then((response) => {
        // console.log("response.json", response);
        return response.json();
      })
      .then((json) =>
        // console.log("json.promise", json),
        setJsonResults(json)
      );
  }, [inputDeparture]);

  useEffect(() => {
    // console.log("slice arrival ", slice(arrival));
    setOrigin((prevOrigin) => ({ ...prevOrigin, code: slice(arrival) }));
    setOriginIataCode(slice(arrival));
  }, [arrival]);

  useEffect(() => {
    // console.log("input iataCode", iataCode);
    setOrigin((prevOrigin) => ({ ...prevOrigin, code: originIataCode })); //dl
    update((prev) => ({ ...prev, origin: origin }));
  }, [originIataCode]);

  useEffect(() => {
    // console.log("slice arrival ", slice(arrival));
    setDestination((prevDestination) => ({
      ...prevDestination,
      code: slice(departure),
    }));
    setdestinationIataCode(slice(departure));
  }, [departure]);

  useEffect(() => {
    // console.log("input iataCode", iataCode);
    setDestination((prevDestination) => ({
      ...prevDestination,
      code: destinationIataCode,
    })); //dl
    update((prev) => ({ ...prev, destination: destination }));
  }, [destinationIataCode]);

  return (
    <Stack direction="row" sx={{ minWidth: 200 }}>
      <Autocomplete
        id="arrival_city"
        value={arrival}
        onChange={handleOnchangeArrival}
        inputValue={inputArrival}
        onInputChange={handleOnchangeInputArrival}
        options={jsonResults.map(
          (info) =>
            `${info.address.cityName}  ${capitalizeFirstLetter(info.name)}(${
              info.iataCode
            }) `
        )}
        noOptionsText={"값을 입력하시오"}
        sx={{ minWidth: 300 }}
        renderInput={(params) => <TextField {...params} label="출발지" />}
        renderOption={(props, option, { inputValue }) => {
          // console.log(option, inputValue);
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

      <Autocomplete
        id="departure_city"
        value={departure}
        onChange={handleOnchangeDeparture}
        inputValue={inputDeparture}
        onInputChange={handleOnchangeInputDeparture}
        options={jsonResults.map(
          (info) =>
            `${info.address.cityName}  ${capitalizeFirstLetter(info.name)}(${
              info.iataCode
            }) `
        )}
        noOptionsText={"값을 입력하시오"}
        sx={{ minWidth: 300 }}
        renderInput={(params) => <TextField {...params} label="도착지" />}
        renderOption={(props, option, { inputValue }) => {
          // console.log(option, inputValue);
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
    </Stack>
  );
};

export default SelectCity;
