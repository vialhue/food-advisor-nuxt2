module.exports = {
  testEnvironment: 'jsdom',

  moduleFileExtensions: ['js', 'json', 'vue'],

  transform: {
    '^.+\\.js$': 'babel-jest',
    '.*\\.(vue)$': 'vue-jest'
  },

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1'
  },

  collectCoverage: true,

  collectCoverageFrom: [
    'components/**/*.vue',
    'pages/**/*.vue',
    'layouts/**/*.vue',
    'store/**/*.js',
    '!**/node_modules/**'
  ],

  coverageReporters: [
    'text',
    'text-summary',
    'html',
    'lcov'
  ]
}