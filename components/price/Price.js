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
import Paper from '@material-ui/core/Paper';
//import './ExpandedPostItem.scss';
import PriceItem from './PriceItem

const Price = ({ data }) => {
  console.log(data);
  return (
    <>
      <TableContainer component={Paper} key="alls">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Наименование</TableCell>
              <TableCell>Артикул</TableCell>
              <TableCell align="right">Цена</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <PriceItem post={data} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

Price.propTypes = {
  post: PropTypes.shape(pricePropTypes).isRequired,
  data: PropTypes.any,
};

export default Price;
