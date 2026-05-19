import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './Home';

// Mock all dependencies before importing the Home component
jest.mock('../CallToAction', () => () => <div data-testid="call-to-action">CallToAction Component</div>);
jest.mock('../HomepageFeatures', () => () => <div data-testid="homepage-features">HomepageFeatures Component</div>);
jest.mock('@theme/Layout', () => ({ children, title, description }) => (
  <div data-layout="layout" data-title={title} data-description={description}>
    {children}
  </div>
));
jest.mock('./HomepageHeader', () => () => <div data-testid="homepage-header">HomepageHeader Component</div>);
jest.mock('./RecentBlogPosts', () => ({ recentPosts }: { recentPosts: readonly { readonly content: any }[] }) => (
  <div data-testid="recent-blog-posts">
    {recentPosts.length > 0 ? 'Recent Blog Posts' : 'No Recent Blog Posts'}
  </div>
));

describe('Home', () => {
  const mockRecentPosts: Array<{ content: any }> = [
    {
      content: {
        metadata: {
          permalink: '/blog/test-post-1',
        }
      }
    },
    {
      content: {
        metadata: {
          permalink: '/blog/test-post-2',
        }
      }
    }
  ];

  it('should render without crashing', () => {
    expect(() => {
      renderToString(<Home recentPosts={mockRecentPosts} />);
    }).not.toThrow();
  });

  it('should render with expected layout structure', () => {
    const rendered = renderToString(<Home recentPosts={mockRecentPosts} />);

    expect(rendered).toContain('data-layout="layout"');
    expect(rendered).toContain('data-title="Jedyne takie liceum 👋"');
    expect(rendered).toContain('Liceum informatyczne o profilach programowanie i game dev');
  });

  it('should render the HomepageHeader component', () => {
    const rendered = renderToString(<Home recentPosts={mockRecentPosts} />);

    expect(rendered).toContain('data-testid="homepage-header"');
    expect(rendered).toContain('HomepageHeader Component');
  });

  it('should render the RecentBlogPosts component with posts', () => {
    const rendered = renderToString(<Home recentPosts={mockRecentPosts} />);

    expect(rendered).toContain('data-testid="recent-blog-posts"');
    expect(rendered).toContain('Recent Blog Posts');
  });

  it('should render the RecentBlogPosts component with empty posts', () => {
    const rendered = renderToString(<Home recentPosts={[]} />);

    expect(rendered).toContain('data-testid="recent-blog-posts"');
    expect(rendered).toContain('No Recent Blog Posts');
  });

  it('should render the HomepageFeatures component', () => {
    const rendered = renderToString(<Home recentPosts={mockRecentPosts} />);

    expect(rendered).toContain('data-testid="homepage-features"');
    expect(rendered).toContain('HomepageFeatures Component');
  });

  it('should render the CallToAction component', () => {
    const rendered = renderToString(<Home recentPosts={mockRecentPosts} />);

    expect(rendered).toContain('data-testid="call-to-action"');
    expect(rendered).toContain('CallToAction Component');
  });

  it('should render all components in the correct order', () => {
    const rendered = renderToString(<Home recentPosts={mockRecentPosts} />);

    // Check that components appear in the expected order within the main content
    const headerIndex = rendered.indexOf('data-testid="homepage-header"');
    const recentPostsIndex = rendered.indexOf('data-testid="recent-blog-posts"');
    const featuresIndex = rendered.indexOf('data-testid="homepage-features"');
    const ctaIndex = rendered.indexOf('data-testid="call-to-action"');

    expect(headerIndex).toBeLessThan(recentPostsIndex);
    expect(recentPostsIndex).toBeLessThan(featuresIndex);
    expect(featuresIndex).toBeLessThan(ctaIndex);
  });

  it('should work with different lengths of recentPosts', () => {
    // Test with 1 post
    let rendered = renderToString(<Home recentPosts={[mockRecentPosts[0]]} />);
    expect(rendered).toContain('Recent Blog Posts');

    // Test with 0 posts
    rendered = renderToString(<Home recentPosts={[]} />);
    expect(rendered).toContain('No Recent Blog Posts');
  });

  it('should correctly pass the recentPosts prop to RecentBlogPosts', () => {
    const rendered = renderToString(<Home recentPosts={mockRecentPosts} />);

    expect(rendered).toContain('data-testid="recent-blog-posts"');
  });

  it('component is a function', () => {
    expect(typeof Home).toBe('function');
  });
});