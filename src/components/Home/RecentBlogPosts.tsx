import { BlogPostProvider } from '@docusaurus/plugin-content-blog/client';
import BlogPostItem from '@theme/BlogPostItem';
import { Content } from '@theme/BlogPostPage';
import clsx from 'clsx';
import React from 'react';
import styles from './Home.module.css';

type RecentBlogPostsProps = {
  readonly recentPosts: readonly { readonly content: Content }[];
};

export default function RecentBlogPosts({ recentPosts }: RecentBlogPostsProps) {
  return (
    <div className="container">
      <div className={styles.cardList}>
        {recentPosts.map(({ content: BlogPostContent }) => (
          <div
            className={clsx(styles.card, 'shadow--lw')}
            key={BlogPostContent.metadata.permalink}
          >
            <BlogPostProvider content={BlogPostContent}>
              {BlogPostContent.frontMatter.image && (
                <img src={BlogPostContent.frontMatter.image} alt="" />
              )}
              <BlogPostItem>
                <BlogPostContent />
              </BlogPostItem>
            </BlogPostProvider>
          </div>
        ))}
      </div>
    </div>
  );
}
