import React from "react";
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
import AccDetailItem from "./AccDetailItem";

const BackResultItem02 = () => {
    // 목적지에서 다시 돌아올 때
    const flightRedux = useSelector((state) => {
        return state.searchReducer3;
    });

    // 경유를 안하면 한개임
    // 즉 이거 개수만큼 보여주면됨(아코디언을 펼쳤을 때)
    const segArr =
        flightRedux.flightPrice.flightOffers[0].itineraries[1].segments;

    const stopNum = segArr.length - 1;

    // 가장 처음 출발 정보
    const startInfo = segArr[0].departure;
    // 가장 마지막 도착 정보
    const endInfo = segArr[stopNum].arrival;

    const departureTime = new Date(startInfo.at);
    const arrivalTime = new Date(endInfo.at);
    const leadTime =
        (arrivalTime.getTime() - departureTime.getTime()) / 1000 / 60; // 분

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
            <Accordion sx={{ border: 1 }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Box
                        sx={{
                            display: "flex",
                            width: "900px",
                            height: "90px",
                            //   height: '200px',
                            justifyContent: "space-evenly",
                            //   justifyContent: 'flex-start',
                            //   border: 2,
                        }}
                    >
                        <ThemeProvider theme={theme}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    borderRight: 2,
                                    width: 115,
                                }}
                            >
                                <Typography variant="myStyle">
                                    {"경유 : " + stopNum + "번"}
                                </Typography>
                                {/* {stopNum + '번 경유'} */}
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography variant="myStyle" fontSize={32}>
                                    {startInfo.iataCode}
                                </Typography>
                                <Typography variant="myStyle">
                                    출발:
                                    {
                                        " " +
                                            departureTime.getFullYear() +
                                            "년 " +
                                            (departureTime.getMonth() + 1) +
                                            "월 " +
                                            departureTime.getDate() +
                                            "일 " +
                                            departureTime.getHours() +
                                            "시 " +
                                            departureTime.getMinutes() +
                                            "분 "
                                        // +
                                        // departureTime.getSeconds() +
                                        // '초'
                                    }
                                </Typography>
                                {/* <Typography variant='myStyle'>
                  {startInfo.terminal}번 터미널
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
                                    {Math.floor(leadTime / 60) +
                                        "시간" +
                                        (leadTime % 60) +
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
                                    justifyContent: "center",
                                    marginLeft: "20px",
                                }}
                            >
                                <Typography variant="myStyle" fontSize={32}>
                                    {endInfo.iataCode}
                                </Typography>
                                <Typography variant="myStyle">
                                    {/* 도착 : {arrivalAllTime[1]} */}
                                    도착:
                                    {
                                        " " +
                                            arrivalTime.getFullYear() +
                                            "년 " +
                                            (arrivalTime.getMonth() + 1) +
                                            "월 " +
                                            arrivalTime.getDate() +
                                            "일 " +
                                            arrivalTime.getHours() +
                                            "시 " +
                                            arrivalTime.getMinutes() +
                                            "분 "
                                        // +
                                        // arrivalTime.getSeconds() +
                                        // '초'
                                    }
                                </Typography>
                                {/* <Typography variant='myStyle'>
                  {endInfo.terminal}번 터미널
                </Typography> */}
                            </Box>
                        </ThemeProvider>
                    </Box>
                </AccordionSummary>
                <AccordionDetails sx={{ border: 1 }}>
                    {segArr.map((ele, idx) => {
                        let deTime = new Date(ele.departure.at);
                        let arTime = new Date(ele.arrival.at);
                        let leTime =
                            (arTime.getTime() - deTime.getTime()) / 1000 / 60; //분
                        let times = {
                            deTime: deTime,
                            arTime: arTime,
                            leTime: leTime,
                        };

                        return (
                            <div key={idx}>
                                <br />
                                <AccDetailItem times={times} stopInfo={ele} />
                                {/* <Box
                  sx={{
                    display: 'flex',
                    width: '900px',
                    height: '90px',
                    //   height: '200px',
                    justifyContent: 'space-evenly',
                    //   justifyContent: 'flex-start',
                    //   border: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <Typography variant='h4' component='div'>
                      {ele.departure.iataCode}
                    </Typography>
                    <Typography variant='h6' component='div'>
                      출발:
                      {' ' +
                        deTime.getFullYear() +
                        '년 ' +
                        (deTime.getMonth() + 1) +
                        '월 ' +
                        deTime.getDate() +
                        '일 ' +
                        deTime.getHours() +
                        '시 ' +
                        deTime.getMinutes() +
                        '분 ' +
                        deTime.getSeconds() +
                        '초'}
                    </Typography>
                    <Typography variant='h7' component='div'>
                      {ele.departure.terminal}번 터미널
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      margin: '0px 10px',
                    }}
                  >
                    <Typography variant='h7' component='div'>
                      소요시간
                      <br />
                      {Math.floor(leTime / 60) + '시간' + (leTime % 60) + '분'}
                    </Typography>
                    <Typography>
                      <TrendingFlatIcon sx={{ fontSize: 60 }} />
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      marginLeft: '20px',
                    }}
                  >
                    <Typography variant='h4' component='div'>
                      {ele.arrival.iataCode}
                    </Typography>
                    <Typography variant='h6' component='div'>
                      도착 : {arrivalAllTime[1]}
                      도착 :
                      {' ' +
                        arTime.getFullYear() +
                        '년 ' +
                        (arTime.getMonth() + 1) +
                        '월 ' +
                        arTime.getDate() +
                        '일 ' +
                        arTime.getHours() +
                        '시 ' +
                        arTime.getMinutes() +
                        '분 ' +
                        arTime.getSeconds() +
                        '초'}
                    </Typography>
                    <Typography variant='h7' component='div'>
                      {ele.arrival.terminal}번 터미널
                    </Typography>
                  </Box>
                </Box> */}
                            </div>
                        );
                    })}
                    {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography> */}
                </AccordionDetails>
            </Accordion>
        </div>
    );
};

export default BackResultItem02;
