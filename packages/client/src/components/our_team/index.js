import React from 'react';
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import EmployeeContactDetailsStyles from './StyledComponent';
import AddEmployeeContactDetails from './AddEmployeeContactDetails';
import EmployeeContactDetails from './EmployeeContactDetails';

const OurTeam = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Grid container justifyContent='center' my={6}>
      <Grid item xs={10}>
        <EmployeeContactDetailsStyles matches={matches}>
          <Grid container spacing={4} justifyContent='center'>
            <EmployeeContactDetails />
            <AddEmployeeContactDetails />
          </Grid>
        </EmployeeContactDetailsStyles>
      </Grid>
    </Grid>
  );
};

export default OurTeam;
