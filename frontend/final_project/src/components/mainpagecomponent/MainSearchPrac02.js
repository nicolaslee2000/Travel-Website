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
    TextField,
    Typography,
} from "@mui/material";
import "./mainSearch.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchInit } from "./../../reduxes/modules/searchInfoReducer";
import axios from "axios";
import { seInit } from "./../../reduxes/modules/searchInfoReducer2";
import { offerInit } from "./../../reduxes/modules/searchInfoReducer3";
import SelectCity from "./SelectCity";
import CalenderComp from "./CalenderComp";
import Passenger from "./Passenger";
import { Box, boxSizing, Container } from "@mui/system";
import SelectCity01 from "./SelectCity01";
import BackgroundImage from "../../global/assets/images/backgrounds/BackgroundImage.jpg";
import FlightRecommendation from "./FlightRecommendation/FlightRecommendation";

const MainSearchPrac02 = () => {
    const [raidoValue, setRadioValue] = useState(false);
    const [nonStop, setNonStop] = useState(true);
    const [onWay, setOnWay] = useState(true);
    const [flightInfo, setFlightInfo] = useState({
        origin: { country: "", airport: "", code: "" },
        destination: { country: "", airport: "", code: "" },
        departDate: null,
        returnDate: null,
        adults: null,
        children: null,
        travelClass: null,
        nonStop: null,
    });

    // const top10Start = [
    //   { start: "한국" },
    //   { start: "미국" },
    //   { start: "일본" },
    //   { start: "중국" },
    //   { start: "미얀마" },
    //   { start: "캐나다" },
    //   { start: "인도" },
    //   { start: "프랑스" },
    //   { start: "영국" },
    // ];

    // const top10Start2 = [
    //   { start: { country: "한국", airport: "인천", code: "ICN" } },
    //   { start: { country: "일본", airport: "나리타", code: "NRT" } },
    // ];

    // const top10End2 = [
    //   { end: { country: "한국", airport: "인천", code: "ICN" } },
    //   { end: { country: "일본", airport: "나리타", code: "NRT" } },
    // ];

    // const top10End = [
    //   { end: "미국" },
    //   { end: "일본" },
    //   { end: "중국" },
    //   { end: "미얀마" },
    //   { end: "캐나다" },
    //   { end: "인도" },
    //   { end: "프랑스" },
    //   { end: "영국" },
    // ];
    // const { inputSearch } = useSelector((state) => {
    //   console.log('test -============================');
    //   console.log(state.searchReducer.inputSearch);
    //   return state.searchReducer;
    // });

    const dispatch = useDispatch();
    // const searData2 = useSelector((state) => {
    //   return state.searchReducer2;
    // });

    const searData3 = useSelector((state) => {
        return state.searchReducer3;
    });

    // const [info2, setInfo2] = useState({
    //   start: { country: "", airport: "", code: "" },
    //   end: { country: "", airport: "", code: "" },
    //   departureDate: "2022-08-12",
    //   returnDate: "2022-08-14",
    //   adults: 1,
    // });

    const inputDate = (e) => {
        console.log("input :" + e);
        setFlightInfo(e);
    };
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

    // http://localhost:8090/flight/flights?originLocationCode=ICN&destinationLocationCode=NRT&departureDate=2022-08-05&adults=1
    const searchData = async (sendData) => {
        await axios
            .get("http://localhost:8090/flight/flights", {
                params: {
                    origin: sendData.origin.code,
                    destination: sendData.destination.code,
                    departDate: sendData.departDate,
                    returnDate: sendData.returnDate,
                    adults: sendData.adults,
                    travelClass: sendData.travelClass,
                    nonStop: sendData.nonStop,
                },
                // params: { destinationLocationCode: sendData.start.code },
                // params: { departureDate: sendData.departureDate },
                // params: { adults: sendData.adults },
            })
            .then((response) => {
                console.log("MainSearchPrac02 리스폰스", response);
                console.log("MainSearchPrac02 리스폰스 데이터", response.data);
                dispatch(offerInit(response.data));
                console.log("MainSearchPrac02 디스패치 실행 후임");
                navigate("/searchResult");
                //dispatch(seInit(response.data));
                //setAxData(response.data);
                //console.log('상태데이터로 받음', axData);
            })
            .catch((err) => console.log("안됌ㅋ : " + err.message));
    };

    // 삭제?
    // const handleInfoChange = (e, newValue) => {
    //   // setInfo((prev) => {
    //   //   return { ...prev, ...newValue };
    //   // });
    //   setFlightInfo((prev) => {
    //     return { ...prev, ...newValue };
    //   });
    // };

    const navigate = useNavigate();

    const handleToResult = () => {
        console.log("result :" + flightInfo);
        dispatch(searchInit(flightInfo));
        searchData(flightInfo);
        // navigate("/searchResult");
        // let data = SearchData(' ');
        // console.log('메인페이지에서 엑시오스 실행 결과', data);
    };

    // const handleConfirm1 = () => {
    //   searchData3(flightInfo);
    //   //searchData(' ');
    // };

    // const handleConfirm2 = () => {
    //   //console.log('상태데이터로 받음', axData);
    //   //console.log(info2);
    //   //console.log('제발 떠라 제발', searData2);
    //   console.log(
    //     "제발 떠라 제발",
    //     searData3.flightOfferSearch[3].price.currency
    //   );
    //   console.log("제발 22", searData3);
    // };

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
        console.log(flightInfo);
        console.log("selecity test용" + { flightInfo });
    }, [flightInfo]);

    useEffect(() => {
        console.log(nonStop);
        setFlightInfo((prev) => ({ ...prev, nonStop: nonStop }));
    }, [nonStop]);

    return (
        <Box>
            <Box
                sx={{
                    backgroundImage: `url(${BackgroundImage})`,
                    backgroundSize: "100%, 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0 top 80%",
                }}
            >
                <Container sx={{ paddingTop: 5 }}>
                    <Typography variant="h1" color={"white"} align="center">
                        Travel your dream away!
                    </Typography>
                </Container>
                <Fade in={loaded}>
                    <Container sx={{ paddingTop: 5, paddingBottom: 7 }}>
                        {/* mainSearchApp */}

                        <Box
                            sx={{
                                maxWidth: 1200,
                                width: "100%",
                                height: "108px",
                                background: "grey",
                            }}
                        >
                            <Typography
                                variant="h2"
                                component="div"
                                sx={{ align: "bottom", color: "blue" }}
                            >
                                지금 여행을 떠나세요
                            </Typography>
                        </Box>
                        <Box
                            Container
                            sx={{
                                border: 1,
                                boxSizing: "border-box",
                                bgcolor: "#ededed",
                            }}
                        >
                            <Box sx={{ p: "24px" }}>
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
                                            label="편도"
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
                                            label="왕복"
                                        />
                                    </RadioGroup>
                                </FormControl>
                                {/* 메뉴 */}
                                <Grid container spacing={0}>
                                    {/* 도시선택 */}
                                    <Grid item xs={6}>
                                        <SelectCity update={inputDate} />
                                        {/* <SelectCity01 update={inputDate} /> */}
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
                                        label="직항"
                                    />
                                    <Button
                                        sx={{
                                            ml: "auto",
                                            width: "200px",
                                            height: "46px",
                                        }}
                                        variant="outlined"
                                        onClick={handleToResult}
                                    >
                                        <Typography>검색하기</Typography>
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
