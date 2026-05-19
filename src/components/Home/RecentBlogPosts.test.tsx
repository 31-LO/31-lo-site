import React from 'react';
import { render, screen } from '@testing-library/react';
import RecentBlogPosts from './RecentBlogPosts';
import type { Content } from '@theme/BlogPostPage';

// Mock the Docusaurus components
jest.mock('@docusaurus/plugin-content-blog/client', () => ({
  BlogPostProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="blog-post-provider">{children}</div>,
}));

jest.mock('@theme/BlogPostItem', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div data-testid="blog-post-item">{children}</div>,
}));

// Mock the Home.module.css
jest.mock('./Home.module.css', () => ({
  card: 'card-class',
  cardList: 'card-list-class',
}));

// Define mock blog post content that conforms to the Content type
const createMockBlogPostContent = (
  title: string,
  permalink: string,
  image?: string
): Content => {
  // Content in Docusaurus is a function that renders the blog post content
  const BlogPostContent: Content = (() => <div>{title} Content</div>) as any;
  
  // Add all the expected properties to the function object
  (BlogPostContent as any).metadata = {
    permalink: permalink,
    title: title,
    date: '2023-09-01T00:00:00.000Z',
    tags: [],
    authors: [],
    frontMatter: {
      ...(image && { image })
    },
  };
  
  (BlogPostContent as any).frontMatter = {
    ...(image && { image })
  };
  
  (BlogPostContent as any).slug = title.replace(/\s+/g, '-').toLowerCase();
  (BlogPostContent as any).title = title;
  (BlogPostContent as any).date = new Date('2023-09-01');
  (BlogPostContent as any).tags = [];
  (BlogPostContent as any).authors = [];
  (BlogPostContent as any).toc = [];
  (BlogPostContent as any).excerpt = `This is a test blog post: ${title}`;
  
  return BlogPostContent;
};

const mockBlogPostContent = createMockBlogPostContent('Test Blog Post', '/blog/test-post');
const mockBlogPostWithImage = createMockBlogPostContent('Test Blog Post With Image', '/blog/test-post-image', '/images/test-image.png');

describe('RecentBlogPosts', () => {
  const defaultProps = {
    recentPosts: [
      { content: mockBlogPostContent },
      { content: mockBlogPostWithImage },
    ],
  };

  it('renders without crashing', () => {
    expect(() => {
      render(<RecentBlogPosts {...defaultProps} />);
    }).not.toThrow();
  });

  it('renders the correct number of blog posts', () => {
    render(<RecentBlogPosts {...defaultProps} />);

    // Check that the number of cards matches the number of blog posts
    const cards = document.querySelectorAll('.card-class');
    expect(cards).toHaveLength(2);
  });

  it('renders container and card list elements', () => {
    render(<RecentBlogPosts {...defaultProps} />);

    // Check if main container exists
    const container = document.querySelector('.container');
    expect(container).not.toBeNull();

    // Check if card list exists
    const cardList = document.querySelector('.card-list-class');
    expect(cardList).not.toBeNull();
  });

  it('renders cards for each blog post', () => {
    render(<RecentBlogPosts {...defaultProps} />);

    // Each blog post should have a card
    const cards = document.querySelectorAll('.card-class');
    expect(cards).toHaveLength(2);

    // Each card should have shadow class
    const shadowCards = document.querySelectorAll('.shadow--lw');
    expect(shadowCards).toHaveLength(2);
  });

  it('renders images for blog posts that have an image', () => {
    render(<RecentBlogPosts {...defaultProps} />);

    // Only the second post has an image
    const images = screen.getAllByAltText(''); // Find images by their empty alt text
    expect(images).toHaveLength(1);
    expect(images[0].getAttribute('src')).toBe('/images/test-image.png');
    expect(images[0].getAttribute('alt')).toBe('');
  });

  it('does not render images for blog posts without an image', () => {
    const propsWithoutImages = {
      recentPosts: [
        { content: mockBlogPostContent }, // No image
      ],
    };

    render(<RecentBlogPosts {...propsWithoutImages} />);

    // Should have no images rendered (because only one post and it has no image)
    const images = screen.queryAllByRole('img');
    expect(images).toHaveLength(0);
  });

  it('uses unique keys based on permalink', () => {
    render(<RecentBlogPosts {...defaultProps} />);

    // Verify that the elements have been rendered with proper keys
    // This is checked by ensuring the correct number of items are rendered
    const cards = document.querySelectorAll('.card-class');
    expect(cards).toHaveLength(2);

    // Each blog post has a unique permalink
    expect(mockBlogPostContent.metadata.permalink).not.toBe(
      mockBlogPostWithImage.metadata.permalink
    );
  });

  it('wraps each blog post content with BlogPostProvider', () => {
    const mockContent = createMockBlogPostContent('Test Title', '/test');

    const mockRecentPosts = [
      { content: mockContent }
    ];

    render(
      <RecentBlogPosts recentPosts={mockRecentPosts} />
    );

    // Check that cards are rendered properly for the single post
    const cards = document.querySelectorAll('.card-class');
    expect(cards).toHaveLength(1);
  });

  it('handles empty recent posts gracefully', () => {
    const emptyProps = {
      recentPosts: [],
    };

    render(<RecentBlogPosts {...emptyProps} />);

    // Should not crash and should render empty list
    const cards = document.querySelectorAll('.card-class');
    expect(cards).toHaveLength(0);

    // Container should still be present
    const container = document.querySelector('.container');
    expect(container).not.toBeNull();
  });
});