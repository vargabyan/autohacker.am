import React, { useEffect, useState } from 'react';
import { Grid, Typography, Button, TextField, FormHelperText, IconButton, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from 'formik';
import * as yup from 'yup';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useHttpRequest from '../../hook/useHttpRequest/useHttpRequest';

const data = ['facebook', 'instagrem'];

const validationSchema = yup.object({
  site: yup.string().min(1).required(),
  url: yup.string().url().required(),
});

const initialValues = {
  site: '',
  url: '',
};

const AddSocialNetworktitems = () => {
  const auth = useSelector((state) => state.authenticationReducer.value);
  const { t } = useTranslation();
  const [switchState, setSwitchState] = useState(false);
  const [open, setOpen] = useState(false);
  const { responsetData, httpRequest } = useHttpRequest();

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      httpRequest('post', '/admin/social-network', JSON.stringify(values));
    },
  });

  const handelClick = (param) => {
    setSwitchState(!switchState);

    if (param === 'cancel') {
      formik.resetForm();
    }
  };

  const menuItemArr = data.map((index) => (
    <MenuItem value={index} key={index}>
      {index}
    </MenuItem>
  ));

  useEffect(() => {
    if (responsetData.data) {
      formik.resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsetData.data]);

  const formForAdd = (
    <Box className='formBox'>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel size='small' error={Boolean(formik.touched.site) && Boolean(formik.errors.site)}>
                {t('footer.social_networks.select_social_networks')}
              </InputLabel>
              <Select
                label={t('footer.social_networks.select_social_networks')}
                name='site'
                size='small'
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
                value={formik.values.site}
                error={Boolean(formik.touched.site) && Boolean(formik.errors.site)}
                onChange={formik.handleChange}
              >
                <MenuItem value='' />
                {menuItemArr}
              </Select>
              <FormHelperText error={Boolean(formik.touched.site) && Boolean(formik.errors.site)}>
                {formik.touched.site && formik.errors.site}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size='small'
              name='url'
              label={t('footer.social_networks.url')}
              value={formik.values.url}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.url) && Boolean(formik.errors.url)}
              helperText={formik.touched.url && formik.errors.url}
            />
          </Grid>

          <Grid item xs={6} md={12} lg={6}>
            <Button
              size='small'
              onClick={() => handelClick('cancel')}
              color='primary'
              variant='contained'
              fullWidth
              className='buttonColor'
            >
              {t('footer.button.cancel')}
            </Button>
          </Grid>
          <Grid item xs={6} md={12} lg={6}>
            <Button size='small' color='primary' variant='contained' fullWidth type='submit' className='buttonColor'>
              {t('footer.button.save')}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );

  const buttonAdd = (
    <Grid container justifyContent='center' spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent='center'>
          <Grid item>
            <Typography variant='p'>{t('footer.social_networks.add_social_network_items')}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent='center'>
          <Grid item xs={12}>
            <IconButton onClick={handelClick} aria-label='add' size='small'>
              <AddIcon fontSize='inherit' className='iconButtons' />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );

  return (
    <Grid item sx={{ display: auth ? 'block' : 'none' }}>
      <Grid container>
        <Grid item sx={{ display: !switchState ? 'flex' : 'none' }}>
          {buttonAdd}
        </Grid>
        <Grid item sx={{ display: switchState ? 'block' : 'none' }}>
          {formForAdd}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddSocialNetworktitems;
