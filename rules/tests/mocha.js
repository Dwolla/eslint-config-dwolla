module.exports = {
  env: {
    mocha: true
  },

  plugins: ['mocha'],

  extends: ['plugin:mocha/recommended'],

  rules: {
    'mocha/no-skipped-tests': 'error'
  }
};
