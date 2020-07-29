import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Box, Container } from '@material-ui/core';

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
  SvgIcon: {},
}));

const BlockHead = (props) => {
  const styles = useStyles(props);

  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" alignItems="left" justifyContent="start" p={1} m={1}>
      {props.children}
      <Typography
        variant="h4"
        component="h1"
        style={{ lineHeight: 1, textTransform: 'uppercase', marginBottom: '1rem' }}
        color="primary"
      >
        {props.heading}
      </Typography>
      <Typography variant="subtitle1" color="secondary" display="inline">
        {props.subheading}
      </Typography>
    </Box>
  );
};

export default BlockHead;
