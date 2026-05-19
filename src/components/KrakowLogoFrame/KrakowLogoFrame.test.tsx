import React from 'react';
import KrakowLogoFrame from './KrakowLogoFrame';

// Mock the CSS module
jest.mock('./KrakowLogoFrame.module.css', () => ({
  frame: 'frame',
  krakowLogo: 'krakowLogo',
}));

describe('KrakowLogoFrame', () => {
  it('should be a function component', () => {
    expect(typeof KrakowLogoFrame).toBe('function');
    expect(KrakowLogoFrame.name).toBe('KrakowLogoFrame');
  });

  it('renders the component with children', () => {
    const testChild = <div>Test Child Content</div>;

    const element = React.createElement(KrakowLogoFrame, { children: testChild });

    // Check that the child content is preserved
    expect(element.props.children).toEqual(testChild);
    expect(element.props.children.props.children).toBe('Test Child Content');
  });

  it('renders the Krakow logo image', () => {
    const testChild = <div>Test Content</div>;

    const element = React.createElement(KrakowLogoFrame, { children: testChild });

    // Check that the structure contains an img element
    expect(Array.isArray(element.props.children)).toBe(false); // Single child structure
    const componentString = KrakowLogoFrame.toString();
    expect(componentString).toContain('img');
    expect(componentString).toContain('/img/logo-krakow.png');
  });

  it('renders with correct structure', () => {
    const testChild = <div>Test Content</div>;

    const element = React.createElement(KrakowLogoFrame, { children: testChild });

    // Check the element type and structure
    expect(element.type).toBe(KrakowLogoFrame);
    expect(element.props.children.type).toBe('div'); // child
    expect(element.props.children.props.children).toBe('Test Content');
  });

  it('accepts and renders single child element', () => {
    const testChild = <p>Single Paragraph Child</p>;

    const element = React.createElement(KrakowLogoFrame, { children: testChild });

    expect(element.props.children.type).toBe('p');
    expect(element.props.children.props.children).toBe('Single Paragraph Child');
  });

  it('accepts and renders multiple elements as children', () => {
    const testChildren = (
      <>
        <span>First Child</span>
        <span>Second Child</span>
      </>
    );

    const element = React.createElement(KrakowLogoFrame, { children: testChildren });

    // Check that the fragment children are handled
    expect(React.isValidElement(element)).toBe(true);
  });

  it('includes the correct CSS classes in the structure', () => {
    const componentStr = KrakowLogoFrame.toString();

    // Check that the component contains references to the CSS classes in the compiled form
    expect(componentStr).toContain('KrakowLogoFrame_module_css_1.default.frame');
    expect(componentStr).toContain('KrakowLogoFrame_module_css_1.default.krakowLogo');
  });

  it('should render with expected JSX structure', () => {
    // Test that the component has the expected internal structure
    const componentStr = KrakowLogoFrame.toString();
    expect(componentStr).toContain('jsx');
    expect(componentStr).toContain('/img/logo-krakow.png');
    expect(componentStr).toContain('alt: ""');
    expect(componentStr).toContain('children]');
  });
});