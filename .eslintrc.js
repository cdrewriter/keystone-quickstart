module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: ['../.eslintrc', 'plugin:react/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
    sourceType: 'module',
    ecmaFeatures: 2018,
  },
  plugins: ['react', 'jsx-a11y', 'react-hooks'],
  settings: {
    react: {
      version: '16.8',
    },
  },
};
