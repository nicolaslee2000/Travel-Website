import React, { useEffect, useState } from "react";
import {
    Autocomplete,
    Button,
    Checkbox,
    Fade,
    FormControl,
    FormControlLabel,
    Grid,
    Radio,
    RadioGroup,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import "./mainSearch.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchInit } from "./../../reduxes/modules/searchInfoReducer";
import axios from "axios";
import { seInit } from "./../../reduxes/modules/searchInfoReducer2";
import { allInit, offerInit } from "./../../reduxes/modules/searchInfoReducer3";
import SelectCity from "./SelectCity";
import CalenderComp from "./CalenderComp";
import Passenger from "./Passenger";
import { Box, boxSizing, Container, fontWeight } from "@mui/system";

// import BackgroundImage from "../../global/assets/images/backgrounds/BackgroundImage.jpg";
import BackgroundImage from "../../global/assets/images/backgrounds/BackgroundImage02.jpg";

import { Brightness1 } from "@mui/icons-material";
import FlightRecommendation from "./FlightRecommendation/FlightRecommendation";

const MainSearchPrac02 = () => {
    const [raidoValue, setRadioValue] = useState(false);
    const [nonStop, setNonStop] = useState(true);
    const [onWay, setOnWay] = useState(true);
    const [pageLoaded, setPageLoaded] = useState(false);
    const [flightInfo, setFlightInfo] = useState({
        origin: null,
        destination: null,
        departDate: null,
        returnDate: null,
        adults: null,
        children: null,
        travelClass: null,
        nonStop: null,
    });

    const dispatch = useDispatch();
    const searData3 = useSelector((state) => {
        return state.searchReducer3;
    });
    const inputDate = (e) => {
        setFlightInfo(e);
    };

    // http://localhost:8090/flight/flights?originLocationCode=ICN&destinationLocationCode=NRT&departureDate=2022-08-05&adults=1
    const searchData = async (sendData) => {
        await axios
            .get("http://localhost:8090/flight/flights", {
                params: {
                    origin: sendData.origin,
                    destination: sendData.destination,
                    departDate: sendData.departDate,
                    returnDate: sendData.returnDate,
                    adults: sendData.adults,
                    travelClass: sendData.travelClass,
                    nonStop: sendData.nonStop,
                    currency: "KRW",
                    max: 10,
                },
            })
            .then((response) => {
                dispatch(offerInit(response.data));
                setPageLoaded(true);
            })
            .catch((err) => console.log("안됌ㅋ : " + err.message));
    };

    const navigate = useNavigate();

    const handleToResult = () => {
        dispatch(searchInit(flightInfo));
        searchData(flightInfo);
        navigate("/searchResult", { state: { pageLoaded: pageLoaded } });
    };

    const handleRadioChange = (e) => {
        setRadioValue(e.target.value);
        if (setRadioValue) {
            setOnWay(!onWay);
        }
        // console.log("확인용" + flightInfo.departDate.value);
    };
    const handleNonStop = (event) => {
        setNonStop(event.target.checked);
        //  console.log(event.target.checked);
    };

    useEffect(() => {
        console.log();
        //console.log("selecity test용" + { flightInfo });
    }, [flightInfo]);

    useEffect(() => {
        //console.log(nonStop);
        setFlightInfo((prev) => ({ ...prev, nonStop: nonStop }));
    }, [nonStop]);

    useEffect(() => {
        dispatch(allInit());
    }, []);
    const [dashboardTrans, setDashboardTrans] = React.useState(false);
    const [loaded, setLoaded] = React.useState(false);
    React.useEffect(() => {
        const handleScroll = (event) => {
            if (window.scrollY > 200) {
                setDashboardTrans(true);
            }
        };
        window.addEventListener("scroll", handleScroll);
        setLoaded(true);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <Box
            sx={{
                // height: 700,
                position: "relative",
            }}
        >
            <Box
                sx={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: "100%, 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0 top 80%",
                    height: "550px",
                    // filter: "Brightness(80%)",
                }}
            >
                {/* <Container sx={{ paddingTop: 5 }}>
          <Typography variant="h1" color={"white"} align="center">
            Travel your dream away!
          </Typography>
        </Container> */}
                {/* <Container sx={{ paddingTop: 17, paddingBottom: 7 }}> */}
                <Fade in={loaded}>
                    <Container
                        sx={{
                            paddingTop: 10,
                            // position: "absolute",
                            // left: "50%",
                            // top: "50%",
                            // transform: "translate(-50%, -70%)",
                        }}
                    >
                        {/* mainSearchApp */}

                        <Box
                            sx={{
                                maxWidth: 1050,
                                width: "100%",
                                height: "90px",
                            }}
                        >
                            <Typography
                                variant="h1"
                                fontSize={50}
                                fontWeight={600}
                                component="div"
                                sx={{
                                    align: "bottom",
                                    color: "white",
                                    // textShadow:
                                    //   "-0.6px 0px black, 0px 0.6px black, 0.6px 0px black, 0px -0.6px black",
                                }}
                            >
                                Travel your dream away!
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                boxSizing: "border-box",
                                bgcolor: "#ededed",
                                borderRadius: 3,
                                boxShadow: 10,
                            }}
                        >
                            <Box
                                sx={{
                                    p: "25px",
                                }}
                            >
                                {/* 직항유무 */}
                                <FormControl>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-controlled-radio-buttons-group"
                                        name="oneWay-roundTrip-group"
                                        value={raidoValue}
                                        onChange={handleRadioChange}
                                    >
                                        <FormControlLabel
                                            value="false"
                                            control={
                                                <Radio
                                                    sx={{
                                                        "& .MuiSvgIcon-root": {
                                                            fontSize: 28,
                                                        },
                                                    }}
                                                />
                                            }
                                            label={
                                                <Typography
                                                    sx={{
                                                        fontSize: "17px",
                                                        fontWeight: "700",
                                                        // color: "white",
                                                    }}
                                                >
                                                    편도
                                                </Typography>
                                            }
                                        />
                                        <FormControlLabel
                                            value="true"
                                            control={
                                                <Radio
                                                    sx={{
                                                        "& .MuiSvgIcon-root": {
                                                            fontSize: 28,
                                                        },
                                                    }}
                                                />
                                            }
                                            label={
                                                <Typography
                                                    sx={{
                                                        fontSize: "17px",
                                                        fontWeight: "700",
                                                        // color: "white",
                                                    }}
                                                >
                                                    왕복
                                                </Typography>
                                            }
                                        />
                                    </RadioGroup>
                                </FormControl>
                                {/* 메뉴 */}
                                <Grid container spacing={0}>
                                    {/* 도시선택 */}
                                    <Grid item xs={6}>
                                        <Stack direction="row">
                                            <SelectCity
                                                id="arrival_city"
                                                update={inputDate}
                                                label="출발지"
                                            />
                                            <SelectCity
                                                id="departure_city"
                                                update={inputDate}
                                                label="도착지"
                                            />
                                        </Stack>
                                    </Grid>
                                    {/* 날짜선택 */}
                                    <Grid item xs={3.5}>
                                        {/* 회석. onChange라는 props이름을 쓰면 base이벤트랑 겹칠 수 있기때문에 updateEvent로 이름 바꿨습니다. */}
                                        <CalenderComp
                                            onWay={onWay}
                                            update={inputDate}
                                        />
                                    </Grid>
                                    {/* 인원좌석 선택 */}
                                    <Grid item xs={2.5}>
                                        <Passenger update={inputDate} />
                                    </Grid>
                                </Grid>
                                {/* 직항여부 */}
                                <Box sx={{ display: "flex", mt: "24px" }}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={nonStop}
                                                onChange={handleNonStop}
                                                inputProps={{
                                                    "aria-label": "controlled",
                                                }}
                                                sx={{
                                                    "& .MuiSvgIcon-root": {
                                                        fontSize: 30,
                                                    },
                                                }}
                                            />
                                        }
                                        label={
                                            <Typography
                                                sx={{
                                                    fontSize: "17px",
                                                    fontWeight: "700",
                                                    // color: "white",
                                                }}
                                            >
                                                직항
                                            </Typography>
                                        }
                                    />
                                    <Button
                                        sx={{
                                            ml: "auto",
                                            width: "200px",
                                            height: "60px",
                                            // bgcolor: "#02122c",
                                        }}
                                        variant="outlined"
                                        onClick={handleToResult}
                                    >
                                        <Typography
                                            sx={{
                                                fontSize: 25,
                                                fontWeight: 550,
                                            }}
                                        >
                                            검색하기
                                        </Typography>
                                    </Button>
                                    {/* 버튼 크기조절 */}
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Fade>
            </Box>
            <FlightRecommendation dashboardTrans={dashboardTrans} />
        </Box>
    );
};

export default MainSearchPrac02;
