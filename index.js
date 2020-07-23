const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NextApp } = require('@keystonejs/app-next');
const { StaticApp } = require('@keystonejs/app-static');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');

const { userIsAdmin } = require('./utils/access');
const { staticRoute, staticPath, distDir } = require('./config');
const { User, Post, PostCategory, Contact } = require('./schema');

const PROJECT_NAME = 'KeystoneJS Quickstart';

// Initialize
const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new MongooseAdapter(),
  onConnect: async () => {
    // Initialize data
    const users = await keystone.lists.User.adapter.findAll();
    if (!users.length) {
      // When not have any users
      const initialData = require('./initial-data');
      await keystone.createItems(initialData);
    }
  },
});

// Load schemas
keystone.createList('User', User);
keystone.createList('PostCategory', PostCategory);
keystone.createList('Post', Post);
keystone.createList('Contact', Contact);

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
      isAccessAllowed: userIsAdmin,
      hooks: require.resolve('./admin/'),
    }),
    new NextApp({
      dir: './',
    }),
  ],
  distDir,
};
