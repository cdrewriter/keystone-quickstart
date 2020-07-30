const { Keystone } = require('@keystonejs/keystone');
const { mysql } = require('mysql');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NextApp } = require('@keystonejs/app-next');
const { StaticApp } = require('@keystonejs/app-static');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');
const { KnexAdapter } = require('@keystonejs/adapter-knex');
const expressSession = require('express-session');
const MongoStore = require('connect-mongo')(expressSession);
const { userIsAdmin } = require('./utils/access');
const { staticRoute, staticPath, distDir } = require('./config');
const {
  User,
  Post,
  PostCategory,
  Contact,
  ItemCategory,
  ItemPrice,
  ItemCar,
  ItemCarCategory,
  ItemService,
  ItemServiceCategory,
} = require('./schema');

const PROJECT_NAME = 'KeystoneJS Quickstart';

// Initialize
const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new MongooseAdapter({
    mongoUri: 'mongodb://194.87.238.134/keystone-js-quickstart',
  }),
  sessionStore: new MongoStore({
    url: 'mongodb://194.87.238.134/keystone-js-quickstart',
  }),
  cookieSecret: '6ArmOCyoLiCWMIlhOkG+6eQ+mWyFM4yF',

  defaultAccess: {
    list: true,
    field: true,
    custom: true,
  },
});
// Load schemas
keystone.createList('User', User);
keystone.createList('PostCategory', PostCategory);
keystone.createList('Post', Post);
keystone.createList('Contact', Contact);
keystone.createList('ItemCategory', ItemCategory);
keystone.createList('ItemPrice', ItemPrice);
keystone.createList('ItemServiceCategory', ItemServiceCategory);
keystone.createList('ItemService', ItemService);
keystone.createList('ItemCar', ItemCar);
keystone.createList('ItemCarCategory', ItemCarCategory);

const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp({
      apiPath: '/admin/api',
      graphiqlPath: '/admin/graphiql',
      apollo: { playground: true, introspection: true },
    }),
    new StaticApp({
      path: staticRoute,
      src: staticPath,
    }),
    new AdminUIApp({
      adminPath: '/admin',
      authStrategy,
      enableDefaultRoute: false,
      isAccessAllowed: userIsAdmin,
    }),
    new NextApp({
      dir: './',
    }),
  ],
  distDir,
};
