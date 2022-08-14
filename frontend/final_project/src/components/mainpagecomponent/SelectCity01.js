import { Autocomplete, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useCallback, useEffect, useState } from "react";
import { set } from "react-hook-form";
import axios from "axios";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";
import { DataUsage } from "@mui/icons-material";
import { debounce } from "lodash";

const SelectCity01 = (props) => {
  const { update } = props;

  const [jsonResults, setJsonResults] = useState([]);

  const [arrival, setArrial] = useState("");
  const [inputArrival, setInputArrial] = useState("");
  const [origin, setOrigin] = useState({
    country: null,
    airport: null,
    code: null,
  });
  const [iataCode, setIataCode] = useState("");

  //api를 통해 자료 받기

  // const handleOnchangeArrival = (event, newArrival) => {
  //   setArrial(newArrival);
  //   //console.log("arrival :" + arrival);
  //   //이전값을 가져옴
  // };

  const handleOnchangeArrival = (newArrival) => {
    console.log("디바운스 확인");
    setArrial(newArrival);
  };

  const handleOnchangeInputArrival = debounce((event, newInputArrival) => {
    console.log("확인", newInputArrival);
    setInputArrial(newInputArrival);
    //이전값을 가져옴
  }, 2000);

  //항공사이름, 도시이름, 공항코드 => 검색 o, 나라이름-> 검색 x
  //      국가(국가코드), 항공사이름(공항코드)

  //   0. 반복문 => 도시이름 검색할때, 항공사이름 적을때, 공항코드 적을때
  //    arrival =

  // 1. 출발지인지 도착지인지 구분 -> cityList에 값이 들어갈때에 값이 걸러서
  // 2. 받은값을 str에 넣으면됌
  // 3. 받은값의 iataCode가 origin과 destination code에 들어가야함

  // const cityList = async (input) => {
  //   const url = "http://localhost:8090/apisearch";
  //   await axios
  //     .get(url, {
  //       params: {
  //         str: input,
  //       },
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       //response.data;
  //     })
  //     .catch();
  // };

  // const code = () => {
  //   setIataCode(cityList(arrival).iataCode);
  // };

  // useEffect(() => {});

  // useEffect(() => {
  //   fetch("http://www.balldontlie.io/api/v1/players")
  //     .then((response) => response.json())
  //     .then((json) => setJsonResults(json.data));
  // }, []);

  // // useEffect(() => {
  // //   setJsonResults(cityList);
  // // }, []);

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }

  const slice = useCallback((string) => {
    if (string != null) {
      return string.slice(string.length - 5, string.length - 2);
    }
  }, []);

  // useEffect(() => {
  //   const url = `http://localhost:8090/apisearch?str=${inputArrival}`;
  //   fetch(url)
  //     .then((response) => {
  //       console.log("response", response);
  //       console.log("response.json", response.json);
  //       console.log("response.json()", response.json());
  //       // if( inputArrival != null){
  //       //   const resJson = response.json();
  //       // }else(
  //       //   const res
  //       // )
  //       return response.json();
  //     })
  //     .then(
  //       (json) => (console.log("json.promise", json), setJsonResults(json))
  //     );
  // }, [inputArrival]);

  // useEffect(()=>{

  //   const url = `http://localhost:8090/apisearch?str=${inputArrival}`;
  //   const data = await fetch(url)
  //       .then(res => res.json())
  //       .then ((json)=>{setJsonResults(json) })
  // },[inputArrival])

  const autoList = useCallback(async (input) => {
    try {
      let url = `http://localhost:8090/apisearch`;
      const res = await axios.get(url, { params: { str: input } });
      if (Array.isArray(res.data)) {
        setJsonResults(res.data);
      } else {
        setJsonResults([]);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    autoList(inputArrival);
  }, [autoList, inputArrival]);

  //1. 맨처음에 사용자가 값을 입력하기전에는 초기값 null값이다.
  //2. fornt에서 null값을 주면 back쪽에서 분기 처리를 해야할것같다
  //3. 분기처리할때 front에서 null값을 주면 back에서는 빈 배열을 주시면 될 거 같습니다.

  // ++ 새롭게 주신 프로퍼티 이용햇는데 값이 안나와서 테스트할때는 전에 test용말고 결제(?)할수도있는 그걸로 확인했습니다.

  // useEffect(() => {
  //   const url = `http://localhost:8090/apisearch?str=${inputArrival}`;
  //   const autoList = async (input) => {
  //     await fetch(url)
  //       .then((response) => {
  //         console.log("response.json", response.json());
  //         return response.json();
  //       })
  //       .then((json) =>
  //         // console.log("json.promise", json),
  //         setJsonResults(json)
  //       );
  //   };
  // }, [inputArrival]);

  // console.log("jsonresult", jsonResults);
  // console.log("arrival", arrival);
  // console.log("inputValue", inputArrival);
  // console.log("code", slice(arrival));

  //useEffect 안에 들어가는 값이 []안에 들어가서 감지가 되어야한다.
  useEffect(() => {
    // console.log("slice arrival ", slice(arrival));
    setOrigin((prevOrigin) => ({ ...prevOrigin, code: slice(arrival) }));
    setIataCode(slice(arrival));
  }, [arrival]);

  useEffect(() => {
    // console.log("input iataCode", iataCode);
    setOrigin((prevOrigin) => ({ ...prevOrigin, code: iataCode })); //dl
    update((prev) => ({ ...prev, origin: origin }));
  }, [iataCode]);

  return (
    <Stack direction="row" sx={{ minWidth: 200 }}>
      {/* <Autocomplete
        id="arrival_city"
        value={arrival || ""}
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
      /> */}

      <Autocomplete
        id="arrival_city"
        value={arrival || ""}
        onChange={handleOnchangeArrival}
        inputValue={inputArrival}
        onInputChange={handleOnchangeInputArrival}
        options={jsonResults.map(
          (info, idx) =>
            `${info.address.cityName}  ${capitalizeFirstLetter(info.name)}(${
              info.iataCode
            }) `
        )}
        noOptionsText={"값을 입력하시오"}
        sx={{ minWidth: 400 }}
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
    </Stack>
  );
};

export default SelectCity01;
