import React from 'react';
import PropTypes from 'prop-types';
import cx from 'clsx';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import ParallaxSlide from '@mui-treasury/components/slide/parallax';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import DotIndicator from '@mui-treasury/components/indicator/dot';
import { makeStyles } from '@material-ui/core/styles';
import { useArrowDarkButtonStyles } from '@mui-treasury/styles/button/arrowDark';

const useStyles = makeStyles(({ palette, breakpoints, spacing }) => ({
  root: {
    // a must if you want to set arrows, indicator as absolute
    position: 'relative',
  },
  slide: {
    perspective: 0, // create perspective
    overflow: 'hidden',
    // relative is a must if you want to create overlapping layers in children
    position: 'relative',
    paddingBottom: '4rem',
    [breakpoints.up('sm')]: {
      paddingBottom: '4rem',
    },
    [breakpoints.up('md')]: {
      paddingTop: spacing(26),
    },
  },
  imageContainer: {
    display: 'block',
    position: 'relative',
    zIndex: 2,
    maxHeight: '90vh',
    minHeight: '45vh',
    //paddingBottom: '30.25%'
  },
  image: {
    display: 'block',
    position: 'absolute',
    zIndex: 10,
    width: '85%',
    height: '85%',
    bottom: '-1rem',
    objectFit: 'contain',
    marginLeft: '12%',
    [breakpoints.up('sm')]: {
      marginLeft: '34%',
    },
  },
  background: {
    position: 'fixed',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    height: '50vh',
    width: '100%',
  },
  arrow: {
    display: 'none',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    [breakpoints.up('sm')]: {
      display: 'inline-flex',
    },
  },
  arrowLeft: {
    left: 0,
    [breakpoints.up('lg')]: {
      left: 64,
    },
  },
  arrowRight: {
    right: 0,
    [breakpoints.up('lg')]: {
      right: 64,
    },
  },
  text: {
    // shared style for text-top and text-bottom
    //fontFamily: 'Poppins, san-serif',
    fontWeight: 700,
    position: 'absolute',
    color: palette.common.white,
    padding: '0 8px',
    transform: 'rotateY(45deg)',
    lineHeight: 1.2,
    [breakpoints.up('sm')]: {
      padding: '0 16px',
    },
    [breakpoints.up('md')]: {
      padding: '0 24px',
    },
  },
  title: {
    top: 220,
    left: '10%',
    height: '40%',
    fontSize: 56,
    zIndex: 1,
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #0d1e70 80%)',
    [breakpoints.up('sm')]: {
      top: 120,
      fontSize: 64,
      left: '-10%',
      zIndex: 9991,
    },
    [breakpoints.up('md')]: {
      top: 180,
      fontSize: 96,
      left: '-10%',
      zIndex: 1,
    },
    [breakpoints.up('lg')]: {
      top: 140,
      fontSize: 96,
      left: '5%',
    },
  },
  subtitle: {
    top: 270,
    padding: '2.5rem',
    left: '-5%',
    maxWidth: '50%',
    height: '',
    overflow: 'hidden',
    whiteSpace: 'inherit',
    textOverflow: 'ellipsis',
    fontSize: 32,
    zIndex: 2,
    background: 'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, #fe450f 80%)',
    [breakpoints.up('sm')]: {
      top: 270,
      left: '-5%',
      fontSize: 36,
      zIndex: 9999,
      maxWidth: '100%',
    },
    [breakpoints.up('md')]: {
      top: 270,
      left: '5%',
      fontSize: 48,
      zIndex: 9999,
      maxWidth: '80vw',
    },
  },
  indicatorContainer: {
    textAlign: 'center',
  },
}));

const ParallaxCarousel = ({ data }) => {
  const classes = useStyles();
  const arrowStyles = useArrowDarkButtonStyles();
  const createStyle = (slideIndex, fineIndex) => {
    const diff = slideIndex - fineIndex;
    if (Math.abs(diff) > 1) return {};
    return {
      transform: `rotateY(${(diff + 1) * 45}deg)`,
    };
  };
  // eslint-disable-next-line react/prop-types
  const renderElements = ({ index, onChangeIndex }) => (
    <>
      <Button
        className={cx(classes.arrow, classes.arrowLeft)}
        classes={arrowStyles}
        disabled={index === 0}
        onClick={() => onChangeIndex(index - 1)}
      >
        <KeyboardArrowLeft />
      </Button>
      <Button
        className={cx(classes.arrow, classes.arrowRight)}
        classes={arrowStyles}
        disabled={index === data.length - 1}
        onClick={() => onChangeIndex(index + 1)}
      >
        <KeyboardArrowRight />
      </Button>
      <div className={classes.indicatorContainer}>
        {data.map(({ id }, i) => (
          <DotIndicator key={id} active={i === index} onClick={() => onChangeIndex(i)} />
        ))}
      </div>
    </>
  );
  const renderChildren = ({ injectStyle, fineIndex }) =>
    data.map(({ id, title, subtitle, image, background }, i) => (
      <div key={id} className={classes.slide}>
        <Typography
          noWrap
          className={cx(classes.text, classes.title)}
          style={{ ...injectStyle(i, 60), ...createStyle(i, fineIndex) }}
        >
          {title}
        </Typography>
        <Typography
          noWrap
          className={cx(classes.text, classes.subtitle)}
          style={{ ...injectStyle(i, 40), ...createStyle(i, fineIndex) }}
        >
          {subtitle}
        </Typography>
        <div className={classes.imageContainer}>
          <img className={classes.image} src={image} alt={'slide'} />
        </div>
        <div className={classes.background}>
          <img className={classes.background} src={background} />
        </div>
      </div>
    ));
  return (
    <div className={classes.root}>
      <ParallaxSlide renderElements={renderElements}>{renderChildren}</ParallaxSlide>
    </div>
  );
};

ParallaxCarousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      subtitle: PropTypes.string,
      image: PropTypes.string,
    })
  ),
};
ParallaxCarousel.defaultProps = {
  data: [],
};

export default ParallaxCarousel;
