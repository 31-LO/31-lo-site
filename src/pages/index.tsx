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
          <img
            src="img/logo.png"
            alt="XXXI Liceum Ogólnokształcące im. Romana Ingardena w Krakowie"
            width={200}
          />
        </h1>
        <p className={clsx("hero__subtitle", styles.subtitle)}>
          {siteConfig.tagline}
        </p>
        <div className={styles.buttons}>
          <Link
            className={"button button--secondary button--lg"}
            to="/docs/programowanie"
          >
            Programowanie
          </Link>
          <Link
            className={"button button--secondary button--lg"}
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
      title={`Strona startowa 👋`}
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
