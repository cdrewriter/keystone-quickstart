import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { createReactComponent } from '../../lib/react-utils';
import './FooterNav.scss';

export const FooterNavListItem = ({ path, name }) => {
  return (
    <li className="footer-nav-list-item">
      <Link href={path}>
        <a href={path} title={name}>
          {name}
        </a>
      </Link>
    </li>
  );
};

FooterNavListItem.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
};

export const FooterNavList = createReactComponent('FooterNavList', 'ul', 'footer-nav-list');

export const FooterNavTitle = createReactComponent('FooterNavTitle', 'h5', 'footer-nav-title');
export const FooterNavIndicator = createReactComponent('FooterNavIndicator', 'div', 'footer-nav-indicator');
const FooterNav = ({ title, items }) => {
  return (
    <div className="footer-nav" role="navigation" aria-label={title}>
      <FooterNavTitle>{title}</FooterNavTitle>
      <FooterNavIndicator />

      <FooterNavList>
        {items.map((it, idx) => {
          return <FooterNavListItem key={idx} {...it} />;
        })}
      </FooterNavList>
    </div>
  );
};

FooterNav.propTypes = {
  title: PropTypes.string,
  items: PropTypes.any,
};

export default FooterNav;
