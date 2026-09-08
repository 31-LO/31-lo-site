// Mock for @docusaurus/plugin-content-blog/client
// This mock provides the BlogPostProvider as a component that simply renders its children

const React = require('react');

const BlogPostProvider = ({ children }) => {
  return React.createElement('div', { 'data-testid': 'blog-post-provider' }, children);
};

const useBlogPost = () => ({
  metadata: {},
  frontMatter: {},
  assets: {},
  toc: [],
  isBlogPostPage: false,
});

const useBlogMetadata = () => ({});

module.exports = {
  BlogPostProvider,
  useBlogPost,
  useBlogMetadata,
};