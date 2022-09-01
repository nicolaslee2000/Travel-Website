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
import { Container, fontWeight } from "@mui/system";

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
    };
    //값을 가져올때 성인인지 어린이인지 구분할 수 있으면 따로 되는거 아니농?

    const CountPerson = (CountPesprops) => {
        const { title, body } = CountPesprops;
        let size = 60;

        if (title === "성인") {
            const plusNumber = () => {
                if (AdultCount < 9)
                    setAdultCount((AdultCount) => AdultCount + 1);
            };
            const minusNumber = () => {
                if (AdultCount > 1)
                    setAdultCount((AdultCount) => AdultCount - 1);
            };
            return (
                <Grid
                    container
                    direction="row"
                    sx={{ justifyContent: "center", alignItems: "center" }}
                >
                    <Typography sx={{ width: size, textAlign: "center" }}>
                        {body}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            width: `calc(100% - ${size}px)`,
                        }}
                    >
                        <Button onClick={minusNumber}>
                            <RemoveCircleOutlineOutlinedIcon />
                        </Button>
                        <p>{AdultCount}</p>
                        <Button onClick={plusNumber}>
                            <AddCircleOutlineOutlinedIcon />
                        </Button>
                    </Box>
                </Grid>
            );
        } else {
            const plusNumber = () => {
                if (ChildCount < 9)
                    setChildCount((ChildCount) => ChildCount + 1);
            };
            const minusNumber = () => {
                if (ChildCount > 0)
                    setChildCount((ChildCount) => ChildCount - 1);
            };
            return (
                <Grid
                    container
                    direction="row"
                    sx={{ justifyContent: "center", alignItems: "center" }}
                >
                    <Typography sx={{ width: size, textAlign: "center" }}>
                        {body}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            width: `calc(100% - ${size}px)`,
                        }}
                    >
                        <Button onClick={minusNumber}>
                            <RemoveCircleOutlineOutlinedIcon />
                        </Button>
                        <p>{ChildCount}</p>
                        <Button onClick={plusNumber}>
                            <AddCircleOutlineOutlinedIcon />
                        </Button>
                    </Box>
                </Grid>
            );
        }
    };

    // const seatIndexStyle = (seat) => {
    //   <Typography sx={{ fontSize: "30px", fontWeight: "500" }}>
    //     {seat}
    //   </Typography>;
    // };

    useEffect(() => {
        update((prev) => ({ ...prev, adults: AdultCount }));
    }, [AdultCount]);

    useEffect(() => {
        update((prev) => ({ ...prev, children: ChildCount }));
    }, [ChildCount]);

    useEffect(() => {
        update((prev) => ({ ...prev, travelClass: seat }));
    }, [seat]);

    return (
        <>
            <Button
                aria-describedby={id}
                variant="outlined"
                onClick={handleClick}
                sx={{
                    width: "100%",
                    height: "56px",
                    border: "1px solid rgba(0, 0, 0, 0.2)",
                }}
            >
                <Typography sx={{ color: "rgba(0, 0, 0, 0.8)" }}>
                    {/* 총인원수 {AdultCount + ChildCount}명, 좌석 : {seat} */}
                    총인원수 {AdultCount + ChildCount}명<br />
                    좌석 : {seat}
                </Typography>
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
                    <Box>
                        <Box className="passenger_box">
                            <CountPerson title="성인" body="성인"></CountPerson>
                        </Box>
                        <Box className="passenger_box">
                            <CountPerson
                                title="유/소아"
                                body="유/소아"
                            ></CountPerson>
                        </Box>
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
                                    // label={seatIndexStyle("ECONOMY")}
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
