import React from 'react';
import Grid from '@mui/material/Grid';

import Header from '../../components/othercomponent/Header';
import GoResultItem from '../../components/travlerpagecomponent/GoResultItem';
import BackResultItem from './../../components/travlerpagecomponent/BackResultItem';
import TravlerHeader from './../../components/travlerpagecomponent/TravlerHeader';
import GoResultItem02 from './../../components/travlerpagecomponent/GoResultItem02';
import BackResultItem02 from '../../components/travlerpagecomponent/BackResultItem02';
import { useSelector } from 'react-redux';

const TravlerPage = () => {
  const searchReduxData = useSelector((state) => {
    return state.searchReducer3;
  });
  const goBackBool =
    searchReduxData.flightPrice.flightOffers[0].itineraries.length;
  return (
    <div>
      <Header />
      <TravlerHeader />

      <Grid
        container
        spacing={2}
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
      </Grid>
    </div>
  );
};

export default TravlerPage;
