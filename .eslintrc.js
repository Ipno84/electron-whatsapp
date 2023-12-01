module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: ['airbnb-base/legacy', 'eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['webpack.dev.js', 'custom-components/**/*.js', 'forms/**/*.js'],
  env: {
    es6: true,
    jquery: true,
    jest: true,
  },
  rules: {
    curly: 1,
    '@typescript-eslint/explicit-function-return-type': [0],
    '@typescript-eslint/no-explicit-any': [0],
    'ordered-imports': [0],
    'object-literal-sort-keys': [0],
    'max-len': [1, 200],
    'new-parens': 1,
    'no-bitwise': 1,
    'no-cond-assign': 1,
    'no-trailing-spaces': 0,
    'eol-last': 1,
    'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
    semi: 1,
    'no-var': 0,
    'no-new': 0,
    'no-underscore-dangle': 0,
    'no-promise-executor-return': 0,
    'no-async-promise-executor': 0,
    'class-methods-use-this': 0,
    'no-use-before-define': 0,
    'lines-between-class-members': [
      'error',
      {
        enforce: [
          { blankLine: 'never', prev: 'field', next: '*' },
          { blankLine: 'always', prev: 'field', next: 'method' },
          { blankLine: 'always', prev: 'method', next: 'method' },
        ],
      },
    ],
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-template-curly-in-string': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'warn',
    'dot-notation': 'off',
    'no-console': 'warn',
  },
};
