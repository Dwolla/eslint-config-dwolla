module.exports = {
  extends: [
    'plugin:react/recommended',
    'eslint-config-airbnb/rules/react',
    'eslint-config-airbnb/rules/react-a11y'
  ],
  rules: {
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-no-bind': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-key': 'error',
    'jsx-quotes': 'error',
    'react/no-is-mounted': 'error',
    'react/no-unknown-property': 'error',
    'react/react-in-jsx-scope': 'error',
    'react/self-closing-comp': 'error',
    'react/wrap-multilines': 'error',
    'no-extra-parens': 'off',
    'react/display-name': 'error',
    'react/prefer-stateless-function': 'error',
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'import/prefer-default-export': 'error',
    'react/jsx-no-target-blank': 'off'  // disabled because of the need to track referrers across internal properties
  }
};
