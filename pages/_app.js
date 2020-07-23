import App from 'next/app';
import React from 'react';
import 'cross-fetch/polyfill';
import { GraphQLProvider } from 'graphql-react';
import { withGraphQLApp } from 'next-graphql-react';

class MyApp extends App {
  render() {
    const { Component, pageProps, graphql } = this.props;

    return (
      <GraphQLProvider graphql={graphql}>
        <Component {...pageProps} />
      </GraphQLProvider>
    );
  }
}

export default withGraphQLApp(MyApp);
