import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import EmployeeContactDetails from './EmployeeContactDetails';
import FormForAdd from './FormForAdd';
import useHttpRequest from '../../../hook/useHttpRequest/useHttpRequest';
import CreatePersonContactsStyles from './StyledComponent';

const requestCreatePhoto = async (requestPersonPhoto) => {
  const response = await axios('/admin/person-contact-img', { method: 'post', data: requestPersonPhoto });
  const filename = await response.data.personPhoto;
  return filename;
};

const initialValues = {
  filename: '',
  fullname: { am: '', en: '', ru: '' },
  jobTitle: { am: '', en: '', ru: '' },
  email: '',
  phone: '',
};

const validationSchema = object({
  filename: string(),
  fullname: object({
    am: string().min(2).required(),
    en: string().min(2).required(),
    ru: string().min(2).required(),
  }),
  jobTitle: object({
    am: string().min(2).required(),
    en: string().min(2).required(),
    ru: string().min(2).required(),
  }),
  email: string().email().required(),
  phone: string().min(9).required(),
});

const CreatePersonContacts = () => {
  const [personPhoto, setPersonPhoto] = useState();
  const [requestPersonPhoto, setRequestPersonPhoto] = useState();
  const { responsetData, httpRequest, getRequestFile } = useHttpRequest();
  const { person } = useParams();
  const { i18n } = useTranslation();
  const { language } = i18n;
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      if (person) {
        httpRequest('delete', '/admin/person-contact-img', { filename: formik.values.filename });
        const filename = await requestCreatePhoto(requestPersonPhoto);

        await httpRequest('put', '/admin/person-contact', { ...values, filename });
        navigate(`/${language}/our_team`);
      } else {
        const filename = await requestCreatePhoto(requestPersonPhoto);

        await httpRequest('post', '/admin/person-contact', { ...values, filename });
        navigate(`/${language}/our_team`);
      }
    },
  });

  useEffect(() => {
    if (person) {
      httpRequest('get', `/person-contact/?person=${person}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (person && formik.values.filename) {
      getRequestFile('get', `/our-teame-img/?person=${formik.values.filename}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values.filename]);
  useEffect(() => {
    if (responsetData.data?.person) {
      formik.setValues(() => responsetData.data?.person);
    }
    if (responsetData.file) {
      const { file } = responsetData;

      setPersonPhoto(file);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [responsetData]);

  return (
    <CreatePersonContactsStyles>
      <Grid container justifyContent='center' my={6}>
        <Grid item xs={10}>
          <Grid container justifyContent='center' alignItems='center' spacing={2}>
            <Grid item md={8}>
              <EmployeeContactDetails formik={formik} personPhoto={personPhoto} />
            </Grid>
            <Grid item md={4}>
              <FormForAdd
                formik={formik}
                setPersonPhoto={setPersonPhoto}
                setRequestPersonPhoto={setRequestPersonPhoto}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </CreatePersonContactsStyles>
  );
};

export default CreatePersonContacts;
