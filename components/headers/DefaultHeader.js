import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import DefaultNavbar from '../navs/DefaultNavbar';
import MainSearch from '../controls/MainSearch';

import './DefaultHeader.scss';

const DefaultHeader = () => {
  const onSubmit = useCallback(formData => {
    alert('submited', formData);
  });

  return (
    <Container fluid className="default-header">
      <Row className="default-header-nav">
        <Col>
          <DefaultNavbar />
        </Col>
      </Row>

      <Row className="default-header-search align-items-center">
        <Col md={{ span: 4, offset: 4 }}>
          <MainSearch onSubmit={onSubmit} />
        </Col>
      </Row>
    </Container>
  );
};

DefaultHeader.propTypes = {};

export default DefaultHeader;
