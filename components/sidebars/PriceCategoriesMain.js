import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { pricecategoryPropTypes } from '../../types/PriceCat';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    minHeight: '440px',
  },
  iconlogo: {
    position: 'relative',
  },
  paper: {
    minWidth: '100%',
  },
  badge: {},
  list: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  listitemtext: {
    flex: 1,
    marginRight: '1rem',
    fontWeight: 500,
  },
  listitem: {
    minHeight: '5rem',
    height: '100%',
  },
  'listitem:nthChild(3n)': {
    borderLeft: '2px solid blue',
  },
  Icon: {
    root: {
      '& > .fa': {
        margin: theme.spacing(2),
      },
    },
  },
}));

const PriceCategories = ({ priceCategories, activeKey }) => {
  const classes = useStyles();
  const items = [];
  for (let i = 0; i < (priceCategories ? priceCategories.length : 0); ++i) {
    const cat = priceCategories[i];
    const active = activeKey === cat.slug;
    items.push(
      <Grid item key={cat.id} xs={12} md={6} lg={4} className={classes.list}>
        <Paper elevation={4} className={classes.paper}>
          <ListItem button className={classes.listitem}>
            <Link href={`/catalog/${cat.slug}`} slug={cat.id}>
              {active ? (
                cat.name
              ) : (
                <ListItemText color="primary.main" className={classes.listitemtext} primary={cat.name} />
              )}
            </Link>
          </ListItem>
        </Paper>
      </Grid>
    );
  }
  return (
    <Grid container justify="space-evenly" spacing={4} direction="row" alignItems="stretch" className="post-categories">
      {items}
    </Grid>
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
