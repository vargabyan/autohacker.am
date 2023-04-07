import React from 'react';
import { Button, Grid, Typography, Box } from '@mui/material';
import ohoto from './images/637627db8024e.jpeg';
import LightTooltip from '../../common/tooltip/LightTooltipStyles';
import { ListItemStyle } from './StyledComponent';

const GoodsList = () => {
  const data = [
    {
      photo: [ohoto],
      win: '5UXCW2C08L9A01059',
      brand: 'BMW',
      mode: 'X7',
      year: '2020',
      mileage: '68,083 mile',
      color: 'Սպիտակ',
      engine: '3000 (սմ³)',
      wd: 'Լիաքարշակ',
      price: '77.000$',
      status: '',
      explanations:
        'Գտնվում է ճանապարհին ! Ավտոմեքենան գնված է ամերիկյան ոչ վթարային մեքենաների համար նախատեսված աճուրդից: Մոդելային 2020թ․, արտադրված է 2019թ․ -ին: Գինը ներառում է բոլոր ծախսերը մինչև ՀՀ , ներառյալ մաքսազերծումը: Հարցերի և մանրամասն տեղեկատվության համար զանգահարել +37444578009:',
    },
    {
      photo: [ohoto],
      win: '5UXCW2C08L9A01059',
      brand: 'BMW',
      mode: 'X7',
      year: '2020',
      mileage: '68,083 mile',
      color: 'Սպիտակ',
      engine: '3000 (սմ³)',
      wd: 'Լիաքարշակ',
      price: '77.000$',
      status: '',
      explanations:
        'Գտնվում է ճանապարհին ! Ավտոմեքենան գնված է ամերիկյան ոչ վթարային մեքենաների համար նախատեսված աճուրդից: Մոդելային 2020թ․, արտադրված է 2019թ․ -ին: Գինը ներառում է բոլոր ծախսերը մինչև ՀՀ , ներառյալ մաքսազերծումը: Հարցերի և մանրամասն տեղեկատվության համար զանգահարել +37444578009:',
    },
    {
      photo: [ohoto],
      win: '5UXCW2C08L9A01059',
      brand: 'BMW',
      mode: 'X7',
      year: '2020',
      mileage: '68,083 mile',
      color: 'Սպիտակ',
      engine: '3000 (սմ³)',
      wd: 'Լիաքարշակ',
      price: '77.000$',
      status: '',
      explanations:
        'Գտնվում է ճանապարհին ! Ավտոմեքենան գնված է ամերիկյան ոչ վթարային մեքենաների համար նախատեսված աճուրդից: Մոդելային 2020թ․, արտադրված է 2019թ․ -ին: Գինը ներառում է բոլոր ծախսերը մինչև ՀՀ , ներառյալ մաքսազերծումը: Հարցերի և մանրամասն տեղեկատվության համար զանգահարել +37444578009:',
    },
    {
      photo: [ohoto],
      win: '5UXCW2C08L9A01059',
      brand: 'BMW',
      mode: 'X7',
      year: '2020',
      mileage: '68,083 mile',
      color: 'Սպիտակ',
      engine: '3000 (սմ³)',
      wd: 'Լիաքարշակ',
      price: '77.000$',
      status: '',
      explanations:
        'Գտնվում է ճանապարհին ! Ավտոմեքենան գնված է ամերիկյան ոչ վթարային մեքենաների համար նախատեսված աճուրդից: Մոդելային 2020թ․, արտադրված է 2019թ․ -ին: Գինը ներառում է բոլոր ծախսերը մինչև ՀՀ , ներառյալ մաքսազերծումը: Հարցերի և մանրամասն տեղեկատվության համար զանգահարել +37444578009:',
    },
    {
      photo: [ohoto],
      win: '5UXCW2C08L9A01059',
      brand: 'BMW',
      mode: 'X7',
      year: '2020',
      mileage: '68,083 mile',
      color: 'Սպիտակ',
      engine: '3000 (սմ³)',
      wd: 'Լիաքարշակ',
      price: '77.000$',
      status: '',
      explanations:
        'Գտնվում է ճանապարհին ! Ավտոմեքենան գնված է ամերիկյան ոչ վթարային մեքենաների համար նախատեսված աճուրդից: Մոդելային 2020թ․, արտադրված է 2019թ․ -ին: Գինը ներառում է բոլոր ծախսերը մինչև ՀՀ , ներառյալ մաքսազերծումը: Հարցերի և մանրամասն տեղեկատվության համար զանգահարել +37444578009:',
    },
    {
      photo: [ohoto],
      win: '5UXCW2C08L9A01059',
      brand: 'BMW',
      mode: 'X7',
      year: '2020',
      mileage: '68,083 mile',
      color: 'Սպիտակ',
      engine: '3000 (սմ³)',
      wd: 'Լիաքարշակ',
      price: '77.000$',
      status: '',
      explanations:
        'Գտնվում է ճանապարհին ! Ավտոմեքենան գնված է ամերիկյան ոչ վթարային մեքենաների համար նախատեսված աճուրդից: Մոդելային 2020թ․, արտադրված է 2019թ․ -ին: Գինը ներառում է բոլոր ծախսերը մինչև ՀՀ , ներառյալ մաքսազերծումը: Հարցերի և մանրամասն տեղեկատվության համար զանգահարել +37444578009:',
    },
    {
      photo: [ohoto],
      win: '5UXCW2C08L9A01059',
      brand: 'BMW',
      mode: 'X7',
      year: '2020',
      mileage: '68,083 mile',
      color: 'Սպիտակ',
      engine: '3000 (սմ³)',
      wd: 'Լիաքարշակ',
      price: '77.000$',
      status: '',
      explanations:
        'Գտնվում է ճանապարհին ! Ավտոմեքենան գնված է ամերիկյան ոչ վթարային մեքենաների համար նախատեսված աճուրդից: Մոդելային 2020թ․, արտադրված է 2019թ․ -ին: Գինը ներառում է բոլոր ծախսերը մինչև ՀՀ , ներառյալ մաքսազերծումը: Հարցերի և մանրամասն տեղեկատվության համար զանգահարել +37444578009:',
    },
  ];

  return (
    <Grid container spacing={1} justifyContent='center'>
      {data.map((index) => (
        <Grid item>
          <ListItemStyle>
            <Box
              sx={{
                background: `url(${index.photo[0]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '216px',
                maxWidth: '329px',
              }}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Grid container justifyContent='end'>
                    <Grid item>
                      <LightTooltip title='Աճուրդում'>
                        <Box
                          className='icon-auction'
                          sx={{
                            width: '36px',
                            height: '36px',
                            fontSize: '25px',
                            color: 'black',
                            background: '#e2e2e2',
                            borderRadius: '5px',
                            opacity: 0.6,
                            display: 'grid',
                            alignContent: 'center',
                            textAlign: 'center',
                            marginTop: '5px',
                            marginRight: '5px',
                          }}
                        />
                      </LightTooltip>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item>
                      <Typography
                        zIndex={99}
                        sx={{
                          color: 'white',
                          marginTop: '86%',
                          marginLeft: '15px',
                          fontWeight: 900,
                        }}
                      >
                        {`${index.brand} ${index.mode} ${index.year}`}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item>
                      <Typography zIndex={99} sx={{ color: 'white', marginLeft: '15px', fontSize: '12px' }}>
                        {index.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Grid container justifyContent='end'>
                    <Grid item>
                      <Button variant='contained' size='small' sx={{ marginRight: '15px', background: '#eb1921' }}>
                        Իմանալ Ավելին
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </ListItemStyle>
        </Grid>
      ))}
    </Grid>
  );
};

export default GoodsList;
