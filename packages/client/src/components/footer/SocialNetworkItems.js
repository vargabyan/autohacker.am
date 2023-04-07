import React, { useEffect, useState } from 'react';
import { Grid, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import useHttpRequest from '../../hook/useHttpRequest/useHttpRequest';

const SocialNetworkItems = () => {
  const auth = useSelector((state) => state.authenticationReducer.value);
  const { responsetData, httpRequest } = useHttpRequest();
  const [dataSocialNetwork, setDataSocialNetwork] = useState([]);

  const handelDelete = (key) => {
    httpRequest('delete', '/admin/social-network', JSON.stringify({ id: key._id }));
  };

  useEffect(() => {
    httpRequest('get', '/social-networks');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (responsetData.data?.socialNetworks) {
      setDataSocialNetwork(responsetData.data.socialNetworks);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsetData.data]);

  return dataSocialNetwork.map((index) => (
    <Grid item xs={6} key={`${index._id}`}>
      <Grid container alignItems='center' direction='column'>
        <Grid item>
          <a href={`${index.url}`}>
            {index.site === 'facebook' ? (
              <FacebookIcon fontSize='large' color='primary' className='icons' />
            ) : (
              <InstagramIcon fontSize='large' color='white' className='icons' />
            )}
          </a>
        </Grid>
        <Grid item sx={{ display: auth ? 'block' : 'none' }}>
          <IconButton aria-label='delete' onClick={() => handelDelete(index)} size='small'>
            <DeleteForeverIcon fontSize='inherit' className='iconButtons' />
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  ));
};

export default SocialNetworkItems;
