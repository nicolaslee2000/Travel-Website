import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
//import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './goResultItem.css';
import { CardActions, CardHeader } from '@mui/material';
import { useSelector } from 'react-redux';
import { display } from '@mui/system';
import AccDetailItem from './AccDetailItem';

const GoResultItem02 = () => {
  // 목적지로 갈 때
  const flightRedux = useSelector((state) => {
    return state.searchReducer3;
  });
  const imgSrcArr = [];
  let imgSrcOne = {};

  // 경유를 안하면 한개임
  // 즉 이거 개수만큼 보여주면됨(아코디언을 펼쳤을 때)
  const segArr =
    flightRedux.flightPrice.flightOffers[0].itineraries[0].segments;

  const stopNum = segArr.length - 1;

  // 가장 처음 출발 정보
  const startInfo = segArr[0].departure;
  // 가장 마지막 도착 정보
  const endInfo = segArr[stopNum].arrival;
  const height = 150;
  const width = 150;
  const [imgSrc1, setImgSrc1] = useState('');
  const [imgSrc2, setImgSrc2] = useState([]);
  const departureTime = new Date(startInfo.at);
  const arrivalTime = new Date(endInfo.at);
  const leadTime =
    (arrivalTime.getTime() - departureTime.getTime()) / 1000 / 60; // 분

  const handleMyConfirm = () => {
    console.log('segArr : ', segArr);
    console.log('stopNum : ', stopNum);
  };

  const getLogo = async (data) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Response/blob
    await fetch(
      `http://localhost:8090/flight/logo?iatacode=${data}&width=${width}&height=${height}`,
      {
        method: 'get',
      }
    )
      .then((response) => response.blob())
      .then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        console.log('objectURL : ', objectURL);
        console.log('도대체왜 왜자꾸 요청함?');
        console.log('imgSrc : ', imgSrc1);
        // imgSrcArr.push();
        // setImgSrc((prev) => {
        //   return [...prev, objectURL];
        // });
        setImgSrc1(objectURL);
      });
  };

  const getLogo2 = async (data) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Response/blob
    let result = '';
    await fetch(
      `http://localhost:8090/flight/logo?iatacode=${data}&width=${width}&height=${height}`,
      {
        method: 'get',
      }
    )
      .then((response) => response.blob())
      .then((blob) => {
        const objectURL = URL.createObjectURL(blob);
        console.log('objectURL : ', objectURL);
        console.log('도대체왜 왜자꾸 요청함?');
        // console.log('imgSrc : ', imgSrc);
        // imgSrcOne = objectURL;
        result = objectURL;
        // imgSrcArr.push();
        // setImgSrc((prev) => {
        //   return [...prev, objectURL];
        // });
      });
    return result;
  };
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Box
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
              }}
            >
              {'경유: ' + stopNum + '번'}
              {/* {stopNum + '번 경유'} */}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant='h4' component='div'>
                {startInfo.iataCode}
              </Typography>
              <Typography variant='h6' component='div'>
                출발:
                {' ' +
                  departureTime.getFullYear() +
                  '년 ' +
                  (departureTime.getMonth() + 1) +
                  '월 ' +
                  departureTime.getDate() +
                  '일 ' +
                  departureTime.getHours() +
                  '시 ' +
                  departureTime.getMinutes() +
                  '분 ' +
                  departureTime.getSeconds() +
                  '초'}
              </Typography>
              <Typography variant='h7' component='div'>
                {startInfo.terminal}번 터미널
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
                {Math.floor(leadTime / 60) + '시간' + (leadTime % 60) + '분'}
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
                {endInfo.iataCode}
              </Typography>
              <Typography variant='h6' component='div'>
                {/* 도착 : {arrivalAllTime[1]} */}
                도착:
                {' ' +
                  arrivalTime.getFullYear() +
                  '년 ' +
                  (arrivalTime.getMonth() + 1) +
                  '월 ' +
                  arrivalTime.getDate() +
                  '일 ' +
                  arrivalTime.getHours() +
                  '시 ' +
                  arrivalTime.getMinutes() +
                  '분 ' +
                  arrivalTime.getSeconds() +
                  '초'}
              </Typography>
              <Typography variant='h7' component='div'>
                {endInfo.terminal}번 터미널
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          {segArr.map((ele, idx) => {
            let deTime = new Date(ele.departure.at);
            let arTime = new Date(ele.arrival.at);
            let leTime = (arTime.getTime() - deTime.getTime()) / 1000 / 60; //분
            let times = { deTime: deTime, arTime: arTime, leTime: leTime };
            console.log('deTime : ', deTime);
            console.log('arTime : ', arTime);
            console.log('arTime.getTime() : ', arTime.getTime());
            console.log('deTime.getTime() : ', deTime.getTime());
            console.log('leTime : ', leTime);
            // getLogo(ele.carrierCode);
            //const kk = getLogo2(ele.carrierCode);
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
                  <Box component='img' src={imgSrc1} />
                  <Box component='img' src={imgSrc[idx]}/>
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

export default GoResultItem02;
