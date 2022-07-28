import { ForkRight } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import { bgcolor, Container, height, positions, width } from "@mui/system";
import React, { useState } from "react";
import { Calendar } from "react-date-range";
import { DateRange } from "react-date-range";
import CalenderComp from "./CalenderComp";
import CalenderRange from "./CalenderRange";
import "./mainSearch.css";
import Passenger from "./Passenger";

const FormControlLabels = (props) => {
  <FormControlLabel value="oneWay" control={<Radio />} label="편도" />;
};

const airport = [
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
];

const MainSearch = () => {
  const destinationInformation = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Godfather: Part II", year: 1974 },
  ];

  const [value, setValue] = React.useState([null, null]);

  let handleSelect = (date) => {
    console.log(date); // Momentjs object
  };

  return (
    <>
      <body className="body">
        <Box sx={{ border: 1, bgcolor: "skyblue", height: "600px" }}>
          <Container>
            <Box
              className="MainSearch"
              sx={{
                border: 1,
                bgcolor: "grey.300",
                alignItems: "center",
                borderRadius: "10px",
                height: "150px",
              }}
            >
              <Box>
                {/* header */}
                <div>
                  <FormControl>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                    >
                      <FormControlLabel
                        value="oneWay"
                        control={<Radio />}
                        label="편도"
                      />
                      <FormControlLabel
                        value="roundTrip"
                        control={<Radio />}
                        label="왕복"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>
              </Box>
              <Box sx={{ align: "center", m: 5 }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="center"
                  spacing={0.5}
                >
                  {/* departure section*/}
                  <Autocomplete
                    disablePortal
                    id="departure"
                    options={destinationInformation}
                    sx={{ width: 200 }}
                    renderInput={(params) => (
                      <TextField {...params} label="출발지" />
                    )}
                  />
                  {/* arrival section */}
                  <Autocomplete
                    disablePortal
                    id="arrival"
                    options={destinationInformation}
                    sx={{ width: 200 }}
                    renderInput={(params) => (
                      <TextField {...params} label="도착지" />
                    )}
                  />
                  <Box
                    sx={{
                      border: 0.1,
                      width: 200,
                      height: 55.96,
                    }}
                  >
                    <CalenderRange />
                  </Box>
                  <Box>
                    <Passenger />
                  </Box>

                  <button> 검색하기 </button>
                </Grid>
              </Box>
              <section>{/* date section */}</section>
              <section>{/* passenger section */}</section>
              <section>{/* class and price section*/}</section>
            </Box>
          </Container>
        </Box>
      </body>
    </>
  );
};

export default MainSearch;
