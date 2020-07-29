import React from 'react';
import 'cross-fetch/polyfill';
import { GraphQLProvider } from 'graphql-react';
import { withGraphQLApp } from 'next-graphql-react';
import PropTypes from 'prop-types';
import { loadCSS } from 'fg-loadcss';
import Head from 'next/head';
import PageLayout from '../templates/PageLayoutm';
import './styles.scss';

function MyApp(props) {
  const { Component, pageProps, graphql } = props;
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  React.useEffect(() => {
    loadCSS('https://use.fontawesome.com/releases/v5.12.0/css/all.css', document.querySelector('#font-awesome-css'));
  }, []);
  return (
    <>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>
      <GraphQLProvider graphql={graphql}>
        <PageLayout id="catalog-cars">
          <Component {...pageProps} />
        </PageLayout>
      </GraphQLProvider>
    </>
  );
}

export default withGraphQLApp(MyApp);

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
