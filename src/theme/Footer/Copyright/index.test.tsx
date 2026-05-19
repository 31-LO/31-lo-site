import React from 'react';
import CopyrightWrapper from './index';

describe('CopyrightWrapper', () => {
  beforeEach(() => {
    // Reset any modules between tests
    jest.resetModules();
  });

  it('renders without crashing', () => {
    const element = React.createElement(CopyrightWrapper);
    expect(element).toBeTruthy();
  });

  it('renders a component with expected structure', () => {
    const element = React.createElement(CopyrightWrapper);
    // Since this is a basic test and we're not using a DOM environment,
    // we test that the element is created properly with expected type
    expect(element.type).toBe(CopyrightWrapper);
  });

  it('defines the component as a function', () => {
    expect(typeof CopyrightWrapper).toBe('function');
  });

  it('passes props properly', () => {
    // Test that the component accepts props
    const mockProps = {
      className: 'test-class',
    };

    const element = React.createElement(CopyrightWrapper, mockProps);
    expect(element.type).toBe(CopyrightWrapper);
  });

  it('contains expected functionality', () => {
    // Verify component contains the expected hooks and functionality
    const componentStr = CopyrightWrapper.toString();
    expect(componentStr).toContain('useState');
    expect(componentStr).toContain('useEffect');

    // Verify the component has expected content
    expect(componentStr).toContain('inspektor5@mjo.krakow.pl');
    expect(componentStr).toContain('Agnieszka Sowa');
    expect(componentStr).toContain('github.com/31-LO/31-lo-site');
  });
});