import React from 'react';
import { Button, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IconFaSearch } from './icons';
import { SearchItemStyle } from './StyledComponent';

const SearchItem = () => {
  const { t } = useTranslation();

  return (
    <SearchItemStyle>
      <Grid container direction='row'>
        <Grid item xs>
          <input placeholder={t('goods.input-placeholder')} />
        </Grid>
        <Grid item>
          <Button>
            <IconFaSearch />
          </Button>
        </Grid>
      </Grid>
    </SearchItemStyle>
  );
};

export default SearchItem;
