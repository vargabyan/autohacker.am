import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import useHttpRequest from '../../hook/useHttpRequest/useHttpRequest';
import { ShowProductStyles } from './StyledComponent';
import Photogallery from './Photogallery';

const SimplePaper = () => (
  <Grid container>
    <Grid item xs={12}>
      <Typography>Մեքենայի Տվյալներ</Typography>
    </Grid>
    <Grid item xs={12}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            my: '6px',
            width: '100%',
            height: 32,
            alignItems: 'center',
            display: 'grid',
            textAlign: 'center',
            background: '#eff0edc9',
          },
        }}
      >
        <Paper variant>sdsd</Paper>
        <Paper variant>sdsd</Paper>
        <Paper variant>sdsd</Paper>
        <Paper variant>sdsd</Paper>
        <Paper variant>sdsd</Paper>
        <Paper variant>sdsd</Paper>
        <Paper variant>sdsd</Paper>
        <Paper variant>sdsd</Paper>
        <Paper variant>sdsd</Paper>
      </Box>
    </Grid>
  </Grid>
);

const ShowProduct = () => {
  const [data, setdata] = useState();
  const { product } = useParams();
  const { responsetData, httpRequest } = useHttpRequest();

  useEffect(() => {
    httpRequest('get', `/product/?id=${product}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (responsetData.data?.product) {
      setdata(responsetData.data.product);
    }
  }, [responsetData]);

  return data ? (
    <ShowProductStyles>
      <Grid container justifyContent='center' spacing={3} p={6}>
        <Grid item xs={10}>
          <Grid container spacing={2}>
            <Grid item>
              <Typography variant='h3' fontWeight={900}>
                {data.brand} {data.mode} {data.year}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant='h3' fontWeight={900}>
                {data.price}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Box sx={{ background: 'hsl(0, 0%, 86%)', height: '1px' }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={10}>
          <Grid container spacing={2}>
            <Grid item xs={10} md={6}>
              <Photogallery />
            </Grid>
            <Grid item xs={10} md={6}>
              <SimplePaper />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ShowProductStyles>
  ) : undefined;
};

export default ShowProduct;

