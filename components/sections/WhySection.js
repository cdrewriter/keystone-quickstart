import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';

import Section from './Section';
import IntroCard from '../cards/IntroCard';

import './WhySection.scss';

const features = [
  {
    href: 'https://www.keystonejs.com/guides',
    title: 'Fully featured',
    description:
      'Zero assumptions doesn’t mean zero features. Keystone comes with dozens of features out of the box including Lists, Fields, Access Control, Authentication, and Apps. You can add and configure each these, as well as extend, modify or build your own.',
  },
  {
    href: 'https://www.keystonejs.com/guides/graphql-philosophy',
    title: 'Highly extensible',
    description:
      'KeystoneJS provides an extensible Admin Interface and a powerful GraphQL API. These tools, and the building blocks Keystone provides, will allow you to create any type of application.',
  },
  {
    href: 'https://www.keystonejs.com/guides/deployment',
    title: 'Own your data',
    description:
      'Provide your own PostgreSQL or MongoDB database for to Keystone to connect to deploy your application anywhere. Have complete freedom of choice when hosting your data, admin application, API and front-end applications.',
  },
  {
    href: 'https://www.keystonejs.com/quick-start',
    title: 'Get started in minutes',
    description:
      "Our quick start guide will get you up and running in just a few minutes. Let's build a simple todo app with a fresh install of KeystoneJS",
  },
];

const WhySection = () => {
  return (
    <Section className="why-section">
      <Container>
        <Row>
          <Col className="text-center mb-4">
            <h1>Why KeystoneJS</h1>
            <p className="subtitle">
              We believe it’s the ideal back-end for React, Vue or Angular applications, Gatsby and Next.js websites,
              static sites, mobile applications and more
            </p>
          </Col>
        </Row>

        <Row className="align-items-stretch">
          {features.map(({ href, title, description }) => (
            <Col key={href} className="mb-4" xs={12} md={6}>
              <IntroCard seeMoreHref={href} title={title} description={description} className="h-100" />
            </Col>
          ))}
        </Row>
      </Container>
    </Section>
  );
};

WhySection.propTypes = {};

export default WhySection;
