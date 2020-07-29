import App from 'next/app';
import React from 'react';
import 'cross-fetch/polyfill';
import { GraphQLProvider } from 'graphql-react';
import { withGraphQLApp } from 'next-graphql-react';
import './styles.scss';
import PageLayout from '../templates/PageLayoutm';

class MyApp extends App {
  render() {
    const { Component, pageProps, graphql } = this.props;
    return (
      <GraphQLProvider graphql={graphql}>
        <PageLayout id="catalog-cars">
         <Component {...pageProps} />
        </PageLayout>
      </GraphQLProvider>
    );
  }
}

export default withGraphQLApp(MyApp);
