import React from 'react';
import { renderToString } from 'react-dom/server';
import Partners from './Partners';

// Mock the image imports since we can't load the actual images in tests
jest.mock('./img/kpt.webp', () => ({ default: 'mock-kpt-image' }));
jest.mock('./img/cisco.webp', () => ({ default: 'mock-cisco-image' }));
jest.mock('./img/draw-distance.webp', () => ({ default: 'mock-draw-distance-image' }));
jest.mock('./img/untitled-kingdom.webp', () => ({ default: 'mock-untitled-kingdom-image' }));
jest.mock('./img/iht.webp', () => ({ default: 'mock-iht-image' }));
jest.mock('./img/salon-reklamy-square.png', () => ({ default: 'mock-salon-reklamy-image' }));
jest.mock('./img/begame.webp', () => ({ default: 'mock-begame-image' }));
jest.mock('./img/wse.webp', () => ({ default: 'mock-wse-image' }));
jest.mock('./img/na-niby.webp', () => ({ default: 'mock-na-niby-image' }));
jest.mock('./img/bartosz-kaminski.webp', () => ({ default: 'mock-bartosz-kaminski-image' }));
jest.mock('./img/make-games-today.webp', () => ({ default: 'mock-make-games-today-image' }));
jest.mock('./img/kms.webp', () => ({ default: 'mock-kms-image' }));
jest.mock('./img/ear.webp', () => ({ default: 'mock-ear-image' }));
jest.mock('./img/swistak.webp', () => ({ default: 'mock-swistak-image' }));
jest.mock('./img/uj.webp', () => ({ default: 'mock-uj-image' }));
jest.mock('./img/proautomator.webp', () => ({ default: 'mock-proautomator-image' }));

describe('Partners Component', () => {
  it('should render without crashing', () => {
    expect(() => {
      renderToString(<Partners />);
    }).not.toThrow();
  });

  it('should render with expected content', () => {
    const rendered = renderToString(<Partners />);
    
    // Check that the rendered content contains key elements
    expect(rendered).toContain('Krakowski Park Technologiczny');
    expect(rendered).toContain('https://www.kpt.krakow.pl/');
    expect(rendered).toContain('Patron całego Liceum');
    expect(rendered).toContain('Cisco Kraków');
    expect(rendered).toContain('drawdistance.dev');
    expect(rendered).toContain('container'); // Main container class
  });

  it('should be a function component', () => {
    expect(typeof Partners).toBe('function');
  });

  it('renders multiple partners', () => {
    const rendered = renderToString(<Partners />);
    
    // Count occurrences of partner-related classes to ensure multiple partners are rendered
    const partnerCount = (rendered.match(/col/g) || []).length;
    expect(partnerCount).toBeGreaterThan(10); // At least 2 columns per partner
  });

  it('renders partner logos with correct attributes', () => {
    const rendered = renderToString(<Partners />);
    
    // Check that images have width and height attributes set
    expect(rendered).toContain('width="300px"');
    expect(rendered).toContain('height="300px"');
  });

  it('renders partner names as links', () => {
    const rendered = renderToString(<Partners />);

    // Check that partner names appear in links
    expect(rendered).toContain('href="https://www.kpt.krakow.pl/"');
    expect(rendered).toContain('href="https://www.facebook.com/CiscoKrakow/"');
    expect(rendered).toContain('Krakowski Park Technologiczny');
    expect(rendered).toContain('Cisco Kraków');
  });

  it('renders partner descriptions', () => {
    const rendered = renderToString(<Partners />);

    // Look for specific text from partner descriptions
    expect(rendered).toContain('Patron całego Liceum. Dzięki KPT możemy');
    expect(rendered).toContain('Cisco opracowuje, produkuje i sprzedaje');
    expect(rendered).toContain('Studio game devowe znane między innymi');
  });

  it('renders specific partner correctly - Krakowski Park Technologiczny', () => {
    const rendered = renderToString(<Partners />);

    // Test for a specific partner - checking if it renders as expected
    expect(rendered).toContain('Krakowski Park Technologiczny');

    // Check that the description for Krakowski Park Tech is present
    expect(rendered).toContain('Patron całego Liceum. Dzięki KPT możemy');

    // Check that the link to their website exists
    expect(rendered).toContain('href="https://www.kpt.krakow.pl/"');
  });

  it('renders with correct structure', () => {
    const rendered = renderToString(<Partners />);
    
    // Check that main container and row structures are present
    expect(rendered).toContain('class="container"');
    expect(rendered).toContain('class="row margin-bottom--xl"');
    expect(rendered).toContain('class="col"');
  });
});