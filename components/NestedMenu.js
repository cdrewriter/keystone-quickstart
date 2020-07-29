import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import PropTypes from 'prop-types';
import ExpandMore from '@material-ui/icons/ExpandMore';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import BuildIcon from '@material-ui/icons/Build';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Link from 'next/link';
import InfoIcon from '@material-ui/icons/Info';
import { Divider } from '@material-ui/core';
import PriceCarCategories from './sidebars/PriceCarCategories';
import PriceCategories from './sidebars/PriceCategories';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
  },
  nested: {
    paddingLeft: theme.spacing(2),
  },
  listicon: {
    fontSize: '3rem',
  },
  title_collapsed_sidebar: {
    fontSize: '10rem',
  },
}));

export default function NestedMenu({ carcat, itcat }) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  /*if (opened.pathname === '/catalog') {
    return [open, setOpen];
  };*/
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List component="nav" aria-labelledby="nested-list-subheader" className={classes.root}>
      <ListItem style={{ background: '#fafafa', minHeight: '5rem' }} key="tehnika" button onClick={handleClick}>
        <ListItemIcon className={classes.listicon}>
          <LocalShippingIcon />
        </ListItemIcon>
        <ListItemText style={{ whiteSpace: 'nowrap', fontSize: '50' }} primary="Техника" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Divider />
      <Collapse in={open} style={{ background: 'rgb(255, 255, 255, 0.1)' }} timeout="auto" unmountOnExit>
        <ListItem>
          <List component="div" disablePadding>
            <PriceCarCategories priceCategories={carcat} />
          </List>
        </ListItem>
      </Collapse>
      <Divider />

      <ListItem style={{ background: '#fafafa' }} key="spareparts" button onClick={handleClick}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText style={{ whiteSpace: 'nowrap' }} primary="Запасные части" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Divider />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItem>
          <List component="div" disablePadding>
            <PriceCategories priceCategories={itcat} />
          </List>
        </ListItem>
      </Collapse>
      <Divider />
      <ListItem style={{ background: '#fafafa' }} button>
        <ListItemIcon>
          <BuildIcon />
        </ListItemIcon>
        <Link href="/services">
          <ListItemText primary="Сервис" />
        </Link>
      </ListItem>
      <Divider />
      <ListItem style={{ background: '#fafafa' }}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <Link href="/">
          <ListItemText variant="subtitle1" primary="Контакты" />
        </Link>
      </ListItem>
    </List>
  );
}

NestedMenu.propTypes = {
  carcat: PropTypes.any,
  itcat: PropTypes.any,
};
