import React, { useState } from 'react';
import { Autocomplete, Button, TextField } from '@mui/material';
import './mainSearch.css';
import { useNavigate } from 'react-router-dom';
// 계속 삽질하던이유 top10Start는 객체배열임
// 근데 계속 이상하게 형을 안맞춰줘서 안됐던거(start를 문자열로 생각해서 안된거)
const MainSearchPrac01 = () => {
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

  const [info, setInfo] = useState({ start: '', end: '' });
  const [start, setStart] = useState({ start: '' });
  const handleInfoChange = (e, newValue) => {
    setInfo((prev) => {
      return { ...prev, ...newValue };
    });
  };

  const handleStartChange = (e, newValue) => setStart(newValue);

  const navigate = useNavigate();
  const handleToResult = () => {};

  return (
    <>
      <div className='searchContainer'>
        <div className='searchBox'>
          <Autocomplete
            //disablePortal
            // isOptionEqualToValue={(option, value) =>
            //   option.start === value.start
            // }
            value={start}
            options={top10Start}
            sx={{ width: 150 }}
            getOptionLabel={(option) => option.start}
            renderInput={(params) => <TextField {...params} label='출발지' />}
            onChange={handleStartChange}
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
        </div>

        <Button variant='contained' onClick={handleToResult}>
          검색
        </Button>
      </div>
      <p>출발지 : {start.start}</p>
      <p>도착지 : {info.end}</p>
    </>
  );
};

export default MainSearchPrac01;
