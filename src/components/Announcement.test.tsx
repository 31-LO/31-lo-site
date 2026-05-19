import React from 'react';
import { renderToString } from 'react-dom/server';
import Announcement from './Announcement';

describe('Announcement', () => {
  it('should render without crashing', () => {
    // Test that the component renders without throwing an error
    expect(() => {
      renderToString(<Announcement />);
    }).not.toThrow();
  });

  it('should render with expected content', () => {
    const rendered = renderToString(<Announcement />);
    // Check that the rendered content contains key elements
    expect(rendered).toContain('Dzień otwarty w naszym liceum już DZIŚ!');
    expect(rendered).toContain('https://fb.me/e/1fWdJOYBo');
    expect(rendered).toContain('mock-image-path'); // Mocked image path
  });

  it('should be a function component', () => {
    expect(typeof Announcement).toBe('function');
  });
});