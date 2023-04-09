import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import GoodsList from './goodsList';
import SearchItem from './SearchItem';
import FilterItem from './FilterItem';

const Goods = () => {
  const { t } = useTranslation();

  return (
    <Grid container justifyContent='center' spacing={4} py={6}>
      <Grid item xs={11} lg={9}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant='h3' fontWeight={700}>
              {t('goods.header')}
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
      <Grid item xs={11} lg={9}>
        <GoodsList />
      </Grid>
    </Grid>
  );
};

export default Goods;
