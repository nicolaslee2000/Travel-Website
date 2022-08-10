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

const SearchResultItem02 = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const rfosData = props.flightOfferSearchData;
  const fosData = rfosData.itineraries; // 편도확인
  const goData = fosData[0].segments;
  const goStopNum = goData.length - 1; // 경유맨마지막
  const goStart = goData[0];
  const goEnd = goData[goStopNum];
  const loTime = fosData[0].duration;
  const goOper = goStart.operating; // 변수한번더 감싸서 되나안되나확인
  const height = 150;
  const width = 150;

  const [imgSrc, setImgSrc] = useState('');
  const [loading, setLoading] = useState(true);
  const dateTrans = (str) => {
    // let st = str.replace('T', );
    let stArr = str.split('T');
    return stArr;
  };
  const leadTrans = (str) => {
    let s = str;
    !s.includes('M') ? (s = s + '00M') : (s = s);
    s = s.replace('PT', '');
    s = s.replace('H', '시간 ');
    s = s.replace('M', '분 ');
    return s;
  };

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

  //const iatacode = goStart.operating.carrierCode;s

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
        console.log('load값 false로 초기화');
        console.log('objectURL : ', objectURL);
        setState(objectURL);
        setLoading(false);
        ////
      });
  };

  const reduxConfirm = () => {
    console.log('SearchResultItem 포스트로 요청, 요청 데이터 : ', rfosData);
    postData(rfosData);
    navigate('/travler');
  };

  const [goStartDate, goStartTime] = dateTrans(goStart.departure.at);
  const [goEndDate, goEndTime] = dateTrans(goEnd.arrival.at);

  useEffect(() => {
    //console.log('실제 코드찍히는거', goStart.operating.carrierCode);
    console.log('실제 코드찍히는거', goOper.carrierCode);
    getLogo(goStart.carrierCode, setImgSrc); // 출국
    // setLoading(true);
  }, [rfosData]);

  return (
    <div>
      {loading ? (
        <Box sx={{ boxShadow: 3, backgroundColor: 'white' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Card
          elevation={5}
          sx={{
            display: 'flex',
            width: '850px',
            justifyContent: 'space-around',
            border: 1,
          }}
        >
          <CardHeader title='편도' />
          <CardContent sx={{ display: 'flex' /*alignItems: 'center'*/ }}>
            <Box
              sx={{
                marginTop: '30px',
                marginRight: '40px',
                // paddingRight: '20px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* <AirplanemodeActiveIcon /> */}
              <Box
                component='img'
                src={imgSrc}
                sx={{ height: 60, width: 80 }}
              />
              <Typography variant='h6' component='div' fontStyle={'initial'}>
                {/* 아시아나 */}
                {goStart.carrierCode}
              </Typography>
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
            </Box>

            {/* {backDataEmpty ? ( // 가고 오는거 다 보여줘야함
            // <div>돌아오는 데이터가 있다 왕복입니다.</div>
          ) : (
            // 가는거 만 보여주면됨
            <>
              
            </>
          )} */}

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '15px',
                marginLeft: '30px',
              }}
            >
              <Typography variant='h8' component='div'>
                가격
              </Typography>
              <Typography variant='h10' component='div'>
                $ {rfosData.price.total}
              </Typography>
              <Box>
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

export default SearchResultItem02;
