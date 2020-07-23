import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col, Button } from 'react-bootstrap';
import Section from './Section';

import './IntroSection.scss';

const IntroSection = () => {
  return (
    <Section className="intro-section">
      <Container className="">
        <Row>
          <Col>
            <h1>A scalable, extensible and open-source platform to build NodeJS applications</h1>

            <p>
              KeystoneJS comes with first-class GraphQL support, a highly extensible architecture, and a wonderful Admin
              UI
            </p>
          </Col>

          <Col>
            <h1>
              <code>{'schema => ({(GraphQL, AdminUI)})'}</code>
            </h1>
            <p>
              A KeystoneJS instance can be summarised as a function of your schema which creates a GraphQL API for
              querying, and an AdminUI for managing your data
            </p>
          </Col>
        </Row>
      </Container>
    </Section>
  );
};

IntroSection.propTypes = {};

export default IntroSection;
