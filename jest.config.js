module.exports = {
  "collectCoverage": true,
  "collectCoverageFrom": [
    "src/**/*.{js,jsx}",
    "!**/node_modules/**",
  ],
  "coveragePathIgnorePatterns": [
    "src/js/index.js",
    "src/js/actions/types.js",
    "src/js/actions/index.js",
    "src/js/reducers/index.js",
    "src/js/reducers/createStore.js",
    "src/js/reducers/galleryReducer.js",
    "src/js/reducers/*.js",
    "src/scss/*.scss",
    "src/index.html",
  ],
  "coverageDirectory": "<rootDir>/.jest",
  "coverageThreshold": {
    "global": {
      "branches": 40,
      "functions": 40,
      "lines": 40,
      "statements": 40,
    },
  },
  "moduleNameMapper": {
    "\\.(scss)$": "identity-obj-proxy",
    "\\.(jpg)$": "identity-obj-proxy",
    "\\.(png)$": "identity-obj-proxy",
    "\\.(svg)$": "<rootDir>/src/__mocks__/mock-asset.js",
  },
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupFiles": ["<rootDir>/jest.setupFile.js"],
  "setupTestFrameworkScriptFile": "<rootDir>/jest.setupTests.js",
};
