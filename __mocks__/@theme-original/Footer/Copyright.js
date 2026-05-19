const React = require('react');

module.exports = {
  __esModule: true,
  default: ({ children }) => React.createElement('div', { 'data-testid': 'original-copyright' }, children || 'Original Copyright Content')
};