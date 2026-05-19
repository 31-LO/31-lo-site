// Setup for Jest tests

// Import jest-dom matchers
import '@testing-library/jest-dom';

// Polyfill for TextEncoder if it's not available in the jsdom environment
if (typeof TextEncoder === "undefined") {
  const { TextEncoder } = require("util");
  global.TextEncoder = TextEncoder;
}

if (typeof TextDecoder === "undefined") {
  const { TextDecoder } = require("util");
  global.TextDecoder = TextDecoder;
}