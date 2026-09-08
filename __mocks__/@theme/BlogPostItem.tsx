import React from 'react';

type BlogPostItemProps = {
  children?: React.ReactNode;
};

const BlogPostItem: React.FC<BlogPostItemProps> = ({ children }) => {
  return <article data-testid="blog-post-item">{children}</article>;
};

export default BlogPostItem;