import React from 'react';
import { Grid, Typography } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AddEmployeeContactDetails = () => {
  const auth = useSelector((state) => state.authenticationReducer.value);
  const { lang } = useParams();

  return (
    <Grid item sm={8} md={6} xl={3} sx={{ display: auth ? 'block' : 'none' }}>
      <Grid container justifyContent='center' spacing={2} py={4}>
        <Grid item xs={12}>
          <Grid container justifyContent='center'>
            <Grid item>
              <Typography variant='p'>Ավելացրեք աշխատող</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container justifyContent='center'>
            <Grid item xs={12}>
              <Link to={`/${lang}/create_person_contacts`}>
                <Fab color='primary' aria-label='add' size='small' className='fab'>
                  <AddIcon />
                </Fab>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddEmployeeContactDetails;
