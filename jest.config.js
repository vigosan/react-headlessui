module.exports = {
  roots: ['src'],
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
};
