import React from 'react';
import PropTypes from 'prop-types';
import { BreadcrumbJsonLd } from 'next-seo';
import Config from '../../configs';

import { Breadcrumb } from 'react-bootstrap';

import './Breadcrumbs.scss';

const baseUrl = Config.BASE_URL.replace(/\/$/, '');

const Breadcrumbs = ({ pageTitle, pagePath, parts }) => {
  const breadcrumbItems = [],
    itemListElements = [];

  for (let i = 0; i < parts.length; ++i) {
    breadcrumbItems.push(
      <Breadcrumb.Item key={i} href={parts[i].href}>
        {parts[i].title}
      </Breadcrumb.Item>
    );
    itemListElements.push({
      position: i + 1,
      name: parts[i].title,
      item: baseUrl + parts[i].href,
    });
  }

  itemListElements.push({
    position: parts.length,
    name: pageTitle,
    item: baseUrl + pagePath,
  });

  return (
    <React.Fragment>
      <BreadcrumbJsonLd itemListElements={itemListElements} />
      <Breadcrumb className="breadcrumbs">
        {breadcrumbItems}
        {!!pageTitle && <Breadcrumb.Item active>{pageTitle}</Breadcrumb.Item>}
      </Breadcrumb>
    </React.Fragment>
  );
};

Breadcrumbs.propTypes = {
  pageTitle: PropTypes.string,
  pagePath: PropTypes.string,
  parts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
    })
  ),
};

export default Breadcrumbs;
