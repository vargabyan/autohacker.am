import React from 'react';
import { Button, Grid } from '@mui/material';
import { IconFaSearch } from './icons';
import { SearchItemStyle } from './StyledComponent';

const SearchItem = () => (
  <SearchItemStyle>
    <Grid container direction='row'>
      <Grid item xs>
        <input placeholder='Որոնել' />
      </Grid>
      <Grid item>
        <Button>
          <IconFaSearch />
        </Button>
      </Grid>
    </Grid>
  </SearchItemStyle>
);

export default SearchItem;
