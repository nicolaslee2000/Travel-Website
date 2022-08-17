import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector } from 'react-redux';
const NoSearchResultItem = (props) => {
  // const searData2 = useSelector((state) => {
  //   return state.searchReducer2;
  // });

  return (
    <>
      <CircularProgress />
      {/* {props.pageLoaded ? (
        <Card>
          <CircularProgress />
        </Card>
      ) : (
        <Card
          sx={{
            display: 'flex',
            width: '850px',
            height: '900px',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'mistyrose',
          }}
        >
          <CardContent
            sx={{ width: '500px', display: 'flex', justifyContent: 'center' }}
          >
            <Box>
              <Typography variant='h4'>검색결과가 없습니다.</Typography>
            </Box>
          </CardContent>
        </Card>
      )} */}
    </>
  );
};

export default NoSearchResultItem;
