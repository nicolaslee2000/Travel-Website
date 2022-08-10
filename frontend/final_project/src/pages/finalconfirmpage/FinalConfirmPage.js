import React from 'react';
import { useSelector } from 'react-redux';
import Grid from '@mui/material/Grid';
import Header from '../../components/othercomponent/Header';
import GoResultItem02 from './../../components/travlerpagecomponent/GoResultItem02';
import BackResultItem02 from '../../components/travlerpagecomponent/BackResultItem02';
import TravlerInfo from '../../components/finalconfirmcomponent/TravlerInfo';

const FinalConfirmPage = () => {
  const searchReduxData = useSelector((state) => {
    return state.searchReducer3;
  });
  const goBackBool =
    searchReduxData.flightPrice.flightOffers[0].itineraries.length;
  return (
    <div>
      <Header />
      <Grid
        container
        spacing={4}
        direction='column'
        alignItems='center'
        justifyContent='center'
        style={{ minHeight: '70vh' }}
      >
        {' '}
        <Grid item xs={3}>
          {/* <GoResultItem /> */}
          <GoResultItem02 />
        </Grid>
        <Grid item xs={3}>
          {/* <BackResultItem /> */}
          {goBackBool === 1 ? <div></div> : <BackResultItem02 />}
          {/* <BackResultItem02 /> */}
        </Grid>
        <Grid item xs={10}></Grid>
        <Grid item xs={3}>
          {/* 여기에 travler에서 적은 회원정보 띄우기 */}
          <TravlerInfo />
        </Grid>
      </Grid>
    </div>
  );
};

export default FinalConfirmPage;
