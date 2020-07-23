import React from 'react';
import PropTypes from 'prop-types';

import FixedNavBar from '../components/navs/FixedNavBar';
import DefaultFooter from '../components/footers/DefaultFooter';
import DefaultHeader from '../components/headers/DefaultHeader';

import './PageLayout.scss';

const PageLayout = ({ children, className, ...props }) => {
  return (
    <div className={`page-layout${className ? ` ${className}` : ''}`} {...props}>
      <header className="page-layout-header">
        <DefaultHeader />
        <FixedNavBar />
      </header>
      <main className="page-layout-main">{children}</main>
      <footer className="page-layout-footer">
        <DefaultFooter />
      </footer>
    </div>
  );
};

PageLayout.propTypes = {
  children: PropTypes.any,
};

PageLayout.defaultProps = {};

export default PageLayout;
