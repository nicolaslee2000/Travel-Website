import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
//import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import CircularProgress from '@mui/material/CircularProgress';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import { CardActions, CardHeader } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { confirmInit } from '../../reduxes/modules/searchInfoReducer3';
import { useNavigate } from 'react-router-dom';

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

  const [imgSrcGo, setImgSrcGo] = useState('');
  const [imgSrcBack, setImgSrcBack] = useState('');
  const [loading, setLoading] = useState(true);

  const dateTrans = (str) => {
    // let st = str.replace('T', );
    let stArr = str.split('T');
    return stArr;
  };

  const leadTrans = (str) => {
    let s = str;
    s = str.replace('PT', '');
    s = s.replace('H', '시간 ');
    s = s.replace('M', '분 ');
    return s;
  };

  const [goStartDate, goStartTime] = dateTrans(goStart.departure.at);
  const [goEndDate, goEndTime] = dateTrans(goEnd.arrival.at);
  const [backStartDate, backStartTime] = dateTrans(backStart.departure.at);
  const [backEndDate, backEndTime] = dateTrans(backEnd.arrival.at);

  const postData = async (sendData) => {
    await axios
      .post('http://localhost:8090/flight/confirm', JSON.stringify(sendData), {
        headers: {
          'Content-Type': `application/json`,
        },
      })
      .then((response) => {
        console.log('포스트 confirm 데이터', response.data);
        dispatch(confirmInit(response.data));
      });
  };

  const getLogo = async (data, setState) => {
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
        setState(objectURL);
        console.log('loading창 바뀌는중', objectURL);
        setLoading(false);
        // imgSrcGo(objectURL);
      });
  };

  const reduxConfirm = () => {
    console.log('SearchResultItem 포스트로 요청, 요청 데이터 : ', rfosData);
    postData(rfosData);
    navigate('/travler');
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
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <Card
          elevation={5}
          sx={{
            display: 'flex',
            width: '900px',
            justifyContent: 'space-around',
            border: 1,
          }}
        >
          <CardHeader title='왕복' />
          <CardContent
            sx={{
              display: 'flex' /*alignItems: 'center'*/,
              marginRight: '25px',
            }}
          >
            <Box
              sx={{
                marginTop: '20px', // 이미지 추가전 '50px'
                marginRight: '40px',
                // paddingRight: '20px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant='h6' component='div' fontStyle={'initial'}>
                {/* 아시아나 */}
                {/* <AirplanemodeActiveIcon /> */}
                <Box
                  component='img'
                  src={imgSrcGo}
                  sx={{ height: 60, width: 80 }}
                />
                {goStart.carrierCode}
              </Typography>
              <Box sx={{ marginTop: '50px' /*이미지 추가전 '80px' */ }}>
                <Typography variant='h6' component='div' fontStyle={'initial'}>
                  {/* <AirplanemodeActiveIcon /> */}
                  <Box
                    component='img'
                    src={imgSrcBack}
                    sx={{ height: 60, width: 80 }}
                  />
                  {backStart.carrierCode}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                marginTop: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant='h5' component='div'>
                {/* {info.start} */}
                {goStart.departure.iataCode}
                {/* {inputSearch.start.country} */}
              </Typography>
              <Typography variant='h8' component='div'>
                {/* {inputSearch.start.airport} 공항 */}
                {'출발날짜: ' + goStartDate}
                <br />
                {'출발시간: ' + goStartTime}
              </Typography>

              <Box
                sx={{
                  marginTop: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography variant='h5' component='div'>
                  {/* {info.start} */}
                  {backStart.departure.iataCode}
                  {/* {inputSearch.start.country} */}
                </Typography>
                <Typography variant='h8' component='div'>
                  {/* {inputSearch.start.airport} 공항 */}
                  {'출발날짜: ' + backStartDate}
                  <br />
                  {'출발시간: ' + backStartTime}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                margin: '0px 10px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Box
                sx={{
                  marginLeft: '30px',
                }}
              >
                <Typography variant='h10' component='div'>
                  {/* {inputSearch.start.airport} 공항 */}
                  {'경유: ' + goStopNum + '회'}
                </Typography>
                <Typography>
                  <TrendingFlatIcon sx={{ fontSize: 50 }} />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: '10px' }}>
                <Typography variant='h10' component='div'>
                  {leadTrans(loTime) + '소요'}
                </Typography>
              </Box>

              <Box
                sx={{
                  marginLeft: '30px',
                  marginTop: '20px',
                }}
              >
                <Typography variant='h10' component='div'>
                  {/* {inputSearch.start.airport} 공항 */}
                  {'경유: ' + backStopNum + '회'}
                </Typography>
                <Typography>
                  <TrendingFlatIcon sx={{ fontSize: 50 }} />
                </Typography>
              </Box>
              <Box sx={{ marginLeft: '10px' }}>
                <Typography variant='h10' component='div'>
                  {leadTrans(lobackTime) + '소요'}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                marginTop: '15px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginLeft: '20px',
              }}
            >
              <Typography variant='h5' component='div'>
                {/* {info.end} */}
                {goEnd.arrival.iataCode}
              </Typography>
              <Typography variant='h10' component='div'>
                {'도착날짜: ' + goEndDate}
                <br />
                {'도착시간: ' + goEndTime}
              </Typography>

              <Box
                sx={{
                  marginTop: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography variant='h5' component='div'>
                  {/* {info.end} */}
                  {backEnd.arrival.iataCode}
                </Typography>
                <Typography variant='h10' component='div'>
                  {'도착날짜: ' + backEndDate}
                  <br />
                  {'도착시간: ' + backEndTime}
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '60px',
                marginLeft: '30px',
              }}
            >
              <Typography variant='h5' component='div'>
                가격
              </Typography>
              <Typography variant='h6' component='div'>
                $ {rfosData.price.total}
              </Typography>
              <Box sx={{ marginTop: '30px' }}>
                {/* 여기서 버튼눌렀을떄 post로 보내서 응답 받아오기 */}
                <Button onClick={reduxConfirm}>확인</Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchResultItem02Back;
