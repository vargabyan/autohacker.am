import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IconFaFilter } from './icons';
import { FilterItemStyle } from './StyledComponent';

const FilterItem = () => {
  const { t } = useTranslation();

  return (
    <FilterItemStyle>
      <Grid container direction='row' justifyContent='space-between' alignItems='center'>
        <Grid item>
          <Button className='icon-button'>
            <i className='icon-auction' />
          </Button>
          <Button>
            <Typography className='icon-name'>{t('goods.status-button.at-auction')}</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button className='icon-button'>
            <i className='icon-delivery' />
          </Button>
          <Button>
            <Typography className='icon-name'>{t('goods.status-button.on-the-way')}</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button className='icon-button'>
            <i className='icon-weHave' />
          </Button>
          <Button>
            <Typography className='icon-name'>{t('goods.status-button.in-armenia')}</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button>
            <IconFaFilter />
          </Button>
        </Grid>
      </Grid>
    </FilterItemStyle>
  );
};

export default FilterItem;
