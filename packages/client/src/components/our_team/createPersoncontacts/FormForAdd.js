import React, { useState } from 'react';
import { Grid, Button, TextField, Box, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const FormForAdd = ({ formik, setPersonPhoto, setRequestPersonPhoto }) => {
  const [selectLanguage, setSelectLanguage] = useState('am');
  const [open, setOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { language } = i18n;
  const navigate = useNavigate();

  const handelCancel = () => {
    formik.resetForm();
    navigate(`/${language}/our_team`);
    setPersonPhoto();
  };

  const handleSelectChange = (e) => {
    const { value } = e.target;

    setSelectLanguage(value);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;

    formik.setValues((values) => {
      const newState = values;
      newState[name][selectLanguage] = value;

      return newState;
    });
  };

  const handleUpload = async (e) => {
    const { files } = e.target;
    const file = await files[0];

    const uploadData = new FormData();

    uploadData.append('photo', file, file.name);
    setRequestPersonPhoto(uploadData);

    const reader = new FileReader();
    reader.onload = () => {
      setPersonPhoto(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleOpenClose = () => {
    setOpen((values) => !values);
  };

  return (
    <Box className='formBox'>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Button
              fullWidth
              variant='outlined'
              component='label'
              className={
                Boolean(formik.errors.photo) && Boolean(formik.touched.photo)
                  ? 'uploadButtonDangerous'
                  : 'uploadButtonUsually'
              }
            >
              <input hidden type='file' onChange={handleUpload} accept='image/png, image/jpeg, image/jpg' />
              {t('our_team.add_new_Employee_contacts.photo')}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel size='small'>{t('our_team.add_new_Employee_contacts.select_language')}</InputLabel>
              <Select
                size='small'
                open={open}
                onClose={handleOpenClose}
                onOpen={handleOpenClose}
                value={selectLanguage}
                label={t('our_team.add_new_Employee_contacts.select_language')}
                onChange={handleSelectChange}
                error={
                  (Boolean(formik.errors.fullname?.am) && Boolean(formik.touched.fullname?.am)) ||
                  (Boolean(formik.errors.jobTitle?.am) && Boolean(formik.touched.jobTitle?.am)) ||
                  (Boolean(formik.errors.fullname?.en) && Boolean(formik.touched.fullname?.en)) ||
                  (Boolean(formik.errors.jobTitle?.en) && Boolean(formik.touched.jobTitle?.en)) ||
                  (Boolean(formik.errors.fullname?.ru) && Boolean(formik.touched.fullname?.ru)) ||
                  (Boolean(formik.errors.jobTitle?.ru) && Boolean(formik.touched.jobTitle?.ru))
                }
              >
                <MenuItem value='am'>հա</MenuItem>
                <MenuItem value='en'>en</MenuItem>
                <MenuItem value='ru'>ру</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size='small'
              name='fullname'
              label={t('our_team.add_new_Employee_contacts.select_language')}
              value={formik.values.fullname[selectLanguage]}
              onChange={handleChange}
              error={
                Boolean(formik.touched.fullname?.[selectLanguage]) && Boolean(formik.errors.fullname?.[selectLanguage])
              }
              helperText={formik.touched.fullname?.[selectLanguage] && formik.errors.fullname?.[selectLanguage]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size='small'
              name='jobTitle'
              label={t('our_team.add_new_Employee_contacts.job_title')}
              value={formik.values.jobTitle[selectLanguage]}
              onChange={handleChange}
              error={
                Boolean(formik.touched.jobTitle?.[selectLanguage]) && Boolean(formik.errors.jobTitle?.[selectLanguage])
              }
              helperText={formik.touched.jobTitle?.[selectLanguage] && formik.errors.jobTitle?.[selectLanguage]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size='small'
              name='email'
              label={t('our_team.add_new_Employee_contacts.email')}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.email) && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size='small'
              name='phone'
              label={t('our_team.add_new_Employee_contacts.phone')}
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.phone) && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={6} md={12} lg={6}>
            <Button
              size='small'
              onClick={handelCancel}
              color='primary'
              variant='contained'
              fullWidth
              className='ActionsButton'
            >
              {t('our_team.button.cancel')}
            </Button>
          </Grid>
          <Grid item xs={6} md={12} lg={6}>
            <Button size='small' color='primary' variant='contained' fullWidth type='submit' className='ActionsButton'>
              {t('our_team.button.save')}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default FormForAdd;
