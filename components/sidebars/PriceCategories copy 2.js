import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { pricecategoryPropTypes } from '../../types/PriceCat';
import { makeStyles } from '@material-ui/core/styles';
import { ListGroup } from 'react-bootstrap';

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
  const items = [];
  for (let i = 0; i < (priceCategories ? priceCategories.length : 0); ++i) {
    const cat = priceCategories[i];
    const active = activeKey === cat.slug;
    items.push(
      <ListItemLink key={cat.id} className={`${active}`} href={`/catalog/${cat.slug}`}>
        {active ? cat.name : <ListItemText primary={cat.name} />}
      </ListItemLink>
    );
  }
  return (
    <ListGroup component="ul" className="post-categories" as="ul">
      {items}
    </ListGroup>
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
