const withSass = require('@zeit/next-sass');
const { withGraphQLConfig } = require('next-graphql-react/server');
const { distDir } = require('./config');

module.exports = withGraphQLConfig(
  withSass({
    dev: process.env.NODE_ENV === 'development',
   // distDir: `../${distDir}`,
  })
);
