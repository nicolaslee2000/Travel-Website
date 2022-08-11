import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Icon,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import "./Passenger.css";
import { Container } from "@mui/system";

export default function BasicPopover(props) {
  const { update } = props;

  const [anchorEl, setAnchorEl] = useState(null);
  const [seat, setSeat] = useState("ECONOMY");
  const [AdultCount, setAdultCount] = useState(1);
  const [ChildCount, setChildCount] = useState(0);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const handleSeat = (event) => {
    setSeat(event.target.value);
    console.log(event.target.value);
  };
  //값을 가져올때 성인인지 어린이인지 구분할 수 있으면 따로 되는거 아니농?

  const CountPerson = (CountPesprops) => {
    const { title, body } = CountPesprops;

    if (title === "성인") {
      const plusNumber = () => {
        if (AdultCount < 9) setAdultCount((AdultCount) => AdultCount + 1);
      };
      const minusNumber = () => {
        if (AdultCount > 1) setAdultCount((AdultCount) => AdultCount - 1);
      };
      return (
        <Grid container direction="row">
          <Typography sx={{ p: 1 }}>{body}</Typography>
          <Button onClick={minusNumber}>
            <RemoveCircleOutlineOutlinedIcon />
          </Button>
          <p>{AdultCount}</p>
          <Button onClick={plusNumber}>
            <AddCircleOutlineOutlinedIcon />
          </Button>
        </Grid>
      );
    } else {
      const plusNumber = () => {
        if (ChildCount < 9) setChildCount((ChildCount) => ChildCount + 1);
      };
      const minusNumber = () => {
        if (ChildCount > 0) setChildCount((ChildCount) => ChildCount - 1);
      };
      return (
        <Grid container direction="row">
          <Typography sx={{ p: 1 }}>{body}</Typography>
          <Button onClick={minusNumber}>
            <RemoveCircleOutlineOutlinedIcon />
          </Button>
          <p>{ChildCount}</p>
          <Button onClick={plusNumber}>
            <AddCircleOutlineOutlinedIcon />
          </Button>
        </Grid>
      );
    }
  };

  useEffect(() => {
    console.log("AdultCount :" + AdultCount);
    update((prev) => ({ ...prev, adults: AdultCount }));
  }, [AdultCount]);

  useEffect(() => {
    console.log("ChildCount :" + ChildCount);
    update((prev) => ({ ...prev, children: ChildCount }));
  }, [ChildCount]);

  useEffect(() => {
    console.log("seat :" + seat);
    update((prev) => ({ ...prev, travelClass: seat }));
  }, [seat]);

  return (
    <>
      <Button
        aria-describedby={id}
        variant="outlined"
        onClick={handleClick}
        sx={{ width: "250px", height: "56px", color: "gray" }}
      >
        총인원수 {AdultCount + ChildCount}명,좌석 : {seat}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Container sx={{ minwidth: 200, minheight: 300 }}>
          <Typography className="passenger_box" sx={{ p: 5 }}>
            인원, 좌석을 고르시오
          </Typography>
          <Box className="passenger_box">
            <CountPerson title="성인" body="성인"></CountPerson>
          </Box>
          <Box className="passenger_box">
            <CountPerson title="유/소아" body="유/소아"></CountPerson>
          </Box>
          <Box sx={{ minWidth: 100 }}>
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                defaultValue="Economy"
                value={seat}
                onChange={handleSeat}
              >
                <FormControlLabel
                  value="ECONOMY"
                  control={<Radio />}
                  label="ECONOMY"
                />
                <FormControlLabel
                  value="PREMIUM_ECONOMY"
                  control={<Radio />}
                  label="PREMIUM_ECONOMY"
                />
                <FormControlLabel
                  value="BUSINESS"
                  control={<Radio />}
                  label="BUSINESS"
                />
                <FormControlLabel
                  value="FIRST"
                  control={<Radio />}
                  label="FIRST"
                />
              </RadioGroup>
            </FormControl>

            {/* <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">좌석</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={seat}
                label="좌석"
                onChange={handleChange}
              >
                <MenuItem value="Economy">Economy</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="First class">First class</MenuItem>
              </Select>
            </FormControl> */}
          </Box>
        </Container>
      </Popover>
    </>
  );
}
