import React, { useEffect, useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Card from "@mui/material/Card";
// import CardActions from '@mui/material/CardActions';
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
//import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./goResultItem.css";
import {
    CardActions,
    CardHeader,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import { useSelector } from "react-redux";
import { display } from "@mui/system";
import { BASE_URL } from "../../apiEndPoints/constants";

const AccDetailItem = (props) => {
    const times = props.times;
    const stopInfo = props.stopInfo;
    const [imgSrc, setImgSrc] = useState("");
    const height = 150;
    const width = 150;
    const getLogo = async (data) => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Response/blob
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

                setImgSrc(objectURL);
            });
    };

    useEffect(() => {
        getLogo(stopInfo.carrierCode);
    }, [stopInfo]);

    const theme = createTheme({
        typography: {
            myStyle: {
                //color: 'white',
                fontWeight: "bold",
                fontSize: 19,
            },
        },
    });

    return (
        <div>
            <Box
                sx={{
                    display: "flex",
                    width: "900px",
                    height: "90px",
                    //   height: '200px',
                    justifyContent: "space-evenly",
                    //   justifyContent: 'flex-start',
                    // border: 2,
                }}
            >
                <ThemeProvider theme={theme}>
                    <Box
                        component="img"
                        src={imgSrc}
                        sx={{
                            borderRight: 2,
                            width: 100,
                            paddingRight: 2,
                        }}
                    />
                    {/* <Box component='img' src={imgSrc[idx]}/> */}
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        }}
                    >
                        <Typography variant="myStyle" fontSize={32}>
                            {stopInfo.departure.iataCode}
                        </Typography>
                        <Typography variant="myStyle">
                            출발:
                            {
                                " " +
                                    times.deTime.getFullYear() +
                                    "년 " +
                                    (times.deTime.getMonth() + 1) +
                                    "월 " +
                                    times.deTime.getDate() +
                                    "일 " +
                                    times.deTime.getHours() +
                                    "시 " +
                                    times.deTime.getMinutes() +
                                    "분 "
                                // +
                                // times.deTime.getSeconds() +
                                // '초'
                            }
                        </Typography>
                        {/* <Typography variant='h7' component='div'>
              {stopInfo.departure.terminal}번 터미널
            </Typography> */}
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            margin: "0px 10px",
                        }}
                    >
                        <Typography variant="myStyle">
                            소요시간
                            <br />
                            {Math.floor(times.leTime / 60) +
                                "시간" +
                                (times.leTime % 60) +
                                "분"}
                        </Typography>
                        <Typography>
                            <TrendingFlatIcon sx={{ fontSize: 60 }} />
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            marginLeft: "20px",
                        }}
                    >
                        <Typography variant="myStyle" fontSize={32}>
                            {stopInfo.arrival.iataCode}
                        </Typography>
                        <Typography variant="myStyle">
                            {/* 도착 : {arrivalAllTime[1]} */}
                            도착 :
                            {
                                " " +
                                    times.arTime.getFullYear() +
                                    "년 " +
                                    (times.arTime.getMonth() + 1) +
                                    "월 " +
                                    times.arTime.getDate() +
                                    "일 " +
                                    times.arTime.getHours() +
                                    "시 " +
                                    times.arTime.getMinutes() +
                                    "분 "
                                // +
                                // times.arTime.getSeconds() +
                                // '초'
                            }
                        </Typography>
                        {/* <Typography variant='h7' component='div'>
              {stopInfo.arrival.terminal}번 터미널
            </Typography> */}
                    </Box>
                </ThemeProvider>
            </Box>
        </div>
    );
};

export default AccDetailItem;
