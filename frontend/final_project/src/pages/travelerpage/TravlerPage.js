import React from 'react';
import Grid from '@mui/material/Grid';

import Header from '../../components/othercomponent/Header';
import GoResultItem from '../../components/travlerpagecomponent/GoResultItem';
import BackResultItem from './../../components/travlerpagecomponent/BackResultItem';
import TravlerHeader from './../../components/travlerpagecomponent/TravlerHeader';
const TravlerPage = () => {
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
          <GoResultItem />
        </Grid>
        <Grid item xs={3}>
          <BackResultItem />
        </Grid>
      </Grid>
    </div>
  );
};

export default TravlerPage;
