import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Button, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

import KeystoneJSLogo from '../icons/Logo';

import './DefaultNavbar.scss';

const DefaultNavbar = () => {
  const router = useRouter();
  return (
    <Navbar className="default-navbar" variant="dark" expand="lg">
      <Link href="/">
        <Navbar.Brand href="/" title="KeystoneJS Quickstart">
          <KeystoneJSLogo className="align-top mr-2" width={30} height={30} />
          KeystoneJS
        </Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="default-navbar-nav" className="ml-auto" />
      <Navbar.Collapse id="default-navbar-nav">
        <Nav className="default-navbar-nav ml-auto">
          <Link href="/">
            <Nav.Link href="/" title="Homepage" active={router.pathname === '/'}>
              Homepage
            </Nav.Link>
          </Link>
          <Link href="/introduction">
            <Nav.Link href="/blog" title="Introduction" active={router.pathname.startsWith('/introduction')}>
              Introduction
            </Nav.Link>
          </Link>
          <Link href="/blog">
            <Nav.Link href="/blog" title="Blog" active={router.pathname.startsWith('/blog')}>
              Blog
            </Nav.Link>
          </Link>
          <Link href="/contact">
            <Nav.Link href="/contact" title="Contact" active={router.pathname === '/contact'}>
              Contact
            </Nav.Link>
          </Link>

          <Button
            as="a"
            href="https://www.facebook.com/"
            rel="noopener noreferrer"
            title="Facebook Fanpage"
            target="_blank"
            variant="outline-light"
            className="rounded-circle ml-2"
            style={{ width: 40, height: 40 }}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

DefaultNavbar.propTypes = {};

export default DefaultNavbar;
