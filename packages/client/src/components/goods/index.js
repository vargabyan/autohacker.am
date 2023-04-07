import React from 'react';
import { Grid, Typography } from '@mui/material';
import './icons/style.css';
import GoodsList from './GoodsList';
import SearchItem from './SearchItem';
import FilterItem from './FilterItem';

const Goods = () => (
  <Grid container justifyContent='center' spacing={4} mt={1} mb={4}>
    <Grid item xs={9}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant='h3' fontWeight={700}>
            Կատալոգ
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <SearchItem />
        </Grid>
        <Grid item xs={12}>
          <FilterItem />
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={9}>
      <GoodsList />
    </Grid>
  </Grid>
);

export default Goods;
