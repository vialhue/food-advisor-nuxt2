module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  }
}