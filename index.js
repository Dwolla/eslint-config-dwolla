module.exports = {
  extends: [
    './rules/es6',
    './rules/react',
    './rules/mocha'
  ].map(require.resolve),
  rules: {}
};
