
require('dotenv').config();

module.exports = {
  port: process.env.PORT || 7081,
  staticRoute: '/public', // The URL portion
  staticPath: 'public', // The local path on disk
  distDir: 'dist',
  databaseUrl: process.env.DATABASE_URL || '',
};
