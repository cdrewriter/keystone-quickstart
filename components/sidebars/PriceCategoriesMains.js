import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
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
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: 8,
    top: 0,
    bottom: 0,
    height: '2.25rem',
    width: '2.25rem',
    borderRadius: '2.25rem',
    backgroundColor: '#efefef',
    border: '4px solid #efefef',
    color: '0000ff66',
    padding: '0.5rem',
  },
}))(Badge);

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

const PriceCategories = ({ priceCategories, activeKey }) => {
  const classes = useStyles();
  const colWidth = { xs: 12, sm: 6, md: 4, lg: 3 };
  const borderColor = 'grey.400';
  const styles = useGutterBorderedGridStyles({ borderColor, height: '80%' });
  const items = [];
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
      <Grid item key={cat.id} xs={12} md={6} lg={4} className={classes.list}>
        <Paper elevation={4} className={classes.paper}>
          <ListItem button className={classes.listitem}>
            <Link href={`/services/${cat.slug}`}>
              {active ? (
                cat.name
              ) : (
                <ListItemText color="primary.main" className={classes.listitemtext} primary={cat.name} />
              )}
            </Link>
            <StyledBadge badgeContent={1423} max={99999} className={classes.badge} p={2} />
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
