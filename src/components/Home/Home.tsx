import CallToAction from '@site/src/components/CallToAction';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { Content } from '@theme/BlogPostPage';
import Layout from '@theme/Layout';
import styles from './Home.module.css';
import HomepageHeader from './HomepageHeader';
import RecentBlogPosts from './RecentBlogPosts';

interface Props {
  readonly recentPosts: readonly { readonly content: Content }[];
}

export default function Home({ recentPosts }: Props): JSX.Element {
  return (
    <Layout
      title={`Jedyne takie liceum 👋`}
      description="Liceum informatyczne o profilach programowanie i game dev, rekrutacja. Liceum Ogólnokształcące im. Romana Ingardena w Krakowie."
    >
      <HomepageHeader />
      <main className={styles.main}>
        <RecentBlogPosts recentPosts={recentPosts} />
        <HomepageFeatures />
        <CallToAction />
      </main>
    </Layout>
  );
}
