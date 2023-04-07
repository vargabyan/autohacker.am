import React from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { IconFaFilter } from './icons';
import { FilterItemStyle } from './StyledComponent';

const FilterItem = () => (
  <FilterItemStyle>
    <Grid container direction='row' justifyContent='space-between' alignItems='center'>
      <Grid item>
        <Button className='icon-button'>
          <i className='icon-auction' />
        </Button>
        <Button>
          <Typography className='icon-name'>Աճուրդում</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button className='icon-button'>
          <i className='icon-delivery' />
        </Button>
        <Button>
          <Typography className='icon-name'>Ճանապարհին</Typography>
        </Button>
      </Grid>
      <Grid item>
        <Button className='icon-button'>
          <i className='icon-weHave' />
        </Button>
        <Button>
          <Typography className='icon-name'>ՀՀ-ում</Typography>
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

export default FilterItem;
