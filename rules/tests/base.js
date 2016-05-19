module.exports = {
  rules: {
    'max-params': 'off',
    'id-length': 'off',
    'max-statements': ['error', 15, { ignoreTopLevelFunctions: true }],
    'no-undefined': 'off',
    'newline-per-chained-call': ['error', { 'ignoreChainWithDepth': 4 }]
  }
};
