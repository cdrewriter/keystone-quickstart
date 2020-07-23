import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Nav, Navbar, Form, Button, FormControl, Container } from 'react-bootstrap';

import KeystoneJSLogo from '../icons/Logo';

import './FixedNavBar.scss';

const FIXED_TRIGGER_POS = 100;

const FixedNavBar = () => {
  const router = useRouter();
  const [showSearch, toggleSearch] = useState(false);
  const [show, showFixedNav] = useState(false);
  useEffect(() => {
    const scrollHandler = () => {
      if (!show && window.scrollY > FIXED_TRIGGER_POS) {
        showFixedNav(true);
      } else if (show && window.scrollY < FIXED_TRIGGER_POS) {
        showFixedNav(false);
      }
    };
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  });
  return (
    <Navbar
      fixed="top"
      className={`fixed-navbar ${show ? 'fixed-navbar--show' : 'fixed-navbar--hide'}`}
      variant="dark"
      bg="danger"
      expand="lg"
    >
      <Container>
        <Link href="/">
          <Navbar.Brand href="/" title="KeystoneJS Quickstart" className="order-1">
            <KeystoneJSLogo />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ml-auto order-3" />
        <Navbar.Collapse id="basic-navbar-nav" className="order-2">
          <Nav className="ml-auto">
            <Nav.Link href="/" title="Homepage" active={router.pathname === '/'}>
              Homepage
            </Nav.Link>
            <Nav.Link href="/introduction" title="Introduction" active={router.pathname === '/introduction'}>
              Introduction
            </Nav.Link>
            <Nav.Link href="/blog" title="Blog" active={router.pathname.startsWith('/blog')}>
              Blog
            </Nav.Link>
            <Nav.Link href="/contact" title="Contact" active={router.pathname === '/contact'}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="ml-2 order-2" inline>
          {showSearch && (
            <FormControl
              type="text"
              placeholder="'Enter' to search"
              className="mr-2 mb-2"
              onKeyPress={e => {
                if (e.key === 'Enter' || e.charCode === 13) {
                  // When user submit, go to search page
                  e.preventDefault();
                  router.push('/search?term=' + encodeURIComponent(e.target.value));
                }
              }}
            />
          )}
          <Button variant="outline-light" className="rounded-circle" onClick={() => toggleSearch(!showSearch)}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>

          <Button
            as="a"
            href="https://www.facebook.com/"
            title="Facebook Fanpage"
            rel="noopener noreferrer"
            target="_blank"
            variant="outline-light"
            className="rounded-circle ml-2"
            style={{ width: 40 }}
          >
            <FontAwesomeIcon icon={faFacebookF} />
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
};

FixedNavBar.propTypes = {};

export default FixedNavBar;
