import React from 'react';
import { renderToString } from 'react-dom/server';
import HomepageHeader from './HomepageHeader';

// Mock the KrakowLogoFrame component
jest.mock('@site/src/components/KrakowLogoFrame/KrakowLogoFrame', () => ({ children }) => (
  <div data-testid="krakow-logo-frame">{children}</div>
));

describe('HomepageHeader', () => {
  it('should be a function component', () => {
    expect(typeof HomepageHeader).toBe('function');
    expect(HomepageHeader.name).toBe('HomepageHeader');
  });

  it('should render without crashing', () => {
    expect(() => {
      renderToString(<HomepageHeader />);
    }).not.toThrow();
  });

  it('renders with the correct class names', () => {
    const rendered = renderToString(<HomepageHeader />);

    expect(rendered).toContain('hero hero--primary');
    expect(rendered).toContain('heroBanner');
  });

  it('renders the KrakowLogoFrame wrapper', () => {
    const rendered = renderToString(<HomepageHeader />);

    expect(rendered).toContain('data-testid="krakow-logo-frame"');
  });

  it('renders the school logo image with correct attributes', () => {
    const rendered = renderToString(<HomepageHeader />);

    expect(rendered).toContain('src="img/logo.png"');
    expect(rendered).toContain('alt="XXXI Liceum Ogólnokształcące im. Romana Ingardena w Krakowie"');
    expect(rendered).toContain('width="200"');
  });

  it('renders the site config tagline as subtitle', () => {
    const rendered = renderToString(<HomepageHeader />);

    expect(rendered).toContain('Test Tagline');
    expect(rendered).toContain('hero__subtitle');
    expect(rendered).toContain('subtitle');
  });

  it('renders both programowanie and game dev buttons', () => {
    const rendered = renderToString(<HomepageHeader />);

    expect(rendered).toContain('>Programowanie<');
    expect(rendered).toContain('href="/docs/profile#programowanie"');
    
    expect(rendered).toContain('>Game dev<');
    expect(rendered).toContain('href="/docs/profile#game-dev"');
  });

  it('renders buttons with correct CSS classes', () => {
    const rendered = renderToString(<HomepageHeader />);

    expect(rendered).toContain('button button--secondary button--lg');
  });

  it('renders the container div structure', () => {
    const rendered = renderToString(<HomepageHeader />);

    expect(rendered).toContain('class="container"');
  });

  it('renders the hero title div', () => {
    const rendered = renderToString(<HomepageHeader />);

    expect(rendered).toContain('class="hero__title"');
  });

  it('wraps buttons in the correct CSS class', () => {
    const rendered = renderToString(<HomepageHeader />);

    expect(rendered).toContain('class="buttons"');
  });

  it('has the correct hierarchy of elements', () => {
    const rendered = renderToString(<HomepageHeader />);

    // Check that the container wraps all the content inside
    expect(rendered).toContain('<div class="container">');

    // Check that the logo img is inside hero__title div
    expect(rendered).toContain('<div class="hero__title">');
    expect(rendered).toContain('src="img/logo.png"');

    // Check that subtitle and buttons come after the title
    const titleIndex = rendered.indexOf('<div class="hero__title">');
    const subtitleIndex = rendered.indexOf('<h1 class="hero__subtitle');
    const buttonsIndex = rendered.indexOf('class="buttons"');

    expect(subtitleIndex).toBeGreaterThan(titleIndex);
    expect(buttonsIndex).toBeGreaterThan(subtitleIndex);
  });

  it('contains both profile links in the buttons section', () => {
    const rendered = renderToString(<HomepageHeader />);

    const buttonsStart = rendered.indexOf('class="buttons"');
    const buttonsEnd = rendered.indexOf('</div>', buttonsStart);

    const buttonsSection = rendered.substring(buttonsStart, buttonsEnd);

    expect(buttonsSection).toContain('/docs/profile#programowanie');
    expect(buttonsSection).toContain('/docs/profile#game-dev');
  });
});