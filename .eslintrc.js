module.exports = {
  parser: 'babel-eslint',
  rules: {
    'comma-dangle': [ 1, 'always-multiline' ],
    'eol-last': [ 1, 'always' ],
    'indent': [ 2, 2, { SwitchCase: 1 } ],
    'linebreak-style': [ 2, 'unix' ],
    'no-console': [ 1, { allow: [ 'warn', 'error' ] } ],
    'no-empty': 1,
    'no-empty-function': 1,
    'no-trailing-spaces': 1,
    'no-unused-vars': 1,
    'quotes': [ 0, 'double' ],
    'react/no-find-dom-node': 1,
    'react/display-name': 1,
    'semi': [ 1 ],
  },
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
    mocha: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
      modules: true,
    },
  },
  plugins: [
    'react',
  ],
};