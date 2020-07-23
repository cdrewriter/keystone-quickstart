import PropTypes from 'prop-types';
import React from 'react';
import Head from 'next/head';
import App from 'next/app';
import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { createUploadLink } from 'apollo-upload-client';
import fetch from 'cross-fetch';

let globalApolloClient = null;
function createApolloClient(initialState, ctx) {
  // NextPageContext is only available on SSR
  const isSsr = Boolean(ctx) || !process.browser;
  return new ApolloClient({
    ssrMode: isSsr,
    connectToDevTools: !isSsr,
    link: createUploadLink({
      uri: `${isSsr ? 'http://localhost:3000' : ''}/admin/api`,
      fetch,
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
}

export function getApolloClient(initialState, ctx) {
  // Make sure to create new apollo instance each server-
  // side request so that data isn't shared between connections
  if (!process.browser) {
    return createApolloClient(initialState, ctx);
  }

  // But re-use the apollo on client, or
  // create a new one if not available
  if (!globalApolloClient) {
    globalApolloClient = createApolloClient(initialState, ctx);
  }
  return globalApolloClient;
}

export const initOnContext = ctx => {
  const isAppContext = Boolean(ctx.ctx);

  // We consider installing `withApollo({ ssr: true })` on global App level
  // as antipattern since it disables project wide Automatic Static Optimization.
  if (process.env.NODE_ENV === 'development') {
    if (isAppContext) {
      console.warn(
        'Warning: You have opted-out of Automatic Static Optimization due to `withApollo` in `pages/_app`.\n' +
          'Read more: https://err.sh/next.js/opt-out-auto-static-optimization\n'
      );
    }
  }

  // Initial Apollo Client if not already one
  const apolloClient = ctx.apolloClient || getApolloClient(ctx.apolloState || {}, isAppContext ? ctx.ctx : ctx);

  // We send the Apollo Client as a prop to the component to avoid calling initApollo() twice in the server.
  // Otherwise, the component would have to call initApollo() again but this
  // time without the context. Once that happens, the following code will make sure we send
  // the prop as `null` to the browser.
  apolloClient.toJSON = () => null;

  // Add apolloClient to NextPageContext || NextAppContext
  // This allows us to consume the apolloClient inside our
  // custom `getInitialProps({ apolloClient })`.
  ctx.apolloClient = apolloClient;
  if (isAppContext) {
    ctx.ctx.apolloClient = apolloClient;
  }

  return ctx;
};

export const withApollo = ({ ssr = false }) => PageComponent => {
  const WithApollo = ({ apolloState, apolloClient, ...pageProps }) => {
    let client = null;
    if (apolloClient) {
      // Happens on: getDataFromTree & next.js ssr
      client = apolloClient;
    } else {
      // Happends on: next.js csr
      client = getApolloClient(apolloState, undefined);
    }

    return (
      <ApolloProvider client={client}>
        <PageComponent {...pageProps} />
      </ApolloProvider>
    );
  };

  const displayName = PageComponent.displayName || PageComponent.name || 'Component';
  WithApollo.propTypes = {
    apolloState: PropTypes.any,
    apolloClient: PropTypes.any,
  };
  WithApollo.displayName = `withApollo(${displayName})`;

  if (ssr || PageComponent.getInitialProps) {
    // When SSR is enabled or has getInitialProps func
    WithApollo.getInitialProps = async ctx => {
      const isAppContext = Boolean(ctx.ctx);
      const { apolloClient } = initOnContext(ctx);

      // Run wrapped getInitialProps method
      let pageProps = {};
      // First get all initial props if available
      if (PageComponent.getInitialProps) {
        pageProps = await PageComponent.getInitialProps(ctx);
      } else if (isAppContext) {
        pageProps = await App.getInitialProps();
      }

      // Then run all the GraphQL queries in page's component
      // tree and extract the result data
      if (!process.browser) {
        if (ctx.res && (ctx.res.finished || ctx.res.headersSent)) {
          // When redirecting, the response is finished.
          // No point in continuing to render
          return pageProps;
        }
        const { AppTree } = ctx;

        // Only if dataFromTree for ssr is enabled
        if (ssr && AppTree) {
          try {
            const { getDataFromTree } = await import('@apollo/react-ssr');

            // Since AppComponent and PageComponent
            // has different props type, we need to modify
            let props;
            if (isAppContext) {
              props = { ...pageProps, apolloClient };
            } else {
              props = { pageProps: { ...pageProps, apolloClient } };
            }

            // Take the Next.js AppTree, determine which queries
            // are needed to render, and fetch them
            await getDataFromTree(<AppTree {...props} />);
          } catch (error) {
            // Prevent Apollo Client GraphQL errors from crashing SSR.
            // Handle them in components via the data.error prop:
            console.error('Error while running "getDataFromTree"', error);
          }

          // getDataFromTree does not call componentWillUnmount
          // head side effect therefore need to be cleared manually
          Head.rewind();
        }
      }

      return {
        ...pageProps,
        // Extract data from Apollo store and
        // return apollo state as first level props
        // when render from server
        apolloState: apolloClient.cache.extract(),
        // Provide the client for ssr. As soon as this payload
        // get JSON.stringified, it will remove itself
        apolloClient: ctx.apolloClient,
      };
    };
  }

  return WithApollo;
};
