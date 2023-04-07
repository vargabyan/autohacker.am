import React, { useEffect, useState } from 'react';
import {
  Grid,
  Typography,
  Button,
  TextField,
  IconButton,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import useHttpRequest from '../../hook/useHttpRequest/useHttpRequest';

const initialValues = {
  address: {
    am: '',
    en: '',
    ru: '',
  },
  email: '',
  phone: '',
};

const validationSchema = yup.object({
  address: yup.object({
    am: yup.string().min(2).required(),
    en: yup.string().min(2).required(),
    ru: yup.string().min(2).required(),
  }),
  email: yup.string().email().required(),
  phone: yup.string().min(9).required(),
});

const AddContactitems = ({ updataContact }) => {
  const auth = useSelector((state) => state.authenticationReducer.value);
  const { responsetData, httpRequest } = useHttpRequest();
  const [switchState, setSwitchState] = useState(false);
  const [selectLanguage, setSelectLanguage] = useState('am');
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit(values) {
      if (values._id) {
        httpRequest('put', '/admin/contact', JSON.stringify(values));
      } else {
        httpRequest('post', '/admin/contact', JSON.stringify(values));
      }
    },
  });

  const handleSelectChange = (e) => {
    const { value } = e.target;

    setSelectLanguage(value);
  };

  const handleOpenClose = () => {
    setOpen((values) => !values);
  };

  const handleChange = (e) => {
    const { value } = e.target;

    formik.setValues((values) => {
      const { address } = values;
      address[selectLanguage] = value;

      return { ...values, address };
    });
  };

  const handelActions = (param) => {
    setSwitchState((item) => !item);
    if (param === 'cancel') {
      formik.resetForm();
    }
  };

  useEffect(() => {
    if (updataContact?.contact) {
      formik.setValues(() => updataContact.contact);
      handelActions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updataContact]);
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
              <InputLabel size='small'>{t('footer.contacts.select_language')}</InputLabel>
              <Select
                size='small'
                open={open}
                onClose={handleOpenClose}
                onOpen={handleOpenClose}
                value={selectLanguage}
                label={t('footer.contacts.select_language')}
                onChange={handleSelectChange}
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
              name='address'
              label={t('footer.contacts.address')}
              value={formik.values.address[selectLanguage]}
              onChange={handleChange}
              error={
                Boolean(formik.touched.address?.[selectLanguage]) && Boolean(formik.errors.address?.[selectLanguage])
              }
              helperText={formik.touched.address?.[selectLanguage] && formik.errors.address?.[selectLanguage]}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              size='small'
              name='email'
              label={t('footer.contacts.email')}
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
              label={t('footer.contacts.phone')}
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={Boolean(formik.touched.phone) && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
          </Grid>
          <Grid item xs={6} md={12} lg={6}>
            <Button
              size='small'
              onClick={() => handelActions('cancel')}
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
            <Typography variant='p'>{t('footer.contacts.add_contact_items')}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container justifyContent='center'>
          <Grid item xs={12}>
            <IconButton onClick={handelActions} aria-label='add' size='small'>
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

export default AddContactitems;
