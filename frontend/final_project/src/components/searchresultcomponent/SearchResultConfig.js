import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import Typography from "@mui/material/Typography";
import "./searchResultConfig.css";
import { color, display } from "@mui/system";

const SearchResultConfig = (props) => {
  const { resultPageNumUpdate } = props; // 정렬용, 체크에 따라 number값이 바뀜
  const [num, setNum] = useState(0);

  const [departTime, setDepartTime] = useState("1");
  const Hour_Select = [...Array(24)].map((v, i) => i + 1);
  const handleSelectChange = (e) => {
    setDepartTime((prev) => {
      return e.target.value;
    });
  };

  const handleChkChangeAll = (inNum) => {
    if (num === inNum) {
      setNum(0);
      resultPageNumUpdate(0);
    } else {
      setNum(inNum);
      resultPageNumUpdate(inNum);
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minWidth: 225,
        }}
      >
        {/* <div className='configTitle'>정렬 및 검색</div> */}
        {/* <fieldset className="configWrapper"> */}
        <Box
          className="configWrapper"
          sx={{
            boxSizing: "border-box",
            p: "15px",
            border: 1,
            borderColor: "#ccc",
            boxShadow: 1,
            borderRadius: 4,
          }}
        >
          <Typography
            sx={{
              color: "#111236",
              fontSize: "2rem",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            정렬 및 검색
          </Typography>

          <FormControlLabel
            control={
              <Checkbox
                checked={num === 1}
                onChange={() => {
                  handleChkChangeAll(1);
                }}
              />
            }
            label={
              <Box
                component="div"
                fontSize={20}
                fontWeight={"bold"}
                color={"111236"}
              >
                최저가순
              </Box>
            }
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 28 },
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={num === 2}
                /*{chk.c2}*/ onChange={() => {
                  handleChkChangeAll(2);
                }}
              />
            }
            label={
              <Box
                component="div"
                fontSize={20}
                fontWeight={"bold"}
                color={"111236"}
              >
                출발시간순
              </Box>
            }
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 28 },
            }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={num === 3}
                /*{chk.c3}*/ onChange={() => {
                  handleChkChangeAll(3);
                }}
              />
            }
            label={
              <Box
                component="div"
                fontSize={20}
                fontWeight={"bold"}
                color={"111236"}
              >
                경유여부
              </Box>
            }
            sx={{
              "& .MuiSvgIcon-root": { fontSize: 28 },
            }}
          />

          <Box sx={{ marginTop: 2 }}>
            <Typography variant="h2" color={"111236"} fontWeight={"bold"}>
              {" "}
              출발시간
            </Typography>

            <FormControl sx={{ m: 1, minWidth: 60 }}>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                출발시간
              </InputLabel>
              <NativeSelect
                // defaultValue={30}
                value={departTime}
                onChange={handleSelectChange}
                // inputProps={{
                //   name: 'age',
                //   id: 'uncontrolled-native',
                // }}
              >
                {/* <option value={10}>Ten</option>
                <option value={20}>Twenty</option> */}

                {Hour_Select.map((hour, idx) => {
                  return (
                    <option key={idx} value={hour}>
                      {hour}시
                    </option>
                  );
                })}
              </NativeSelect>
            </FormControl>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
              }}
            >
              <Typography variant="h2" color={"111236"} fontWeight={"bold"}>
                도착시간
              </Typography>
              <Typography variant="h2" color={"111236"} fontWeight={"bold"}>
                {parseInt(departTime) + 3 > 24
                  ? parseInt(departTime) + 3 - 24
                  : parseInt(departTime) + 3}
                시
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SearchResultConfig;
