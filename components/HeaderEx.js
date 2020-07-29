import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { isWidthUp } from '@material-ui/core/withWidth';

import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import TabMenu from './mTabs.js';

import Logo from './logo';
import shadows from '@material-ui/core/styles/shadows';
import Langswitcher from './langswitcher';
import Hidden from '@material-ui/core/Hidden';

const styles = ({ spacing, transitions, breakpoints, palette, shape }) => ({
  header: {
    fontWeight: 900,
    minWidth: 0,
    fontSize: 18,
    [breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    marginRight: 8,
    borderRadius: shape.borderRadius,
    background: palette.grey[200],
    '&:hover': {
      background: palette.grey[300],
    },
    marginLeft: 0,
    width: '100%',
    [breakpoints.up('sm')]: {
      marginLeft: spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: spacing(9),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: '64px',
    overflow: 'visible',
    position: 'relative',
    display: 'flex',
    boxShadow: shadows[12],
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  flags: {
    marginLeft: '2rem',
    minHeight: '4rem',
    display: 'flex',
    alignItems: 'center',
  },
  tabmenu: {
    display: 'flex',
    alignSelf: 'flex-end',
    paddingLeft: spacing(10),
    [breakpoints.down('md')]: {
      display: 'none',
    },
  },
  inputInput: {
    borderRadius: 4,
    paddingTop: spacing(1),
    paddingRight: spacing(1),
    paddingBottom: spacing(1),
    paddingLeft: spacing(10),
    transition: transitions.create('width'),
    width: '100%',
    [breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
});

const HeaderEx = ({ classes, screen }) => (
  <ThemeProvider theme={createMuiTheme}>
    <div className={classes.logo}>
      <Logo />
    </div>

    <div className={classes.tabmenu}>
      <TabMenu />
    </div>

    <div className={classes.grow} />
    <div className={classes.phone}>
      <IconButton>
        <Icon>phone</Icon>
      </IconButton>
      <Typography noWrap color={'textSecondary'} variant="caption" className={classes.header}>
        +7 (351) 777 78 65
      </Typography>
    </div>
    {/* <div className={classes.flags}>
     <Langswitcher />

</div>*/}

    {screen === 'xs' && (
      <IconButton>
        <Icon>more_vert</Icon>
      </IconButton>
    )}
    {screen === 'sm' && (
      <>
        <IconButton>
          <Icon>favorite</Icon>
        </IconButton>
        <IconButton>
          <Icon>more_vert</Icon>
        </IconButton>
      </>
    )}
    {isWidthUp('md', screen) && (
      <>
        <IconButton>
          <Icon>favorite</Icon>
        </IconButton>
        <IconButton>
          <Icon>phone</Icon>
        </IconButton>
        <IconButton>
          <Icon>camera</Icon>
        </IconButton>
      </>
    )}
  </ThemeProvider>
);

HeaderEx.propTypes = {
  screen: PropTypes.string,
  classes: PropTypes.shape({}).isRequired,
};
HeaderEx.defaultProps = {
  screen: null,
};

export default withStyles(styles)(HeaderEx);
