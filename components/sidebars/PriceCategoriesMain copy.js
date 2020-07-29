import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { pricecategoryPropTypes } from '../../types/PriceCat';
import { makeStyles } from '@material-ui/core/styles';
import { ListGroup } from 'react-bootstrap';
import { Row, Item } from '@mui-treasury/components/flex';
import { Info, InfoTitle, InfoSubtitle, InfoCaption } from '@mui-treasury/components/info';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import { usePopularInfoStyles } from '@mui-treasury/styles/info/popular';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import { Button, Paper } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '440px',
  },
  iconlogo: {
    position: 'relative',
  },
  list: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  listitem: {
    flex: '1 20rem',
    minWidth: '25rem',
  },
  'listitem:nthChild(3n)': {
    borderLeft: '1px solid grey',
  },
  Icon: {
    root: {
      '& > .fa': {
        margin: theme.spacing(2),
      },
    },
  },
}));
function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const PriceCategories = ({ priceCategories, activeKey }) => {
  const classes = useStyles();
  const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
  const borderColor = 'grey.300';
  const styles = useGutterBorderedGridStyles({ borderColor, height: '80%' });
  const items = [

  ];
  for (let i = 0; i < (priceCategories ? priceCategories.length : 0); ++i) {
    const cat = priceCategories[i];
    const active = activeKey === cat.slug;
    const avatarStyles = useDynamicAvatarStyles({
      height: 24,
      width: 12,
      radius: 8,
      maxWidth: '1rem',
    });
    items.push(
      <Grid key={i} item {...colWidth} classes={styles}>
        <ListItemLink key={cat.id} active={active} href={`/catalog/${cat.slug}`}>
          <Row gap={0}>
            {/*<Item>
              <Button classes={avatarStyles}>
                <FontAwesomeIcon color="#cacaca" size="1x" icon={faDotCircle} />
              </Button>
            </Item>*/}
            <Info useStyles={usePopularInfoStyles}>
              <InfoTitle>{active ? cat.name : <ListItemText primary={cat.name} />}</InfoTitle>
              <InfoCaption>1423 ед.</InfoCaption>
            </Info>
          </Row>
        </ListItemLink>
      </Grid>
    );
  }
  return (
    <Paper elevation={2}>
      <Grid container className="post-categories">
        {items}
      </Grid>
      </Paper>
  );
};

PriceCategories.propTypes = {
  activeKey: PropTypes.string,
  priceCategories: PropTypes.arrayOf(PropTypes.shape(pricecategoryPropTypes)),
};
PriceCategories.defaultProps = {
  activeKey: '',
};
export default PriceCategories;
