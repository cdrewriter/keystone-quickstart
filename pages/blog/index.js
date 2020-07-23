import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useGraphQL } from 'graphql-react';
import PageLayout from '../../templates/PageLayout';
import Utils from '../../utils';

import { Container, Row, Col } from 'react-bootstrap';

import TwoColumns from '../../components/layouts/TwoColumns';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import ExpandedPostItem from '../../components/posts/ExpandedPostItem';
import Pagination from '../../components/pagination/Pagination';
import PostCategories from '../../components/sidebars/PostCategories';

const BlogList = () => {
  const { query } = useRouter();
  const { page, limit, slug } = Utils.getPageInfoFromQuery(query);

  let postsQueryObj = {};
  if (slug) {
    postsQueryObj = { postCategories_every: { slug } };
  }

  const result = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = `${process.browser ? '' : 'http://localhost:3000'}/admin/api`;
    },
    operation: {
      query: /* GraphQL */ `
        query BlogList($where: PostWhereInput, $first: Int, $skip: Int) {
          allPosts(where: $where, first: $first, skip: $skip) {
            id
            title
            slug
            description
            image {
              publicUrl
            }
          }
          allPostCategories {
            id
            slug
            name
          }
          _allPostsMeta {
            count
          }
        }
      `,
      variables: {
        where: postsQueryObj,
        first: limit,
        skip: (page - 1) * limit,
      },
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });
  const { cacheValue } = result;

  if (cacheValue && cacheValue.data) {
    const { allPosts, _allPostsMeta, allPostCategories } = cacheValue.data;
    const postItems = [];
    if (allPosts && allPosts.length) {
      for (let i = 0; i < allPosts.length; ++i) {
        postItems.push(
          <Col key={i} xs={12} md={12} className="mt-2 mb-4">
            <ExpandedPostItem post={allPosts[i]} />
          </Col>
        );
      }
    }
    const pageInfo = {
      page,
      limit,
      totalPages: Math.ceil(_allPostsMeta.count / limit),
      total: _allPostsMeta.count,
    };

    return (
      <PageLayout id="blog-list">
        <Container className="mt-4 mb-4">
          <Breadcrumbs
            pageTitle="Blog"
            pagePath="/blog"
            parts={[
              {
                title: 'Homepage',
                href: '/',
              },
            ]}
          />
        </Container>
        <TwoColumns
          className="mt-4 mb-4"
          aside={<PostCategories postCategories={allPostCategories} activeKey={slug} />}
        >
          <h1>Total {pageInfo.total} posts.</h1>

          {postItems.length ? (
            <React.Fragment>
              <Row>{postItems}</Row>

              <div className="mt-2 mb-4">
                <Pagination pageInfo={pageInfo} />
              </div>
            </React.Fragment>
          ) : (
            <p xs={12} md={12} className="mt-2 mb-4">
              There are no post.
            </p>
          )}
        </TwoColumns>
      </PageLayout>
    );
  }

  return (
    <PageLayout id="blog-list">
      <div className="blog-list" />
    </PageLayout>
  );
};

BlogList.propTypes = {};

export default BlogList;
