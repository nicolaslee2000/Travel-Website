import React, { useState } from 'react';
import { Autocomplete, Button, TextField } from '@mui/material';
import './mainSearch.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchInit } from './../../reduxes/modules/searchInfoReducer';
import axios from 'axios';
import { seInit } from './../../reduxes/modules/searchInfoReducer2';
import { offerInit } from './../../reduxes/modules/searchInfoReducer3';

const MainSearchPrac02 = () => {
  const top10Start = [
    { start: '한국' },
    { start: '미국' },
    { start: '일본' },
    { start: '중국' },
    { start: '미얀마' },
    { start: '캐나다' },
    { start: '인도' },
    { start: '프랑스' },
    { start: '영국' },
  ];

  const top10Start2 = [
    { start: { country: '한국', airport: '인천', code: 'ICN' } },
    { start: { country: '일본', airport: '나리타', code: 'NRT' } },
    { start: { country: '독일', airport: '베를린', code: 'BER' } },
  ];

  const top10End2 = [
    { end: { country: '한국', airport: '인천', code: 'ICN' } },
    { end: { country: '일본', airport: '나리타', code: 'NRT' } },
    { end: { country: '독일', airport: '베를린', code: 'BER' } },
  ];

  const top10End = [
    { end: '미국' },
    { end: '일본' },
    { end: '중국' },
    { end: '미얀마' },
    { end: '캐나다' },
    { end: '인도' },
    { end: '프랑스' },
    { end: '영국' },
  ];
  // const { inputSearch } = useSelector((state) => {
  //   console.log('test -============================');
  //   console.log(state.searchReducer.inputSearch);
  //   return state.searchReducer;
  // });

  const dispatch = useDispatch();
  const searData2 = useSelector((state) => {
    return state.searchReducer2;
  });

  const searData3 = useSelector((state) => {
    return state.searchReducer3;
  });

  const [info, setInfo] = useState({ start: '', end: '' });
  const [info2, setInfo2] = useState({
    start: { country: '', airport: '', code: '' },
    end: { country: '', airport: '', code: '' },
    departureDate: '2022-08-12',
    returnDate: '2022-08-14',
    adults: 3,
  });
  // const [axData, setAxData] = useState([
  //   { type: '', subtype: '', name: '', iataCode: '' },
  // ]);

  // const searchData = async (sendData) => {
  //   await axios.get('http://localhost:8090/ordertest').then((response) => {
  //     console.log('리스폰스 데이터', response.data);
  //     dispatch(seInit(response.data));
  //     //setAxData(response.data);
  //     //console.log('상태데이터로 받음', axData);
  //   });
  // };

  // const searchData2 = async (sendData) => {
  //   await axios.get('http://localhost:8090/ordertest').then((response) => {
  //     console.log('리스폰스 데이터', response.data);
  //     dispatch(seInit(response.data));
  //     //setAxData(response.data);
  //     //console.log('상태데이터로 받음', axData);
  //   });
  // };

  // http://localhost:8090/flight/flights?originLocationCode=ICN&destinationLocationCode=NRT&departureDate=2022-08-05&adults=1
  const searchData3 = async (sendData) => {
    await axios
      .get('http://localhost:8090/flight/flights', {
        params: {
          origin: sendData.start.code,
          destination: sendData.end.code,
          departDate: sendData.departureDate,
          returnDate: sendData.returnDate,
          adults: sendData.adults,
          max: 15,
        },
        // params: { destinationLocationCode: sendData.start.code },
        // params: { departureDate: sendData.departureDate },
        // params: { adults: sendData.adults },
      })
      .then((response) => {
        console.log('리스폰스 데이터(배열 데이터)', response.data);
        dispatch(offerInit(response.data));
        console.log('디스패치 실행 후임');
        //dispatch(seInit(response.data));
        //setAxData(response.data);
        //console.log('상태데이터로 받음', axData);
      });
  };

  const handleInfoChange = (e, newValue) => {
    // setInfo((prev) => {
    //   return { ...prev, ...newValue };
    // });
    setInfo2((prev) => {
      return { ...prev, ...newValue };
    });
  };

  const navigate = useNavigate();

  const handleToResult = () => {
    // dispatch(searchInit(info));
    dispatch(searchInit(info2));
    // searchData(' ');
    searchData3(info2);
    // let data = SearchData(' ');
    // console.log('메인페이지에서 엑시오스 실행 결과', data);

    navigate('/searchResult', { state: { info } });
  };

  const handleConfirm1 = () => {
    searchData3(info2);
    //searchData(' ');
  };

  const handleConfirm2 = () => {
    //console.log('상태데이터로 받음', axData);
    //console.log(info2);
    //console.log('제발 떠라 제발', searData2);
    console.log(
      '제발 떠라 제발',
      searData3.flightOfferSearch[3].price.currency
    );
    console.log('제발 22', searData3);
  };

  return (
    <>
      <div className='searchContainer'>
        <div className='searchBox'>
          <Autocomplete
            disablePortal
            value={info2}
            options={top10Start2}
            sx={{ width: 150 }}
            getOptionLabel={(option) => option.start.country}
            renderInput={(params) => <TextField {...params} label='출발지' />}
            onChange={handleInfoChange}
          />
        </div>
        <div className='searchBox'>
          <Autocomplete
            disablePortal
            value={info2}
            options={top10End2}
            getOptionLabel={(option) => option.end.country}
            sx={{ width: 150 }}
            renderInput={(params) => <TextField {...params} label='도착지' />}
            onChange={handleInfoChange}
          />
        </div>

        {/* <div className='searchBox'>
          <Autocomplete
            disablePortal
            value={info}
            options={top10Start}
            sx={{ width: 150 }}
            getOptionLabel={(option) => option.start}
            renderInput={(params) => <TextField {...params} label='출발지' />}
            onChange={handleInfoChange}
          />
        </div>
        <div className='searchBox'>
          <Autocomplete
            disablePortal
            value={info}
            options={top10End}
            getOptionLabel={(option) => option.end}
            sx={{ width: 150 }}
            renderInput={(params) => <TextField {...params} label='도착지' />}
            onChange={handleInfoChange}
          />
        </div> */}

        <Button variant='contained' onClick={handleToResult}>
          검색
        </Button>

        <Button variant='contained' onClick={handleConfirm1}>
          확인용1
        </Button>

        <Button variant='contained' onClick={handleConfirm2}>
          확인용2
        </Button>
      </div>
      <p>출발지 : {info2.start.country}</p>
      <p>도착지 : {info2.end.country}</p>
      {/* <p>출발지 : {info.start}</p>
      <p>도착지 : {info.end}</p> */}
    </>
  );
};

export default MainSearchPrac02;
