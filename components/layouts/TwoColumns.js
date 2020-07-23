import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Container, Row, Col } from 'react-bootstrap';

const TwoColumns = ({ children, aside, className }) => {
  return (
    <Container className={classNames('two-columns', className)}>
      <Row>
        <Col md={12} lg={8}>
          {children}
        </Col>
        <Col md={12} lg={4}>
          {aside}
        </Col>
      </Row>
    </Container>
  );
};

TwoColumns.propTypes = {
  children: PropTypes.any,
  aside: PropTypes.any,
  className: PropTypes.string,
};

export default TwoColumns;
