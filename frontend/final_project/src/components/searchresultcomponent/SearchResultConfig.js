import React, { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import Typography from '@mui/material/Typography';
import './searchResultConfig.css';
import { useDispatch, useSelector } from 'react-redux';
import { numInit } from '../../reduxes/modules/searchConfigReducer';
import { useNavigate } from 'react-router-dom';

const SearchResultConfig = (props) => {
  const { resultPageNumUpdate } = props;
  // const dispatch = useDispatch();
  // const searchConfigReduxData = useSelector((state) => {
  //   return state.configReducer;
  // });
  // const navigate = useNavigate();
  const [departTime, setDepartTime] = useState('1');
  const [num, setNum] = useState(0);
  // const [chk, setChk] = useState({ c1: false, c2: false, c3: false });
  const Hour_Select = [...Array(24)].map((v, i) => i + 1);
  const handleSelectChange = (e) => {
    setDepartTime((prev) => {
      return e.target.value;
    });
  };

  // const handleChkNo = () => {
  //   if (!chk.c1 && !chk.c2 && !chk.c3) {
  //     setNum(0);
  //     resultPageNumUpdate(0);
  //   }
  // };
  const handleChkChangeAll = (inNum) => {
    if (num === inNum) {
      setNum(0);
      resultPageNumUpdate(0);
    } else {
      setNum(inNum);
      resultPageNumUpdate(inNum);
    }
  };

  const handleChkChange01 = () => {
    // if (!chk.c1) {
    //   setChk({ c1: true, c2: false, c3: false });
    //   setNum(1);
    //   resultPageNumUpdate(1);
    // } else {
    //   setChk((prev) => {
    //     return { ...prev, c1: false };
    //   });
    //   handleChkNo();
    // }

    if (num === 1) {
      setNum(0);
      resultPageNumUpdate(0);
    } else {
      setNum(1);
      resultPageNumUpdate(1);
    }

    // dispatch(numInit(num));
    // navigate('/searchResult', { state: { info } });
    // window.location.replace('/searchResult');
  };
  console.log('Num값: ', num);

  // useEffect(() => {
  //   navigate('/searchResult');
  // }, [num]);

  return (
    <>
      <div className='configContainer'>
        {/* <div className='configTitle'>정렬 및 검색</div> */}
        <fieldset className='configWrapper'>
          <legend>정렬 및 검색</legend>

          <div className='checkBox'>
            <FormControlLabel
              control={
                <Checkbox
                  checked={num === 1}
                  onChange={() => {
                    handleChkChangeAll(1);
                  }}
                />
              }
              label={
                <Box component='div' fontSize={20} fontWeight={'bold'}>
                  최저가순
                </Box>
              }
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 28 },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={num === 2}
                  /*{chk.c2}*/ onChange={() => {
                    handleChkChangeAll(2);
                  }}
                />
              }
              label={
                <Box component='div' fontSize={20} fontWeight={'bold'}>
                  출발시간순
                </Box>
              }
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 28 },
              }}
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={num === 3}
                  /*{chk.c3}*/ onChange={() => {
                    handleChkChangeAll(3);
                  }}
                />
              }
              label={
                <Box component='div' fontSize={20} fontWeight={'bold'}>
                  경유여부
                </Box>
              }
              sx={{
                '& .MuiSvgIcon-root': { fontSize: 28 },
              }}
            />
          </div>
          <div className='timeBox'>
            <div>출발시간</div>
            <FormControl sx={{ m: 1, minWidth: 60 }}>
              <InputLabel variant='standard' htmlFor='uncontrolled-native'>
                출발시간
              </InputLabel>
              <NativeSelect
                // defaultValue={30}
                value={departTime}
                onChange={handleSelectChange}
                // inputProps={{
                //   name: 'age',
                //   id: 'uncontrolled-native',
                // }}
              >
                {/* <option value={10}>Ten</option>
                <option value={20}>Twenty</option> */}

                {Hour_Select.map((hour, idx) => {
                  return (
                    <option key={idx} value={hour}>
                      {hour}시
                    </option>
                  );
                })}
              </NativeSelect>
            </FormControl>
            {/* <FormControl fullWidth>
              <InputLabel id='demo-simple-select-label'>출발시간</InputLabel>
              <Select
                labelId='demo-simple-select-label'
                id='demo-simple-select'
                value={departTime}
                label='departTime'
                onChange={handleSelectChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>

                {Hour_Select.map((hour, idx) => {
                  return (
                    <MenuItem key={idx} value={hour}>
                      {hour}시
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl> */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
              }}
            >
              <Typography variant='h10' component='div'>
                도착시간
              </Typography>
              <Typography variant='h10' component='div'>
                {parseInt(departTime) + 3 > 24
                  ? parseInt(departTime) + 3 - 24
                  : parseInt(departTime) + 3}
                시
              </Typography>
            </Box>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default SearchResultConfig;
