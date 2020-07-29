/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Box, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  list: {
    width: '100%',
    maxWidth: 360,
  },
  textinfo: {},
  root: {
    margin: '2rem !important',
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 6px 20px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
    marginLeft: 'auto',
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
      // maxWidth: '42.5%',
    },
  },
  media: {
    width: '88%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: spacing(-3),
    minHeight: '20rem',
    height: 0,
    //paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    [breakpoints.up('md')]: {
      width: '100%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
    '&:after': {
      content: '" "',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      //backgroundImage: 'linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)',
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const BlogCardDemo = React.memo(function BlogCard({ data }) {
  const {
    id,
    name,
    photos,
    categories,
    description,
    pricevalue,
    isEnabled,
    image,
    netweight,
    engine,
    chassis,
  } = data;
  function inHtml() {
    return <div dangerouslySetInnerHTML={{ __html: `${description}` }} />;
  }
  const styles = useStyles();

  const { button: buttonStyles, ...contentStyles } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia className={styles.media} image={photos.publicUrl} />
      <CardContent style={{ minWidth: '50%' }}>
        <TextInfoContent
          className={styles.textinfo}
          overline={isEnabled == true ? 'В наличии' : 'Под заказ'}
          heading={name}
        />
        <List dense>
          <ListItem>
            <ListItemText primary={netweight} secondary={netweight ? 'Грузоподъемность' : null} />
          </ListItem>
          <ListItem>
            <ListItemText primary={engine} secondary={engine ? 'Двигатель' : null} />
          </ListItem>
          <ListItem>
            <ListItemText primary={chassis} secondary={chassis ? 'Шасси' : null} />
          </ListItem>
        </List>
        <Divider />
        <Box style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem 0' }}>
          <Box>
            <Typography component="span" style={{ fontSize: '1rem', color: '#0c1e70' }}>
              Стоимость:
            </Typography>
            <Typography component="span" style={{ fontSize: '2rem', color: '#0c1e70' }}>
              {pricevalue}
            </Typography>
            <Typography component="span" style={{ fontSize: '1rem', color: '#0c1e70' }}>
              {' '}
              р
            </Typography>
          </Box>
          <Button className={buttonStyles}>Подробнее</Button>
        </Box>
      </CardContent>
    </Card>
  );
});

export default BlogCardDemo;
