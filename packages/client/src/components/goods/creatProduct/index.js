/* eslint-disable no-unused-vars */
import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useHttpRequest from '../../../hook/useHttpRequest/useHttpRequest';

const CreateProduct = () => {
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

  return (
    <Grid container justifyContent='center'>
      <Grid item>CreateProduct {product}</Grid>
    </Grid>
  );
};

export default CreateProduct;
