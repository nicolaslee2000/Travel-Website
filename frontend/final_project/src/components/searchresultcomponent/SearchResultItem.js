import React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
//import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import './searchResultItem.css';
import { CardActions, CardHeader } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { confirmInit } from '../../reduxes/modules/searchInfoReducer3';
import { useNavigate } from 'react-router-dom';

const SearchResultItem = (props) => {
  const flightOfferSearchData = props.flightOfferSearchData; // 이게 reducer데이터임 각각 줘야하기 떄문에 props로 줬음
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //const info = props.info;

  // const { inputSearch } = useSelector((state) => {
  //   return state.searchReducer;
  // });

  //이거 하던ㄴ거ㅓㅓㅓ
  // const pracAxios = async (sendData) =>{
  //   await axios.post()
  // }
  const inputSearch = useSelector((state) => {
    return state.searchReducer;
  });

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

  // const postData = async (sendData) => {
  //   await axios
  //     .post('http://localhost:8090/flight/confirm', {
  //       sendData,
  //     })
  //     .then((response) => {
  //       console.log('포스트 데이터', response.data);
  //     });
  // };

  // const pracReduce = useSelector((state) => {
  //   return state.searchReducer2;
  // });

  // const searData3 = useSelector((state) => {
  //   return state.searchReducer3;
  // });
  const reduxConfirm = () => {
    console.log(
      'SearchResultItem 포스트로 요청, 요청 데이터 : ',
      flightOfferSearchData
    );
    postData(flightOfferSearchData);
    navigate('/travler');
  };
  return (
    <>
      <Card
        elevation={5}
        sx={{
          display: 'flex',
          width: '700px',
          justifyContent: 'center',
          border: 1,
        }}
      >
        <CardHeader title='검색결과' />
        <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              marginTop: '15px',
              marginRight: '40px',
              // paddingRight: '20px',
              display: 'flex',
            }}
          >
            <AirplanemodeActiveIcon />
            <Typography variant='h6' component='div' fontStyle={'initial'}>
              아시아나
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h5' component='div'>
              {/* {info.start} */}
              {inputSearch.start.country}
            </Typography>
            <Typography variant='h10' component='div'>
              {inputSearch.start.airport} 공항
            </Typography>
          </Box>

          <Box sx={{ margin: '0px 10px' }}>
            <Typography>
              <TrendingFlatIcon sx={{ fontSize: 30 }} />
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '20px',
            }}
          >
            <Typography variant='h5' component='div'>
              {/* {info.end} */}
              {inputSearch.end.country}
            </Typography>
            <Typography variant='h10' component='div'>
              {inputSearch.end.airport} 공항
            </Typography>
          </Box>

          <CardActions
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginLeft: '40px',
            }}
          >
            <Box>
              <Typography variant='h8' component='div'>
                가격
              </Typography>
              <Typography variant='h10' component='div'>
                $ {flightOfferSearchData.price.total}
              </Typography>
            </Box>
            <Box sx={{ marginTop: '30px' }}>
              {/* 여기서 버튼눌렀을떄 post로 보내서 응답 받아오기 */}
              <Button onClick={reduxConfirm}>확인</Button>
            </Box>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default SearchResultItem;
