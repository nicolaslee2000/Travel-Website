import React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
//import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import './goResultItem.css';
import { CardActions, CardHeader } from '@mui/material';
import { useSelector } from 'react-redux';

const GoResultItem = () => {
  const flightRedux = useSelector((state) => {
    return state.searchReducer3;
  });

  //   const departureAllTime =
  //     flightRedux.flightPrice.flightOffers[0].itineraries[0].segments[0].departure.at.split(
  //       'T'
  //     );

  const departureTime = new Date(
    flightRedux.flightPrice.flightOffers[0].itineraries[0].segments[0].departure.at
  );
  const arrivalTime = new Date(
    flightRedux.flightPrice.flightOffers[0].itineraries[0].segments[0].arrival.at
  );
  const leadTime =
    (arrivalTime.getTime() - departureTime.getTime()) / 1000 / 60; // 분
  //   const arrivalAllTime =
  //     flightRedux.flightPrice.flightOffers[0].itineraries[0].segments[0].arrival.at.split(
  //       'T'
  //     );
  return (
    <>
      <Card
        elevation={5}
        sx={{
          display: 'flex',
          width: '900px',
          height: '200px',
          //   justifyContent: 'space-evenly',
          justifyContent: 'flex-start',
          border: 1,
        }}
      >
        <CardHeader
          title='가는날 출발시간'
          subheader={
            departureTime.getFullYear() +
            '년 ' +
            (departureTime.getMonth() + 1) +
            '월 ' +
            departureTime.getDate() +
            '일'
          }
        />
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              mt: 5,
              width: 600,
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='h4' component='div'>
                {
                  flightRedux.flightPrice.flightOffers[0].itineraries[0]
                    .segments[0].departure.iataCode
                }
              </Typography>
              <Typography variant='h7' component='div'>
                출발 :
                {departureTime.getHours() +
                  '시 ' +
                  departureTime.getMinutes() +
                  '분 ' +
                  departureTime.getSeconds() +
                  '초'}
              </Typography>
              <Typography variant='h7' component='div'>
                {
                  flightRedux.flightPrice.flightOffers[0].itineraries[0]
                    .segments[0].departure.terminal
                }
                번 터미널
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                margin: '0px 10px',
              }}
            >
              <Typography variant='h7' component='div'>
                소요시간
                <br />
                {Math.floor(leadTime / 60) + '시간' + (leadTime % 60) + '분'}
              </Typography>
              <Typography>
                <TrendingFlatIcon sx={{ fontSize: 60 }} />
              </Typography>
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: '20px',
              }}
            >
              <Typography variant='h4' component='div'>
                {
                  flightRedux.flightPrice.flightOffers[0].itineraries[0]
                    .segments[0].arrival.iataCode
                }
              </Typography>
              <Typography variant='h7' component='div'>
                {/* 도착 : {arrivalAllTime[1]} */}
                도착 :
                {arrivalTime.getHours() +
                  '시 ' +
                  arrivalTime.getMinutes() +
                  '분 ' +
                  arrivalTime.getSeconds() +
                  '초'}
              </Typography>
              <Typography variant='h7' component='div'>
                {
                  flightRedux.flightPrice.flightOffers[0].itineraries[0]
                    .segments[0].arrival.terminal
                }
                번 터미널
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default GoResultItem;
