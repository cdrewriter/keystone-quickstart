import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
// Create a theme instance.
import SFBoldwoff2 from './SFProDisplayBold.woff2';
import SFBoldwoff from './SFProDisplayBold.woff';
import SFRegwoff2 from './SFProDisplayRegular.woff2';
import SFRegwoff from './SFProDisplayRegular.woff';
const SFBold = {
  fontFamily: 'SF Pro Display',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
    local('SFBold'),
    local('SFBold'),
    url(${SFBoldwoff2}) format('woff2'),
    url(${SFBoldwoff}) format('woff')
  `,
};
const SFReg = {
  fontFamily: 'SF Pro Display',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('SFReg'),
    local('SFReg'),
    url(${SFRegwoff2}) format('woff2'),
    url(${SFRegwoff}) format('woff')
  `,
};
const theme = responsiveFontSizes(
  createMuiTheme({
    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      values: { xs: 0, lg: 1280, sm: 600, xl: 1920, md: 960 },
    },
    mixins: {
      toolbar: {
        minHeight: 56,
        '@media (min-width:0px) and (orientation: landscape)': {
          minHeight: 48,
        },
        '@media (min-width:600px)': { minHeight: 64 },
      },
    },
    shadows: [
      'none',
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
      '0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
      '0px 1px 8px 0px rgba(0, 0, 0, 0.2),0px 3px 4px 0px rgba(0, 0, 0, 0.14),0px 3px 3px -2px rgba(0, 0, 0, 0.12)',
      '0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)',
      '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 5px 8px 0px rgba(0, 0, 0, 0.14),0px 1px 14px 0px rgba(0, 0, 0, 0.12)',
      '0px 3px 5px -1px rgba(0, 0, 0, 0.2),0px 6px 10px 0px rgba(0, 0, 0, 0.14),0px 1px 18px 0px rgba(0, 0, 0, 0.12)',
      '0px 4px 5px -2px rgba(0, 0, 0, 0.2),0px 7px 10px 1px rgba(0, 0, 0, 0.14),0px 2px 16px 1px rgba(0, 0, 0, 0.12)',
      '0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0, 0, 0, 0.12)',
      '0px 5px 6px -3px rgba(0, 0, 0, 0.2),0px 9px 12px 1px rgba(0, 0, 0, 0.14),0px 3px 16px 2px rgba(0, 0, 0, 0.12)',
      '0px 6px 6px -3px rgba(0, 0, 0, 0.2),0px 10px 14px 1px rgba(0, 0, 0, 0.14),0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
      '0px 6px 7px -4px rgba(0, 0, 0, 0.2),0px 11px 15px 1px rgba(0, 0, 0, 0.14),0px 4px 20px 3px rgba(0, 0, 0, 0.12)',
      '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 12px 17px 2px rgba(0, 0, 0, 0.14),0px 5px 22px 4px rgba(0, 0, 0, 0.12)',
      '0px 7px 8px -4px rgba(0, 0, 0, 0.2),0px 13px 19px 2px rgba(0, 0, 0, 0.14),0px 5px 24px 4px rgba(0, 0, 0, 0.12)',
      '0px 7px 9px -4px rgba(0, 0, 0, 0.2),0px 14px 21px 2px rgba(0, 0, 0, 0.14),0px 5px 26px 4px rgba(0, 0, 0, 0.12)',
      '0px 8px 9px -5px rgba(0, 0, 0, 0.2),0px 15px 22px 2px rgba(0, 0, 0, 0.14),0px 6px 28px 5px rgba(0, 0, 0, 0.12)',
      '0px 8px 10px -5px rgba(0, 0, 0, 0.2),0px 16px 24px 2px rgba(0, 0, 0, 0.14),0px 6px 30px 5px rgba(0, 0, 0, 0.12)',
      '0px 8px 11px -5px rgba(0, 0, 0, 0.2),0px 17px 26px 2px rgba(0, 0, 0, 0.14),0px 6px 32px 5px rgba(0, 0, 0, 0.12)',
      '0px 9px 11px -5px rgba(0, 0, 0, 0.2),0px 18px 28px 2px rgba(0, 0, 0, 0.14),0px 7px 34px 6px rgba(0, 0, 0, 0.12)',
      '0px 9px 12px -6px rgba(0, 0, 0, 0.2),0px 19px 29px 2px rgba(0, 0, 0, 0.14),0px 7px 36px 6px rgba(0, 0, 0, 0.12)',
      '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 20px 31px 3px rgba(0, 0, 0, 0.14),0px 8px 38px 7px rgba(0, 0, 0, 0.12)',
      '0px 10px 13px -6px rgba(0, 0, 0, 0.2),0px 21px 33px 3px rgba(0, 0, 0, 0.14),0px 8px 40px 7px rgba(0, 0, 0, 0.12)',
      '0px 10px 14px -6px rgba(0, 0, 0, 0.2),0px 22px 35px 3px rgba(0, 0, 0, 0.14),0px 8px 42px 7px rgba(0, 0, 0, 0.12)',
      '0px 11px 14px -7px rgba(0, 0, 0, 0.2),0px 23px 36px 3px rgba(0, 0, 0, 0.14),0px 9px 44px 8px rgba(0, 0, 0, 0.12)',
      '0px 11px 15px -7px rgba(0, 0, 0, 0.2),0px 24px 38px 3px rgba(0, 0, 0, 0.14),0px 9px 46px 8px rgba(0, 0, 0, 0.12)',
    ],
    direction: 'ltr',
    overrides: {
      MuiCssBaseline: {
        '@global': {
          '@font-face': [SFReg],
        },
      },
    },
    transitions: {
      easing: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
      duration: {
        standard: 300,
        short: 250,
        enteringScreen: 225,
        shorter: 200,
        leavingScreen: 195,
        shortest: 150,
        complex: 375,
      },
    },
    typography: {
      headline: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontFamily: '"SF Pro Display"',
        lineHeight: '1.35417em',
        fontSize: '1.5rem',
        fontWeight: 400,
      },
      display2: {
        marginLeft: '-.02em',
        color: 'rgba(0, 0, 0, 0.54)',
        fontFamily: '"SF Pro Display"',
        lineHeight: '1.13333em',
        fontSize: '2.8125rem',
        fontWeight: 400,
      },
      display3: {
        marginLeft: '-.02em',
        color: 'rgba(0, 0, 0, 0.54)',
        fontFamily: '"SF Pro Display"',
        letterSpacing: '-.02em',
        lineHeight: '1.30357em',
        fontSize: '3.5rem',
        fontWeight: 400,
      },
      display4: {
        marginLeft: '-.04em',
        color: 'rgba(0, 0, 0, 0.54)',
        fontFamily: '"SF Pro Display"',
        letterSpacing: '-.04em',
        lineHeight: '1.14286em',
        fontSize: '7rem',
        fontWeight: 400,
      },
      fontWeightRegular: 400,
      display1: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontFamily: '"SF Pro Display"',
        lineHeight: '1.20588em',
        fontSize: '2.125rem',
        fontWeight: 400,
      },
      button: {
        textTransform: 'uppercase',
        color: 'rgba(0, 0, 0, 0.87)',
        fontFamily: '"SF Pro Display"',
        fontSize: '0.875rem',
        fontWeight: 500,
      },
      fontFamily: 'SF Pro Display',
      body2: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontFamily: '"SF Pro Display"',
        lineHeight: '1.71429em',
        fontSize: '0.875rem',
        fontWeight: 500,
      },
      caption: {
        color: 'rgba(0, 0, 0, 0.54)',
        fontFamily: '"SF Pro Display"',
        lineHeight: '1.375em',
        fontSize: '0.75rem',
        fontWeight: 400,
      },
      fontSize: 14,
      fontWeightMedium: 500,
      title: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontFamily: '"SF Pro Display"',
        lineHeight: '1.16667em',
        fontSize: '1.3125rem',
        fontWeight: 500,
      },
      subheading: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontFamily: '"SF Pro Display"',
        lineHeight: '1.5em',
        fontSize: '1rem',
        fontWeight: 400,
      },
      body1: {
        color: 'rgba(0, 0, 0, 0.87)',
        fontFamily: '"SF Pro Display"',
        lineHeight: '1.46429em',
        fontSize: '0.875rem',
        fontWeight: 400,
      },
    },
    zIndex: {
      modal: 1300,
      snackbar: 1400,
      drawer: 1200,
      appBar: 1100,
      mobileStepper: 1000,
      tooltip: 1500,
    },
    shape: { borderRadius: 4 },
    props: {},

    palette: {
      tonalOffset: 0.2,
      background: { paper: '#fff', default: '#f5f5f5' },
      contrastThreshold: 3,
      grey: {
        '50': '#fafafa',
        '100': '#f5f5f5',
        '200': '#eeeeee',
        '300': '#e0e0e0',
        '400': '#bdbdbd',
        '500': '#9e9e9e',
        '600': '#757575',
        '700': '#616161',
        '800': '#424242',
        '900': '#212121',
        A700: '#616161',
        A100: '#d5d5d5',
        A400: '#303030',
        A200: '#aaaaaa',
      },
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
        hint: 'rgba(0, 0, 0, 0.38)',
      },
      divider: 'rgba(0, 0, 0, 0.12)',
      secondary: {
        main: '#FF4E00',
        light: 'rgb(255, 113, 51)',
        dark: 'rgb(178, 54, 0)',
        contrastText: '#f5ffff',
      },
      common: { black: '#000', white: '#fff' },
      error: {
        light: '#e57373',
        main: '#f44336',
        dark: '#d32f2f',
        contrastText: '#fff',
      },
      type: 'light',
      action: {
        hoverOpacity: 0.08,
        hover: 'rgba(0, 0, 0, 0.08)',
        selected: 'rgba(0, 0, 0, 0.14)',
        disabledBackground: 'rgba(0, 0, 0, 0.12)',
        disabled: 'rgba(0, 0, 0, 0.26)',
        active: 'rgba(0, 0, 0, 0.54)',
      },
      primary: {
        main: '#0D1E70',
        light: 'rgb(61, 75, 140)',
        dark: 'rgb(9, 21, 78)',
        contrastText: '#fff',
      },
    },
  })
);

export default theme;
