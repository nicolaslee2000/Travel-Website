import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
//import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import CircularProgress from "@mui/material/CircularProgress";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import {
    CardActions,
    CardHeader,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { confirmInit } from "../../reduxes/modules/searchInfoReducer3";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../apiEndPoints/constants";

const SearchResultItem02Back = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const rfosData = props.flightOfferSearchData;
    const fosData = rfosData.itineraries; // 편도확인

    const goData = fosData[0].segments;
    const goStopNum = goData.length - 1; // 경유맨마지막
    const goStart = goData[0];
    const goEnd = goData[goStopNum];
    const loTime = fosData[0].duration;

    const backData = fosData[1].segments;
    const backStopNum = backData.length - 1;
    const backStart = backData[0];
    const backEnd = backData[backStopNum];
    const lobackTime = fosData[1].duration;

    const height = 150;
    const width = 150;

    const [imgSrcGo, setImgSrcGo] = useState("");
    const [imgSrcBack, setImgSrcBack] = useState("");
    const [loading, setLoading] = useState(true);

    const theme = createTheme({
        typography: {
            myStyle: {
                //color: 'white',
                fontWeight: "bold",
                //fontSize: 25,
            },
        },
    });

    const dateTrans = (str) => {
        // let st = str.replace('T', );
        let stArr = str.split("T");
        return stArr;
    };

    const transDate = (str) => {
        // console.log(str.replace("T", " ").substring(0, 10));
        let stArr = str.replace("T", " ").substring(0, 10);
        return stArr;
    };

    const transTime = (str) => {
        let stArr = str.replace("T", " ").substring(11, 16);
        return stArr;
    };

    const leadTrans = (str) => {
        let s = str;
        s = str.replace("PT", "");
        s = s.replace("H", "시간 ");
        s = s.replace("M", "분 ");
        return s;
    };

    // const [goStartDate, goStartTime] = dateTrans(goStart.departure.at);
    // const [goEndDate, goEndTime] = dateTrans(goEnd.arrival.at);
    // const [backStartDate, backStartTime] = dateTrans(backStart.departure.at);
    // const [backEndDate, backEndTime] = dateTrans(backEnd.arrival.at);

    const goStartDate = transDate(goStart.departure.at);
    const goStartTime = transTime(goStart.departure.at);
    const goEndDate = transDate(goEnd.arrival.at);
    const goEndTime = transTime(goEnd.arrival.at);
    const backStartDate = transDate(backStart.departure.at);
    const backStartTime = transTime(backStart.departure.at);
    const backEndDate = transDate(backEnd.arrival.at);
    const backEndTime = transTime(backEnd.arrival.at);

    const postData = async (sendData) => {
        await axios
            .post(BASE_URL + "/flight/confirm", JSON.stringify(sendData), {
                headers: {
                    "Content-Type": `application/json`,
                },
            })
            .then((response) => {
                console.log("포스트 confirm 데이터", response.data);
                dispatch(confirmInit(response.data));
                navigate("/travler");
            });
    };

    const getLogo = async (data, setState) => {
        await fetch(
            BASE_URL +
                `/flight/logo?iatacode=${data}&width=${width}&height=${height}`,
            {
                method: "get",
            }
        )
            .then((response) => response.blob())
            .then((blob) => {
                const objectURL = URL.createObjectURL(blob);
                console.log("objectURL : ", objectURL);
                setState(objectURL);
                console.log("loading창 바뀌는중", objectURL);
                setLoading(false);
                // imgSrcGo(objectURL);
            });
    };

    const reduxConfirm = () => {
        console.log("SearchResultItem 포스트로 요청, 요청 데이터 : ", rfosData);
        postData(rfosData);
        // navigate('/travler');
    };

    useEffect(() => {
        getLogo(goStart.carrierCode, setImgSrcGo); // 출국
        getLogo(backStart.carrierCode, setImgSrcBack); // 귀국
    }, [rfosData]);

    return (
        <div>
            {loading ? (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <CircularProgress />
                </Box>
            ) : (
                <ThemeProvider theme={theme}>
                    <Card
                        elevation={5}
                        sx={{
                            display: "flex",
                            width: "950px",
                            justifyContent: "space-around",
                            boxShadow: "0px 2px 3px rgb(0 0 0 / 10%)",
                        }}
                    >
                        <CardContent
                            sx={{
                                width: 80,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {/* <Typography variant='h1' fontSize={20}>
                왕복
              </Typography> */}
                            <Typography variant="myStyle" fontSize={23}>
                                왕복
                            </Typography>
                        </CardContent>
                        <CardContent
                            sx={{
                                display: "flex" /*alignItems: 'center'*/,
                                flexDirection: "column",
                                // marginRight: '25px',
                                // marginTop: '10px', // 이미지 추가전 '50px'
                                // marginRight: '40px',
                                // paddingRight: '20px',
                                borderLeft: 2,
                                borderColor: "#d3d3d3",
                                justifyContent: "center",
                            }}
                        >
                            {/* 아시아나 */}
                            {/* <AirplanemodeActiveIcon /> */}
                            <Box
                                component="img"
                                src={imgSrcGo}
                                sx={{ height: 90, width: 100 }}
                            />
                            {/* {goStart.carrierCode} */}

                            <Box
                                sx={{
                                    marginTop: "30px",
                                    /*이미지 추가전 '80px' */
                                }}
                            >
                                {/* <AirplanemodeActiveIcon /> */}
                                <Box
                                    component="img"
                                    src={imgSrcBack}
                                    sx={{ height: 90, width: 100 }}
                                />
                                {/* {backStart.carrierCode} */}
                            </Box>
                        </CardContent>

                        <CardContent
                            sx={{
                                // marginTop: '15px',
                                marginTop: "15px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 200,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Typography
                                    variant="myStyle"
                                    sx={{ fontSize: 15, fontWeight: 500 }}
                                >
                                    {goStartDate}
                                </Typography>
                                <Typography
                                    variant="myStyle"
                                    sx={{ fontSize: 33, fontWeight: 700 }}
                                >
                                    {goStartTime}
                                </Typography>
                                <Typography
                                    variant="myStyle"
                                    sx={{ fontSize: 22, fontWeight: 700 }}
                                >
                                    {goStart.departure.iataCode}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    marginTop: "60px",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Typography
                                    variant="myStyle"
                                    sx={{ fontSize: 15, fontWeight: 500 }}
                                >
                                    {backStartDate}
                                </Typography>
                                <Typography
                                    variant="myStyle"
                                    sx={{ fontSize: 33, fontWeight: 700 }}
                                >
                                    {backStartTime}
                                </Typography>
                                <Typography
                                    variant="myStyle"
                                    sx={{ fontSize: 22, fontWeight: 700 }}
                                >
                                    {goStart.departure.iataCode}
                                </Typography>
                            </Box>
                        </CardContent>
                        <CardContent
                            sx={{
                                marginTop: "15px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 200,
                            }}
                        >
                            <Box
                                sx={{
                                    marginLeft: "30px",
                                }}
                            >
                                <Typography variant="myStyle">
                                    {/* {inputSearch.start.airport} 공항 */}
                                    {"경유: " + goStopNum + "회"}
                                </Typography>
                                <Typography>
                                    <TrendingFlatIcon sx={{ fontSize: 50 }} />
                                </Typography>
                            </Box>

                            <Box sx={{ marginLeft: "10px" }}>
                                <Typography variant="myStyle" fontSize={15}>
                                    {leadTrans(loTime) + "소요"}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    marginLeft: "30px",
                                    marginTop: "40px",
                                }}
                            >
                                <Typography variant="myStyle">
                                    {/* {inputSearch.start.airport} 공항 */}
                                    {"경유: " + backStopNum + "회"}
                                </Typography>
                                <Typography>
                                    <TrendingFlatIcon sx={{ fontSize: 50 }} />
                                </Typography>
                            </Box>

                            <Box sx={{ marginLeft: "10px" }}>
                                <Typography variant="myStyle" fontSize={15}>
                                    {leadTrans(lobackTime) + "소요"}
                                </Typography>
                            </Box>
                        </CardContent>

                        <CardContent
                            sx={{
                                // marginTop: '15px',
                                marginTop: "15px",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                width: 200,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Typography
                                    variant="myStyle"
                                    sx={{ fontSize: 15, fontWeight: 500 }}
                                >
                                    {goEndDate}
                                </Typography>
                                <Typography
                                    variant="myStyle"
                                    sx={{ fontSize: 33, fontWeight: 700 }}
                                >
                                    {goEndTime}
                                </Typography>
                                <Typography
                                    variant="myStyle"
                                    sx={{ fontSize: 22, fontWeight: 700 }}
                                >
                                    {goStart.departure.iataCode}
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    marginTop: "60px",
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <Typography
                                    variant="myStyle"
                                    sx={{ fontSize: 15, fontWeight: 500 }}
                                >
                                    {backEndDate}
                                </Typography>
                                <Typography
                                    variant="myStyle"
                                    sx={{ fontSize: 33, fontWeight: 700 }}
                                >
                                    {backEndTime}
                                </Typography>
                                <Typography
                                    variant="myStyle"
                                    sx={{ fontSize: 22, fontWeight: 700 }}
                                >
                                    {goStart.departure.iataCode}
                                </Typography>
                            </Box>
                        </CardContent>

                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                // marginTop: '15px',
                                marginLeft: "30px",
                                justifyContent: "center",
                                alignItems: "center",
                                width: 150,
                                borderLeft: 2,
                                borderColor: "#d3d3d3",
                            }}
                        >
                            <Typography variant="myStyle" fontSize={23}>
                                금액
                            </Typography>
                            <Typography variant="myStyle" fontSize={18}>
                                $ {rfosData.price.total + "₩"}
                            </Typography>
                            <Box sx={{ marginTop: "30px" }}>
                                {/* 여기서 버튼눌렀을떄 post로 보내서 응답 받아오기 */}
                                <Button
                                    onClick={reduxConfirm}
                                    variant="contained"
                                >
                                    <Typography variant="myStyle" fontSize={18}>
                                        확인
                                    </Typography>
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </ThemeProvider>
            )}
        </div>
    );
};

export default SearchResultItem02Back;
