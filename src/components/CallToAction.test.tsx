import React from 'react';
import { renderToString } from 'react-dom/server';
import CallToAction from './CallToAction';

describe('CallToAction', () => {
  it('should render without crashing', () => {
    expect(() => {
      renderToString(<CallToAction />);
    }).not.toThrow();
  });

  it('should be a function component', () => {
    expect(typeof CallToAction).toBe('function');
  });

  it('renders the main heading correctly', () => {
    const rendered = renderToString(<CallToAction />);
    expect(rendered).toContain('<h2>Chcesz do nas dołączyć?</h2>');
  });

  it('renders the description paragraph', () => {
    const rendered = renderToString(<CallToAction />);
    expect(rendered).toContain('>Zapoznaj się z zasadami rekrutacji i do dzieła!<');
  });

  it('renders the recruitment link with correct href', () => {
    const rendered = renderToString(<CallToAction />);
    expect(rendered).toContain('href="/docs/zasady-rekrutacji"');
    expect(rendered).toContain('>Rekrutacja<');
  });

  it('renders with correct structure', () => {
    const rendered = renderToString(<CallToAction />);

    // Check that the outer container structure is present - note the actual style attribute format
    expect(rendered).toContain('background-color:var(--ifm-color-primary)');
    expect(rendered).toContain('class="container"');

    // Check that Stack components are rendered as divs with MUI classes
    expect(rendered).toContain('class="MuiStack-root');
  });
});