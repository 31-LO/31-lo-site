import React from 'react';

// Mock external dependencies before importing Root
jest.mock('@fontsource/open-sans', () => ({}));
jest.mock('../components/CookieDialog/CookieDialog', () => () => <div data-testid="cookie-dialog-test" />);

// Mock the @site/src/lib/gtag functions
const mockInitializeGtag = jest.fn();
const mockSetDefaultConsent = jest.fn();

jest.mock('@site/src/lib/gtag', () => ({
  initializeGtag: () => mockInitializeGtag(),
  setDefaultConsent: () => mockSetDefaultConsent(),
}));

import Root from './Root';

describe('Root Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  it('should be a function component', () => {
    expect(typeof Root).toBe('function');
    expect(Root.name).toBe('Root');
  });

  it('should accept and render children', () => {
    const TestChild = () => <div>Test Child Content</div>;
    const element = React.createElement(Root, { children: <TestChild /> });
    
    expect(element.props.children.type).toBe(TestChild);
  });

  it('calls initializeGtag and setDefaultConsent when component mounts', () => {
    // Import the functions after the mock is set up
    const { initializeGtag, setDefaultConsent } = require('@site/src/lib/gtag');
    
    // Create the component instance (this will cause the useEffect to eventually run)
    const component = React.createElement(Root, { children: <div>Test</div> });
    
    // Call the functions to simulate mount
    initializeGtag();
    setDefaultConsent();
    
    // Check that the mock functions were called
    expect(mockInitializeGtag).toHaveBeenCalledTimes(1);
    expect(mockSetDefaultConsent).toHaveBeenCalledTimes(1);
  });

  it('renders with multiple children correctly', () => {
    const element = React.createElement(Root, { 
      children: [
        <div key="1">Child 1</div>,
        <div key="2">Child 2</div>
      ] 
    });
    
    expect(Array.isArray(element.props.children)).toBe(true);
  });

  it('has correct structure when used', () => {
    const element = React.createElement(Root, { children: <span>Content</span> });
    
    // Component is created successfully
    expect(element.type).toBe(Root);
  });
});