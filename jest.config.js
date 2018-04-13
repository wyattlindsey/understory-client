const moduleNameMapper = {
  '\\.(css|pcss)$': 'identity-obj-proxy',
  '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
    '<rootDir>/config/jest/fileMock.js',
}

module.exports = {
  automock: false,
  browser: true,
  moduleNameMapper,
  modulePaths: ['<rootDir>', '<rootDir>/node_modules', '<rootDir>/src'],
  modulePathIgnorePatterns: ['<rootDir>/server'],
  setupFiles: ['<rootDir>/config/jest/jestSetup.js'],
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.js?(x)',
    '<rootDir>/src/**/?(*.)(spec|test).js?(x)',
  ],
  testPathIgnorePatterns: ['<rootDir>/server', '<rootDir>/node_modules/'],
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
}
