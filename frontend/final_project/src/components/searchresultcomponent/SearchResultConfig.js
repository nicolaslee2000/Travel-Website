import React, { useState } from 'react';
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

const SearchResultConfig = () => {
  const [departTime, setDepartTime] = useState('1');
  const Hour_Select = [...Array(24)].map((v, i) => i + 1);
  const handleSelectChange = (e) => {
    setDepartTime((prev) => {
      return e.target.value;
    });
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 215,
        }}
      >
        {/* <div className='configTitle'>정렬 및 검색</div> */}
        <fieldset className='configWrapper'>
          <legend>
            <Typography variant='h1' color={'white'} fontWeight={'bold'}>
              {' '}
              정렬 및 검색
            </Typography>
          </legend>

          <FormControlLabel
            control={<Checkbox />}
            label={
              <Box
                component='div'
                fontSize={20}
                fontWeight={'bold'}
                color={'white'}
              >
                최저가순
              </Box>
            }
            sx={{
              '& .MuiSvgIcon-root': { fontSize: 28 },
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Box
                component='div'
                fontSize={20}
                fontWeight={'bold'}
                color={'white'}
              >
                출발시간순
              </Box>
            }
            sx={{
              '& .MuiSvgIcon-root': { fontSize: 28 },
            }}
          />
          <FormControlLabel
            control={<Checkbox />}
            label={
              <Box
                component='div'
                fontSize={20}
                fontWeight={'bold'}
                color={'white'}
              >
                경유여부
              </Box>
            }
            sx={{
              '& .MuiSvgIcon-root': { fontSize: 28 },
            }}
          />

          <Box sx={{ marginTop: 2 }}>
            <Typography variant='h2' color={'white'} fontWeight={'bold'}>
              {' '}
              출발시간
            </Typography>

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
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
              }}
            >
              <Typography variant='h2' color={'white'} fontWeight={'bold'}>
                도착시간
              </Typography>
              <Typography variant='h2' color={'white'} fontWeight={'bold'}>
                {parseInt(departTime) + 3 > 24
                  ? parseInt(departTime) + 3 - 24
                  : parseInt(departTime) + 3}
                시
              </Typography>
            </Box>
          </Box>
        </fieldset>
      </Box>
    </>
  );
};

export default SearchResultConfig;
