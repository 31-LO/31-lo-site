import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./home.module.css";
import CallToAction from "@site/src/components/CallToAction";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <img src="img/logo.png" alt={siteConfig.title} width={200} />
        </h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.button
            )}
            to="/docs/programowanie"
          >
            Programowanie
          </Link>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.button
            )}
            to="/docs/game-dev"
          >
            Game dev
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} 👋`}
      description="Liceum Ogólnokształcące im. Romana INgardena w Krakowie, strona domowa, rekrutacja"
    >
      <HomepageHeader />
      <main className={styles.main}>
        <HomepageFeatures />
        <CallToAction />
      </main>
    </Layout>
  );
}
