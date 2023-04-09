import React, { useEffect, useState } from 'react';
import { Button, Grid, Typography, IconButton } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from 'react-i18next';
import { ListItemStyle } from './StyledComponent';
import useHttpRequest from '../../../hook/useHttpRequest/useHttpRequest';
import './icons/style.css';
import Status from './Status';
import ProductPhoto from './ProductPhoto';

const GoodsList = () => {
  const navigation = useNavigate();
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const { responsetData, httpRequest } = useHttpRequest();
  const { lang } = useParams();
  const auth = useSelector((state) => state.authenticationReducer.value);

  const handleClick = (product) => {
    navigation(`/${lang}/show-product/${product}`);
  };

  const handleActions = (key, product) => {
    if (key === 'delete') {
      httpRequest('delete', '/admin/product', { id: product.id, photoName: product.photoName });
    } else {
      navigation(`/${lang}/create-product/${product.id}`);
    }
  };

  useEffect(() => {
    httpRequest('get', '/products');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (responsetData.data?.products) {
      setData(responsetData.data.products);
    }
  }, [responsetData]);

  return (
    <Grid container spacing={1} justifyContent='center'>
      {data.map((product) => (
        <Grid item key={product._id} xs={12} md={6} lg={4} xl={3}>
          <ListItemStyle>
            <ProductPhoto product={product}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container justifyContent='end'>
                    <Grid item>
                      <Status product={product} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item>
                      <Typography className='brand-mode-year'>
                        {`${product.brand} ${product.mode} ${product.year}`}
                      </Typography>
                    </Grid>
                    <Grid item sx={{ display: auth ? 'block' : 'none' }}>
                      <Grid container>
                        <Grid item>
                          <IconButton
                            className='iconButton'
                            aria-label='delete'
                            onClick={() => handleActions('delete', product)}
                            size='small'
                          >
                            <DeleteForeverIcon fontSize='inherit' />
                          </IconButton>
                        </Grid>
                        <Grid item>
                          <IconButton
                            className='iconButton'
                            aria-label='edit'
                            onClick={() => handleActions('edit', product)}
                            size='small'
                          >
                            <EditIcon fontSize='inherit' />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item>
                      <Typography className='price'>{product.price}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justifyContent='end'>
                    <Grid item>
                      <Button
                        className='learn-more'
                        variant='contained'
                        size='small'
                        onClick={() => handleClick(product._id)}
                      >
                        {t('goods.button-learn-more')}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </ProductPhoto>
          </ListItemStyle>
        </Grid>
      ))}
    </Grid>
  );
};

export default GoodsList;
