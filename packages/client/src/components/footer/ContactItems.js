import React, { useEffect, useState } from 'react';
import { Grid, IconButton } from '@mui/material';
import { useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useTranslation } from 'react-i18next';
import useHttpRequest from '../../hook/useHttpRequest/useHttpRequest';

const ContactItems = ({ setUpdataContact }) => {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const auth = useSelector((state) => state.authenticationReducer.value);
  const { responsetData, httpRequest } = useHttpRequest();
  const [dataContacts, setDataContacts] = useState([]);

  const handelActions = (action, key) => {
    if (action === 'delete') {
      httpRequest('delete', '/admin/contact', JSON.stringify({ id: key._id }));
    }
    if (action === 'edit') {
      httpRequest('get', `/contact/?id=${key._id}`);
    }
  };

  useEffect(() => {
    httpRequest('get', '/contacts');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (responsetData.data?.contacts) {
      setDataContacts(responsetData.data.contacts);
    }
    if (responsetData.data?.contact) {
      setUpdataContact(responsetData.data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsetData.data]);

  return dataContacts.map((index) => (
    <Grid item className='contactItemsGrid' key={index._id}>
      <Grid container direction='column' spacing={1}>
        <Grid item>{index.address?.[language]}</Grid>
        <Grid item>
          <a href={`mailto:${index.email}`}>{index.email}</a>
        </Grid>
        <Grid item>
          <a href={`tel:${index.phone}`}>{index.phone}</a>
        </Grid>
        <Grid item sx={{ display: auth ? 'block' : 'none' }}>
          <Grid container spacing={1}>
            <Grid item>
              <IconButton aria-label='delete' onClick={() => handelActions('delete', index)} size='small'>
                <DeleteForeverIcon fontSize='inherit' className='iconButtons' />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label='edit' onClick={() => handelActions('edit', index)} size='small'>
                <EditIcon fontSize='inherit' className='iconButtons' />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ));
};

export default ContactItems;
