import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { pricePropTypes } from '../../types';
import { Image } from 'react-bootstrap';

//import './ExpandedPostItem.scss';

const PriceItem = ({ post }) => {
  /*const { id, name, slug, pricevalue, categories, art } = post;
  const href = `/catalog/${categories.slug}`;*/
  const cells = [];
  for (let i = 0; i < (post ? post.length : 0); ++i) {
    const cat = post[i];
    cells.push(
      <TableRow key={cat.id}>
        <>
          <TableCell>{cat.name}</TableCell>
          <TableCell>{cat.art}</TableCell>
          <TableCell align="right">{cat.pricevalue}</TableCell>
        </>
      </TableRow>
    );
  }
  return cells;
};

PriceItem.propTypes = {
  post: PropTypes.shape(pricePropTypes).isRequired,
};

export default PriceItem;
