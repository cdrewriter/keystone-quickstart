import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { ListGroup } from 'react-bootstrap';

import { categoryPropTypes } from '../../types2/Category';

const PostCategories = ({ postCategories, activeKey }) => {
  const items = [
    <ListGroup.Item key="all" active={activeKey === ''}>
      {activeKey === '' ? (
        'All categories'
      ) : (
        <Link href="/blog">
          <a title="All categories">All categories</a>
        </Link>
      )}
    </ListGroup.Item>,
  ];
  for (let i = 0; i < (postCategories ? postCategories.length : 0); ++i) {
    const cat = postCategories[i];
    const active = activeKey === cat.slug;
    items.push(
      <ListGroup.Item key={cat.id} active={active}>
        {active ? (
          cat.name
        ) : (
          <Link href={`/blog/${cat.slug}`}>
            <a title={cat.name}>{cat.name}</a>
          </Link>
        )}
      </ListGroup.Item>
    );
  }
  return (
    <ListGroup className="post-categories" as="ul">
      {items}
    </ListGroup>
  );
};

PostCategories.propTypes = {
  activeKey: PropTypes.string,
  postCategories: PropTypes.arrayOf(PropTypes.shape(categoryPropTypes)),
};

PostCategories.defaultProps = {
  activeKey: '',
};

export default PostCategories;
