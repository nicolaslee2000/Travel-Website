import React, { useEffect, useState } from 'react';
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import './mainSearch.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchInit } from './../../reduxes/modules/searchInfoReducer';
import axios from 'axios';
import { seInit } from './../../reduxes/modules/searchInfoReducer2';
import { allInit, offerInit } from './../../reduxes/modules/searchInfoReducer3';
import SelectCity from './SelectCity';
import CalenderComp from './CalenderComp';
import Passenger from './Passenger';
import { Box, boxSizing, Container } from '@mui/system';

import BackgroundImage from '../../global/assets/images/backgrounds/BackgroundImage.jpg';

const MainSearchPrac02 = () => {
  const [raidoValue, setRadioValue] = useState(false);
  const [nonStop, setNonStop] = useState(true);
  const [onWay, setOnWay] = useState(true);
  const [pageLoaded, setPageLoaded] = useState(false);
  const [flightInfo, setFlightInfo] = useState({
    // origin: { country: "", airport: "", code: "" },
    // destination: { country: "", airport: "", code: "" },
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
    console.log('input :' + e);
    setFlightInfo(e);
  };

  // http://localhost:8090/flight/flights?originLocationCode=ICN&destinationLocationCode=NRT&departureDate=2022-08-05&adults=1
  const searchData = async (sendData) => {
    await axios
      .get('http://localhost:8090/flight/flights', {
        params: {
          // origin: sendData.origin.code,
          // destination: sendData.destination.code,
          origin: sendData.origin,
          destination: sendData.destination,
          departDate: sendData.departDate,
          returnDate: sendData.returnDate,
          adults: sendData.adults,
          travelClass: sendData.travelClass,
          nonStop: sendData.nonStop,
        },
      })
      .then((response) => {
        dispatch(offerInit(response.data));
        setPageLoaded(true);
      })
      .catch((err) => console.log('안됌ㅋ : ' + err.message));
  };

  const navigate = useNavigate();

  const handleToResult = () => {
    console.log('result :' + flightInfo);
    dispatch(searchInit(flightInfo));
    searchData(flightInfo);
    navigate('/searchResult', { state: { pageLoaded: pageLoaded } });
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
    //console.log(flightInfo);
    //console.log("selecity test용" + { flightInfo });
  }, [flightInfo]);

  useEffect(() => {
    //console.log(nonStop);
    setFlightInfo((prev) => ({ ...prev, nonStop: nonStop }));
  }, [nonStop]);

  useEffect(() => {
    dispatch(allInit());
  }, []);

  return (
    <Box
      sx={{
        height: 700,
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${BackgroundImage})`,
          backgroundSize: '100%, 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 0 top 80%',
        }}
      >
        <Container sx={{ paddingTop: 5 }}>
          <Typography variant='h1' color={'white'} align='center'>
            Travel your dream away!
          </Typography>
        </Container>
        <Container sx={{ paddingTop: 5, paddingBottom: 7 }}>
          {/* mainSearchApp */}
          <Box
            sx={{
              maxWidth: 1200,
              width: '100%',
              height: '108px',
            }}
          >
            <Typography
              variant='h2'
              component='div'
              sx={{ align: 'bottom', color: 'blue' }}
            >
              지금 여행을 떠나세요
            </Typography>
          </Box>
          <Box
            Container
            sx={{
              border: 1,
              boxSizing: 'border-box',
              bgcolor: '#ededed',
            }}
          >
            <Box sx={{ p: '24px' }}>
              {/* 직항유무 */}
              <FormControl>
                <RadioGroup
                  row
                  aria-labelledby='demo-controlled-radio-buttons-group'
                  name='oneWay-roundTrip-group'
                  value={raidoValue}
                  onChange={handleRadioChange}
                >
                  <FormControlLabel
                    value='false'
                    control={
                      <Radio
                        sx={{
                          '& .MuiSvgIcon-root': {
                            fontSize: 28,
                          },
                        }}
                      />
                    }
                    label='편도'
                  />
                  <FormControlLabel
                    value='true'
                    control={
                      <Radio
                        sx={{
                          '& .MuiSvgIcon-root': {
                            fontSize: 28,
                          },
                        }}
                      />
                    }
                    label='왕복'
                  />
                </RadioGroup>
              </FormControl>
              {/* 메뉴 */}
              <Grid container spacing={0}>
                {/* 도시선택 */}
                <Grid item xs={6}>
                  <Stack direction='row'>
                    <SelectCity
                      id='arrival_city'
                      update={inputDate}
                      label='출발지'
                    />
                    <SelectCity
                      id='departure_city'
                      update={inputDate}
                      label='도착지'
                    />
                  </Stack>
                </Grid>
                {/* 날짜선택 */}
                <Grid item xs={3.5}>
                  {/* 회석. onChange라는 props이름을 쓰면 base이벤트랑 겹칠 수 있기때문에 updateEvent로 이름 바꿨습니다. */}
                  <CalenderComp onWay={onWay} update={inputDate} />
                </Grid>
                {/* 인원좌석 선택 */}
                <Grid item xs={2.5}>
                  <Passenger update={inputDate} />
                </Grid>
              </Grid>
              {/* 직항여부 */}
              <Box sx={{ display: 'flex', mt: '24px' }}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={nonStop}
                      onChange={handleNonStop}
                      inputProps={{ 'aria-label': 'controlled' }}
                      sx={{ '& .MuiSvgIcon-root': { fontSize: 30 } }}
                    />
                  }
                  label='직항'
                />
                <Button
                  sx={{ ml: 'auto', width: '200px', height: '46px' }}
                  variant='outlined'
                  onClick={handleToResult}
                >
                  <Typography>검색하기</Typography>
                </Button>
                {/* 버튼 크기조절 */}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default MainSearchPrac02;
