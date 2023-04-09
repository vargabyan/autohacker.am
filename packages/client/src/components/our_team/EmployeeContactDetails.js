import React, { useEffect, useState } from 'react';
import { Grid, Typography, IconButton, Link } from '@mui/material';
import { useSelector } from 'react-redux';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { IconIoIosCall, IconMdMail } from './Icons';
import useHttpRequest from '../../hook/useHttpRequest/useHttpRequest';

const GetPhoto = ({ filename }) => {
  const { responsetData, getRequestFile } = useHttpRequest();
  const [photo, setPhoto] = useState();

  useEffect(() => {
    getRequestFile('get', `/our-teame-img/?person=${filename}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {}, [photo]);
  useEffect(() => {
    if (responsetData.file) {
      setPhoto(responsetData.file);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsetData.file]);

  return <img src={photo} alt='' className='photo' />;
};

const EmployeeContactDetails = () => {
  const auth = useSelector((state) => state.authenticationReducer.value);
  const { responsetData, httpRequest } = useHttpRequest();
  const { i18n } = useTranslation();
  const { language } = i18n;
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  const handleActions = (action, person) => {
    if (action === 'delete') {
      httpRequest('delete', '/admin/person-contact', { id: person._id });
      httpRequest('delete', '/admin/person-contact-img', { filename: person.filename });
    }
    if (action === 'edit') {
      // did not work
      // redirect(`/${language}/create_person_contacts/?person=${key._id}`);
      navigate(`/${language}/create_person_contacts/${person._id}`);
    }
  };

  useEffect(() => {
    httpRequest('get', '/our-teame');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (responsetData.data?.persons) {
      setData(responsetData.data.persons);
    }
    if (responsetData.data?.person === 'delete') {
      httpRequest('get', '/our-teame');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsetData.data]);

  return data.map((index) => (
    <Grid item xs={7} md={6} lg={4} xl={3} key={index._id}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} className='photoGrid'>
              <GetPhoto filename={index.filename} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Grid container direction='column'>
                <Grid item xs={12} my>
                  <Typography className='header'>{index.fullname?.[language]}</Typography>
                </Grid>
                <Grid item>{index.jobTitle?.[language]}</Grid>
                <Grid item>
                  <IconIoIosCall />
                  <Link href={`tel:${index.phone}`}>{index.phone}</Link>
                </Grid>
                <Grid item>
                  <IconMdMail />
                  <Link href={`mailto:${index.email}`}>{index.email}</Link>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} sx={{ display: auth ? 'block' : 'none' }}>
          <Grid container spacing={3} justifyContent='center'>
            <Grid item>
              <IconButton aria-label='delete' onClick={() => handleActions('delete', index)} size='small'>
                <DeleteForeverIcon fontSize='inherit' className='iconButtons' />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton aria-label='edit' onClick={() => handleActions('edit', index)} size='small'>
                <EditIcon fontSize='inherit' className='iconButtons' />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  ));
};

export default EmployeeContactDetails;
