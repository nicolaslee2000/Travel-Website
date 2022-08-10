import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';
import { border } from '@mui/system';
import { useNavigate } from 'react-router-dom';

const TravlerInfo = () => {
  const navigate = useNavigate();
  const travelerInfo = useSelector((state) => {
    return state.searchReducer3.traveler;
  });

  const handleMain = () => {
    navigate('/');
  };
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          border: 1,
          width: 700,
          alignItems: 'center',
        }}
      >
        <Typography variant='h4' component='div' fontStyle={'initial'}>
          예약자 정보
        </Typography>
        <Typography variant='h6' component='div' fontStyle={'initial'}>
          <br />
          id : {travelerInfo.id}
        </Typography>
        <Typography variant='h6' component='div' fontStyle={'initial'}>
          dateOfBirth : {travelerInfo.dateOfBirth}
        </Typography>
        <Typography variant='h6' component='div' fontStyle={'initial'}>
          firstName : {travelerInfo.name.firstName}
        </Typography>
        <Typography variant='h6' component='div' fontStyle={'initial'}>
          lastName : {travelerInfo.name.lastName}
        </Typography>
        <Typography variant='h6' component='div' fontStyle={'initial'}>
          phonesNumber : {travelerInfo.contact.phones[0].phonesNumber}
        </Typography>
        <Typography variant='h6' component='div' fontStyle={'initial'}>
          documentType : {travelerInfo.documents[0].documentType}
        </Typography>
        <Typography variant='h6' component='div' fontStyle={'initial'}>
          expiryDate : {travelerInfo.documents[0].expiryDate}
        </Typography>
        <Typography variant='h6' component='div' fontStyle={'initial'}>
          nationality : {travelerInfo.documents[0].nationality}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '10px',
        }}
      >
        <Button variant='contained' color='primary' onClick={handleMain}>
          확인
        </Button>
      </Box>
    </div>
  );
};

export default TravlerInfo;
