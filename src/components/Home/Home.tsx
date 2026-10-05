import CallToAction from '@site/src/components/CallToAction';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import { JSX } from 'react';
import styles from './Home.module.css';
import HomepageHeader from './HomepageHeader';

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Jedyne takie liceum 👋`}
      description="Liceum informatyczne o profilach programowanie i game dev, rekrutacja. Liceum Ogólnokształcące im. Romana Ingardena w Krakowie."
    >
      <HomepageHeader />
      <main className={styles.main}>
        <HomepageFeatures />
        <CallToAction />
      </main>
    </Layout>
  );
}
