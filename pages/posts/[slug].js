import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useGraphQL } from 'graphql-react';
import { Container } from 'react-bootstrap';

import PageLayout from '../../templates/PageLayout';
import TwoColumns from '../../components/layouts/TwoColumns';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import PostDetail from '../../components/posts/PostDetail';
import PostCategories from '../../components/sidebars/PostCategories';

const BlogDetail = () => {
  const { query } = useRouter();
  const { slug } = query;

  const result = useGraphQL({
    fetchOptionsOverride(options) {
      options.url = `${process.browser ? '' : 'http://localhost:3000'}/admin/api`;
    },
    operation: {
      query: /* GraphQL */ `
        query PostDetail($postWhere: PostWhereInput) {
          allPosts(where: $postWhere) {
            id
            slug
            title
            description
            publishedDate
            postCategories {
              id
              name
              slug
            }
            image {
              publicUrl
            }
            content
          }
          allPostCategories {
            id
            name
            slug
          }
        }
      `,
      variables: {
        postWhere: {
          slug,
        },
      },
    },
    loadOnMount: true,
    loadOnReload: true,
    loadOnReset: true,
  });

  const { cacheValue } = result;
  if (cacheValue && cacheValue.data) {
    const { allPosts, allPostCategories } = cacheValue.data;
    if (!allPosts.length) {
      // When post is not found
      return <PageLayout>Not found</PageLayout>;
    }

    const post = allPosts[0];
    const postCategory = post.postCategories[0];

    return (
      <PageLayout className="blog-detail">
        <Container className="mt-4 mb-4">
          <Breadcrumbs
            pagePath={post.slug}
            pageTitle={post.title}
            parts={[
              {
                title: 'Homepage',
                href: '/',
              },
              {
                title: 'Blog',
                href: '/blog',
              },
            ]}
          />
        </Container>
        <TwoColumns
          className="mt-4 mb-4"
          aside={<PostCategories postCategories={allPostCategories} activeKey={postCategory.slug} />}
        >
          <PostDetail post={post} />
        </TwoColumns>
      </PageLayout>
    );
  }

  return 'Loading...';
};

BlogDetail.propTypes = {};

export default BlogDetail;
