import React from 'react';
import { Grid, Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Logo from './logo';

const FooterEx = () => (
  <Box style={{ margin: '1rem' }}>
    <Divider style={{ margin: '24px auto', width: 60 }} />
    <Grid container justify={'center'} className="footer">
      <Grid item xs={12} sm={6} md={3}>
        <Logo />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" align={'left'} gutterBottom color={'textSecondary'}>
          Техника
        </Typography>
        <Divider />

        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Typography variant="subtitle1">Нас стоянке</Typography>
          </li>
          <li>
            <Typography variant="subtitle1">Заказать </Typography>
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" align={'left'} gutterBottom color={'textSecondary'}>
          Запасные части
        </Typography>
        <Divider />
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Typography variant="subtitle1">Каталог</Typography>
          </li>
          <li>
            <Typography variant="subtitle1">Сделать заявку</Typography>
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography variant="h6" align={'left'} gutterBottom color={'textSecondary'}>
          Сервис
        </Typography>
        <Divider />
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li>
            <Typography variant="subtitle1">Тех. обслуживание</Typography>
          </li>
          <li>
            <Typography variant="subtitle1">Переоборудование</Typography>
          </li>
          <li>
            <Typography variant="subtitle1">Ремонт агрегатов</Typography>
          </li>
        </ul>
      </Grid>
    </Grid>
  </Box>
);

FooterEx.propTypes = {};
FooterEx.defaultProps = {};

export default FooterEx;
