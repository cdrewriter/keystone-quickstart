import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import KeystoneJSLogo from '../icons/Logo';
import FooterNav from '../navs/FooterNav';

import './DefaultFooter.scss';

const DefaultFooter = () => {
  return (
    <Container className="default-footer">
      <Row>
        <Col lg={4} md={12} xs={12} className="mb-4">
          <p className="default-footer-brand">
            <a href="/" title="Homepage">
              <KeystoneJSLogo className="img-fluid" width="220" height="220" />
            </a>
          </p>

          <dl className="default-footer-contact">
            <dd>
              <FontAwesomeIcon className="mr-2" icon={faEnvelope} /> Email:{' '}
              <a href="mailto:nhanhoangtrong94@gmail.com" title="nhanhoangtrong94@gmail.com">
                nhanhoangtrong94@gmail.com
              </a>
            </dd>
          </dl>
        </Col>
        <Col lg={4} md={6} xs={6}>
          <FooterNav
            title="Sitemap"
            items={[
              { name: 'Homepage', path: '/' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact', path: '/contact' },
            ]}
          />
        </Col>
        <Col lg={4} md={6} xs={6}>
          <FooterNav
            title="News"
            items={[
              { name: 'News', path: '/news' },
              { name: 'Blog', path: '/blog' },
            ]}
          />
        </Col>
      </Row>
      <Row>
        <Col className="copyright-text">
          <small>
            Copyright &copy; 2020 - Made with ❤️ by{' '}
            <a rel="noopener noreferrer" href="https://github.com/nhanhoangtrong" title="Kendy Hoang">
              Kendy Hoang
            </a>
          </small>
        </Col>
      </Row>
    </Container>
  );
};

DefaultFooter.propTypes = {};

export default DefaultFooter;
