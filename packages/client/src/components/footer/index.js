import React, { useState } from 'react';
import { Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import FooterStyle from './StyledComponent';
import AddSocialNetworktitems from './AddSocialNetworktitems';
import AddContactitems from './AddContactitems';
import ContactItems from './ContactItems';
import SocialNetworkItems from './SocialNetworkItems';

const Footer = () => {
  const { t } = useTranslation();
  const [updataContact, setUpdataContact] = useState();

  return (
    <FooterStyle>
      <Grid container>
        <Grid item xs={12} sm={6} md={4} className='backgroundGrid'>
          <div />
        </Grid>
        <Grid item xs={12} sm={6} md={8} p={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography>{t('footer.header')}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item sm={12} md={9}>
                  <Grid container spacing={2}>
                    <ContactItems setUpdataContact={setUpdataContact} />
                    <AddContactitems updataContact={updataContact} />
                  </Grid>
                </Grid>
                <Grid item sm={12} md={3}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      {t('footer.social_networks.header')}
                    </Grid>
                    <Grid item xs={12}>
                      <Grid container spacing={2}>
                        <SocialNetworkItems />
                        <AddSocialNetworktitems />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </FooterStyle>
  );
};

export default Footer;
