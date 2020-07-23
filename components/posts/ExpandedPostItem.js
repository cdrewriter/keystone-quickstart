import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { postPropTypes } from '../../types';
import { Image } from 'react-bootstrap';

import './ExpandedPostItem.scss';

const ExpandedPostItem = ({ post }) => {
  const { id, title, slug, description, image } = post;
  const href = `/posts/${slug}`;
  return (
    <div id={`post-${id}`} className="expanded-post-item">
      <div className="expanded-post-item__image">
        <Link href={href}>
          <Image src={image.publicUrl} alt={`Image of ${title}`} fluid />
        </Link>
      </div>
      <p className="expanded-post-item__title">
        <Link href={href}>
          <a href={href} title={`See more about ${title}`}>
            <strong>{title}</strong>
          </a>
        </Link>
      </p>
      <p className="expanded-post-item__description">
        {description.endsWith('.') ? description + '..' : description + '...'}
        &nbsp;
        <Link href={href}>
          <a title={`See more about ${title}`}>See more</a>
        </Link>
      </p>
    </div>
  );
};

ExpandedPostItem.propTypes = {
  post: PropTypes.shape(postPropTypes).isRequired,
};

export default ExpandedPostItem;
