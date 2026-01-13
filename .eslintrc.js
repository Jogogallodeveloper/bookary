module.exports = {
  root: true,
  extends: ['react-app', 'plugin:react/recommended', 'prettier'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'react/react-in-jsx-scope': 'off',
  },
};
