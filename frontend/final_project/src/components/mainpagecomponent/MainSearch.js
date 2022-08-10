import React, { useState } from 'react';
import { Autocomplete, Button, TextField } from '@mui/material';
import './mainSearch.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchInit } from './../../reduxes/modules/searchInfoReducer';

// 계속 삽질하던이유 top10Start는 객체배열임
// 근데 계속 이상하게 형을 안맞춰줘서 안됐던거(start를 문자열로 생각해서 안된거)
const MainSearch = () => {
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
  const { inputSearch } = useSelector((state) => {
    console.log('test -============================');
    console.log(state.searchReducer.inputSearch);
    return state.searchReducer;
    // state.searchInfoReducer
  });

  const dispatch = useDispatch();

  const [info, setInfo] = useState({ start: '', end: '' });
  const [start, setStart] = useState({ start: '' });
  const [end, setEnd] = useState({ end: '' });
  const handleInfoChange = (e, newValue) => {
    setInfo((prev) => {
      return { ...prev, ...newValue };
    });
  };

  const changeStart = (e, n) => {
    setStart(n);
  };

  const changeEnd = (e, n) => {
    setEnd(n);
    // const param = { start: start.start, end: end.end };
    // dispatch(searchInit(param));
  };

  const handleInfoChange2 = (e, newValue) => {
    console.log('체인지 동작은 함');
    dispatch(searchInit(newValue));
    console.log('체인지 동작 끝남');
  };

  const navigate = useNavigate();

  const handleToResult = () => {
    let input = { start: start.start, end: end.end };
    dispatch(searchInit(input));
    navigate('/searchResult', { state: { info } });
  };

  const myHandle = () => {
    console.log('확인용 버튼 클릭함');
    // const searchInfoS = useSelector((state) => state.searchInfoReducer);
    // const param = { start: start.start, end: end.end };
    let input = { start: start.start, end: end.end };
    console.log(input);
    dispatch(searchInit(input));
    console.log('확인용 버튼 클릭끝남');
    console.log(inputSearch);
  };

  return (
    <>
      <div className='searchContainer'>
        <div className='searchBox'>
          <Autocomplete
            disablePortal
            // isOptionEqualToValue={(option, value) =>
            //   option.start === value.start
            // }
            value={start}
            options={top10Start}
            sx={{ width: 150 }}
            getOptionLabel={(option) => option.start}
            renderInput={(params) => <TextField {...params} label='출발지' />}
            onChange={changeStart}
          />
        </div>
        <div className='searchBox'>
          <Autocomplete
            disablePortal
            value={end}
            options={top10End}
            getOptionLabel={(option) => option.end}
            sx={{ width: 150 }}
            renderInput={(params) => <TextField {...params} label='도착지' />}
            onChange={changeEnd}
          />
        </div>

        <Button variant='contained' onClick={handleToResult}>
          검색
        </Button>

        <Button variant='contained' onClick={myHandle}>
          확인용
        </Button>
      </div>
      {/* <p>출발지 : {info.start}</p>
      <p>도착지 : {info.end}</p> */}
      <p>출발지 : {start.start}</p>
      <p>도착지 : {end.end}</p>
    </>
  );
};

export default MainSearch;
