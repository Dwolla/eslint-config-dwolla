module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    mocha: true,
    'shared-node-browser': true
  },
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      classes: true
    }
  },
  plugins: ['filenames'],
  extends: [
    'eslint:recommended',
    'eslint-config-airbnb-base',
    'eslint-config-airbnb-base/rules/strict'
  ],
  rules: {
    'no-console': 'error',
    'comma-dangle': ['error', 'never'],
    'max-len': ['error', 120],
    'one-var': ['error', { uninitialized: 'always', initialized: 'never' }],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'filenames/match-regex': ['error', '^[a-z0-9\\-\\.]+$'],
    'new-cap': ['error', { capIsNewExceptions: ['Map'] }],
    yoda: ['error', 'always'],
    'handle-callback-err': 'error',
    'global-require': 'off'
  }
};
