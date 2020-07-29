/* eslint-disable no-unused-vars */
/** @jsx jsx */
import { jsx } from '@emotion/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Select from './forms/Select';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    '& > svg': {
      margin: theme.spacing(2),
      widdth: theme.spacing(4),
      height: theme.spacing(4),
    },
  },
  center: {
    margin: 'auto',
  },
  iconlogo: {
    display: 'flex',
    flexWrap: 'nowrap',
  },

  bbtn: {
    minWidth: '16rem',
    minHeight: '3.rem',
  },
}));
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path
        d="M28.571,9V.429a4.275,4.275,0,0,0-4.286-4.286H17.143V-19.571A1.433,1.433,0,0,0,15.714-21H12.857a1.433,1.433,0,0,0-1.429,1.429V-3.857H4.286A4.275,4.275,0,0,0,0,.429V9a4.275,4.275,0,0,0,4.286,4.286h7.143V69a1.433,1.433,0,0,0,1.429,1.429h2.857A1.433,1.433,0,0,0,17.143,69V13.286h7.143A4.275,4.275,0,0,0,28.571,9ZM22.857,7.571H5.714V1.857H22.857ZM50,36.143H42.857V-19.571A1.433,1.433,0,0,0,41.429-21H38.571a1.433,1.433,0,0,0-1.429,1.429V36.143H30a4.275,4.275,0,0,0-4.286,4.286V49A4.275,4.275,0,0,0,30,53.286h7.143V69a1.433,1.433,0,0,0,1.429,1.429h2.857A1.433,1.433,0,0,0,42.857,69V53.286H50A4.275,4.275,0,0,0,54.286,49V40.429A4.275,4.275,0,0,0,50,36.143ZM48.571,47.571H31.429V41.857H48.571Zm27.143-40H68.571V-19.571A1.433,1.433,0,0,0,67.143-21H64.286a1.433,1.433,0,0,0-1.429,1.429V7.571H55.714a4.275,4.275,0,0,0-4.286,4.286v8.571a4.275,4.275,0,0,0,4.286,4.286h7.143V69a1.433,1.433,0,0,0,1.429,1.429h2.857A1.433,1.433,0,0,0,68.571,69V24.714h7.143A4.275,4.275,0,0,0,80,20.429V11.857A4.275,4.275,0,0,0,75.714,7.571ZM74.286,19H57.143V13.286H74.286Z"
        transform="translate(0 21)"
      />
    </SvgIcon>
  );
}
const Formdata = (props) => {
  const classes = useStyles();
  return (
    <form className={classes.root} css={{ display: 'flex' }} noValidate autoComplete="off" spacing={20}>
      <Grid container spacing={2} direction="row" justify="center" alignItems="stretch">
        <Grid item lg={4} md={8}>
          <Box
            display="flex"
            flexDirection="column"
            height="75%"
            alignItems="center"
            justifyContent="space-evenly"
            p={1}
            m={1}
          >
            <div className={classes.iconlogo}>
              <HomeIcon style={{ fontSize: '4rem', marginRight: '2rem', color: grey[400] }} viewBox="0 0 80 91.429" />
              <div>
                <Typography variant="h4" style={{ lineHeight: 1, textTransform: 'uppercase' }} color="primary">
                  Техника под заказ
                </Typography>
                <Typography variant="subtitle1" color="secondary" display="inline">
                  по вашим требованиям
                </Typography>
                <Box py={2}>
                  <Typography variant="subtitle2" fontSize="small" style={{ lineHeight: 1, paddingBottom: '0.5rem' }}>
                    У нас есть все разрешения и документы для переоборудования автомобилей.
                  </Typography>
                  <Typography variant="subtitle2" style={{ lineHeight: 1 }}>
                    Заполните форму и мы начнем подбирать Вам технику
                  </Typography>
                </Box>
              </div>
            </div>
          </Box>
        </Grid>
        <Grid item lg={4}>
          <Grid container spacing={2}>
            <Grid sm={6} item>
              <Select label="Тип кузова" />
            </Grid>
            <Grid sm={6} item>
              <Select label="Год выпуска " />
            </Grid>
            <Grid item xs={12}>
              <TextField
                css={{
                  minWidth: '100%',
                }}
                id="outlined-multiline-static"
                label="Подробнее"
                multiline
                rows={4}
                placeholder="Требования к технике, подробнее раскажите... "
                defaultValue=""
                variant="outlined"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={4}>
          <Box
            className={classes.center}
            display="flex"
            flexDirection="column"
            height="75%"
            alignItems="center"
            justifyContent="space-evenly"
            p={1}
            m={1}
            bgcolor="background.paper"
          >
            <Box m={4}>
              <Button variant="contained" size="large" className={classes.bbtn} color="secondary" disableElevation>
                ОТПРАВИТЬ ЗАЯВКУ
              </Button>
            </Box>
            <Box m={2}>
              <Typography variant="body1">или свяжитесь с нами по телефону</Typography>
            </Box>
            <Box className={classes.phone}>
              <Typography noWrap color={'textPrimary'} variant="h4" className={classes.header}>
                +7 (351) 777 78 65
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </form>
  );
};

export default Formdata;
