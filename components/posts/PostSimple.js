import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { postPropTypes } from '../../types';

import { Image } from 'react-bootstrap';

import './PostSimple.scss';

const PostSimple = ({ post }) => {
  const { id, slug, title, image } = post;
  const href = `/posts/${slug}`;
  return (
    <div className="post-simple">
      <div className="post-simple__image">
        <Link href={href}>
          <Image src={image.publicUrl} alt={`Image of ${title}`} fluid />
        </Link>
      </div>
      <div className="post-simple__title">
        <p>
          <Link href={href}>
            <strong>{title}</strong>
          </Link>
        </p>
      </div>

      <div className="clearfix" />
    </div>
  );
};

PostSimple.propTypes = {
  post: PropTypes.shape(postPropTypes).isRequired,
};

export default PostSimple;
