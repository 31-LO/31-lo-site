const { createDefaultPreset } = require("ts-jest");

const tsJestTransformCfg = createDefaultPreset().transform;

/** @type {import("jest").Config} **/
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: {
    "^@site/(.*)$": "<rootDir>/$1",
    "^@docusaurus/(.*)$": "<rootDir>/__mocks__/@docusaurus/$1",
    "^@theme/(.*)$": "<rootDir>/__mocks__/@theme/$1",
    "\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
    "\\.(css|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|webp|avif|svg)$": "<rootDir>/__mocks__/imageMock.js",
  },
  transform: {
    ...tsJestTransformCfg,
  },
  transformIgnorePatterns: [
    "node_modules/(?!(camelcase|@docusaurus|@theme)/)"
  ]
};