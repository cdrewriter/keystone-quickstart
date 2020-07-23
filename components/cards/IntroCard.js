import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

import './IntroCard.scss';

const IntroCard = ({ className, title, description, seeMoreHref, ...props }) => {
  return (
    <Card className={`intro-card${className ? ' ' + className : ''}`} {...props}>
      <Card.Body>
        <Card.Title>
          <a className="text-success" title={title} href={seeMoreHref}>
            {title}
          </a>
        </Card.Title>
        <Card.Text>{description}</Card.Text>
        <a href={seeMoreHref} title="See more">
          See more
        </a>
      </Card.Body>
    </Card>
  );
};

IntroCard.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  seeMoreHref: PropTypes.string,
};

export default IntroCard;
