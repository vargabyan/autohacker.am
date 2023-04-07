import React from 'react';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { IconIoIosCall, IconMdMail } from '../Icons';

const EmployeeContactDetails = ({ formik, personPhoto }) => {
  const { i18n } = useTranslation();
  const { language } = i18n;
  const conditionsIconCall = formik.values.phone ? <IconIoIosCall /> : null;
  const conditionsIconMail = formik.values.phone ? <IconMdMail /> : null;

  return (
    <Grid container>
      <Grid item>
        <Grid container spacing={3} alignItems='center' justifyContent='center'>
          <Grid item sm={6}>
            <img src={personPhoto} alt='' className='photo' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container direction='column' alignItems='center'>
              <Grid item my>
                <Typography variant='h5' fontWeight={900}>
                  {formik.values.fullname[language]}
                </Typography>
              </Grid>
              <Grid item>{formik.values.jobTitle[language]}</Grid>
              <Grid item>
                {conditionsIconCall}
                <a href={`tel:${formik.values.phone}`}>{formik.values.phone}</a>
              </Grid>
              <Grid item>
                {conditionsIconMail}
                <a href={`mailto:${formik.values.email}`}>{formik.values.email}</a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EmployeeContactDetails;
